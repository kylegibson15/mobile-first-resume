import { spawn } from 'node:child_process';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

export async function launch(port = 9222) {
  const chrome = spawn(CHROME, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=/tmp/cdp-portfolio-${port}`,
    '--no-first-run',
    '--window-size=1280,900',
  ]);

  let spawnError = null;
  chrome.on('error', (error) => {
    spawnError = error;
    console.error('chrome failed to spawn:', error.message);
  });

  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (spawnError) {
      throw new Error(`Chrome did not open its devtools port: spawn failed — ${spawnError.message}`);
    }
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return { chrome, port };
    } catch {
      // still starting
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(
    spawnError
      ? `Chrome did not open its devtools port: spawn failed — ${spawnError.message}`
      : 'Chrome did not open its devtools port (spawned, but the port never became reachable within 15s)',
  );
}

export async function connect(port, url) {
  const res = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, {
    method: 'PUT',
  });
  const target = await res.json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  let id = 0;
  const pending = new Map();

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    const settle = pending.get(msg.id);
    if (!settle) return;
    pending.delete(msg.id);
    if (msg.error) settle.reject(new Error(JSON.stringify(msg.error)));
    else settle.resolve(msg.result);
  });

  // Without these, a tab dying mid-check leaves every send unsettled and the
  // harness hangs instead of cleaning up.
  const failAll = (reason) => {
    for (const [, settle] of pending) settle.reject(new Error(reason));
    pending.clear();
  };
  ws.addEventListener('error', () => failAll('devtools socket errored'));
  ws.addEventListener('close', () => failAll('devtools socket closed'));

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      id += 1;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });

  const evaluate = async (expression) => {
    const result = await send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.exception?.description ?? 'eval failed');
    }
    return result.result.value;
  };

  await send('Runtime.enable');
  await send('Page.enable');

  return { send, evaluate, close: () => ws.close() };
}

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
