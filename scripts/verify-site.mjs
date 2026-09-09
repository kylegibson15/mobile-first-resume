import { readFileSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { connect, launch, sleep } from './cdp.mjs';

const BASE = process.env.BASE ?? 'http://localhost:4321';
const results = [];

function check(name, ok, detail = '') {
  results.push({ ok });
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`);
}

// Headless Chrome's new mode defaults prefers-color-scheme to dark, and this
// site's tokens.css defines a real dark palette. Every check that loads a
// page must force a scheme explicitly, or it silently exercises the wrong
// design instead of the one being verified. Layout/structure/JS-budget-style
// checks below stay light-only (the scheme can't change what they measure);
// the contrast check runs both, since light and dark are separately tuned
// token sets that can fail independently.
const emulatedMedia = (scheme) => ({
  method: 'Emulation.setEmulatedMedia',
  params: { features: [{ name: 'prefers-color-scheme', value: scheme }] },
});
async function openWithScheme(port, url, scheme) {
  const page = await connect(port, 'about:blank');
  const { method, params } = emulatedMedia(scheme);
  await page.send(method, params);
  await page.send('Page.navigate', { url });
  return page;
}
const FORCE_LIGHT = emulatedMedia('light');
const openLight = (port, url) => openWithScheme(port, url, 'light');

const html = readFileSync('build/index.html', 'utf8');

// 1. Readable with JavaScript off. The old site served an empty root div.
check(
  'the résumé is in the served HTML',
  html.includes('Kyle Gibson') && html.includes('holding its own weight'),
  `${(html.length / 1024).toFixed(0)}kB of HTML`,
);

// 2 & 3. Content integrity, over the built output rather than the source.
check('never claims flight software', !/flight software/i.test(html));
for (const repo of ['lerobot', 'mlx-examples', 'AmazingHand']) {
  check(`does not present ${repo} as authored work`, !html.includes(repo));
}

// 4. The JavaScript budget. The target is zero.
const jsFiles = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith('.js')) jsFiles.push(path);
  }
};
walk('build');
const jsBytes = jsFiles.reduce(
  (total, file) => total + Number(execSync(`gzip -c "${file}" | wc -c`).toString().trim()),
  0,
);
check('ships no more than 15kB of JavaScript', jsBytes <= 15360, `${jsBytes} bytes gzipped across ${jsFiles.length} files`);

const { chrome, port } = await launch();

try {
  // 5. Every case study renders all six template parts.
  {
    const page = await openLight(port, `${BASE}/`);
    await sleep(800);
    const studies = await page.evaluate(`
      [...document.querySelectorAll('.study')].map((el) => ({
        slug: el.id,
        heads: [...el.querySelectorAll('h4')].map((h) => h.textContent.trim()),
        hasWhat: Boolean(el.querySelector('.what')?.textContent.trim()),
        hasStack: el.querySelectorAll('.stack li').length,
        hasEvidence: Boolean(el.querySelector('.evidence')?.textContent.trim()),
        hasStatus: Boolean(el.querySelector('.status')?.textContent.trim()),
      }))`);
    check('renders six case studies', studies.length === 6, `${studies.length}`);
    const incomplete = studies.filter(
      (s) =>
        !s.hasWhat ||
        !s.hasStatus ||
        !s.hasEvidence ||
        s.hasStack < 2 ||
        !s.heads.includes('The hard part') ||
        !s.heads.includes('The decision'),
    );
    check(
      'every case study fills all six template parts',
      incomplete.length === 0,
      incomplete.map((s) => s.slug).join(', ') || 'all complete',
    );
    page.close();
  }

  // 6. No horizontal overflow at any width the site will actually meet.
  for (const width of [360, 390, 768, 1280, 1600]) {
    const page = await connect(port, 'about:blank');
    await page.send(FORCE_LIGHT.method, FORCE_LIGHT.params);
    await page.send('Emulation.setDeviceMetricsOverride', {
      width, height: 900, deviceScaleFactor: 1, mobile: width < 500,
    });
    await page.send('Page.navigate', { url: `${BASE}/` });
    await sleep(900);
    const overflow = await page.evaluate(
      'document.documentElement.scrollWidth - window.innerWidth',
    );
    check(`no horizontal overflow at ${width}px`, overflow <= 0, `${overflow}px`);
    page.close();
  }

  // 7. Layout must not shift. Fonts load with `swap`, so this is a real risk.
  {
    const page = await connect(port, 'about:blank');
    await page.send(FORCE_LIGHT.method, FORCE_LIGHT.params);
    await page.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await page.send('Page.navigate', { url: `${BASE}/` });
    const cls = await page.evaluate(`
      new Promise((resolve) => {
        let total = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) if (!entry.hadRecentInput) total += entry.value;
        }).observe({ type: 'layout-shift', buffered: true });
        setTimeout(() => resolve(total), 4000);
      })`);
    check('cumulative layout shift is zero', cls < 0.01, cls.toFixed(4));

    const lcp = await page.evaluate(`
      new Promise((resolve) => {
        let latest = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) latest = entry.startTime;
        }).observe({ type: 'largest-contentful-paint', buffered: true });
        setTimeout(() => resolve(latest), 2000);
      })`);
    check(
      'largest contentful paint is under 1.5s on a throttled profile',
      lcp > 0 && lcp < 1500,
      `${lcp.toFixed(0)}ms at 4x CPU throttle`,
    );
    page.close();
  }

  // 8. Heading structure: exactly one h1, and no level skipped.
  {
    const page = await openLight(port, `${BASE}/`);
    await sleep(800);
    const headings = await page.evaluate(`
      (() => {
        const levels = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')]
          .map((el) => Number(el.tagName[1]));
        const skips = [];
        for (let i = 1; i < levels.length; i += 1) {
          if (levels[i] - levels[i - 1] > 1) skips.push(levels[i - 1] + '->' + levels[i]);
        }
        return {
          h1: levels.filter((l) => l === 1).length,
          skips,
          landmarks: document.querySelectorAll('main').length,
        };
      })()`);
    check('the page has exactly one h1', headings.h1 === 1, String(headings.h1));
    check('no heading level is skipped', headings.skips.length === 0, headings.skips.join(', ') || 'none');
    check('the page has a main landmark', headings.landmarks === 1, String(headings.landmarks));
    page.close();
  }

  // 9. Everything focusable is reachable and shows a focus ring.
  {
    const page = await openLight(port, `${BASE}/`);
    await sleep(800);
    const focus = await page.evaluate(`
      (() => {
        const targets = [...document.querySelectorAll('a[href], button')];
        let ringed = 0;
        for (const el of targets) {
          el.focus();
          const style = getComputedStyle(el, ':focus-visible');
          if (document.activeElement === el && style.outlineStyle !== 'none') ringed += 1;
        }
        return { total: targets.length, ringed };
      })()`);
    check(
      'every link and button is focusable with a visible ring',
      focus.total > 0 && focus.ringed === focus.total,
      `${focus.ringed}/${focus.total}`,
    );
    page.close();
  }

  // 10. Contrast, measured against rendered pixels rather than by eye.
  // Runs in both colour schemes: light and dark carry separately-tuned
  // tokens and either can fail independently of the other. Background is
  // resolved per-element by walking up to the nearest ancestor with a real
  // (non-transparent) background-color rather than assuming body's — a flat
  // `.evidence` figure sits on --paper-raised, not --paper, and the two
  // surfaces aren't equally forgiving in both schemes.
  for (const scheme of ['light', 'dark']) {
    const page = await openWithScheme(port, `${BASE}/`, scheme);
    await sleep(800);
    const worst = await page.evaluate(`
      (() => {
        const lum = (c) => {
          const [r, g, b] = c.map((v) => {
            const s = v / 255;
            return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
          });
          return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };
        const parse = (s) => s.match(/\\d+(\\.\\d+)?/g).map(Number);
        const isTransparent = (s) => {
          if (!s || s === 'transparent') return true;
          const nums = parse(s);
          return nums.length === 4 && nums[3] === 0;
        };
        const bgOf = (el) => {
          for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
            const c = getComputedStyle(n).backgroundColor;
            if (!isTransparent(c)) return c;
          }
          return getComputedStyle(document.body).backgroundColor;
        };
        let worst = 99;
        let worstText = '';
        for (const el of document.querySelectorAll('p, li, h1, h2, h3, h4, blockquote, figcaption, .status, a')) {
          if (!el.textContent.trim()) continue;
          const style = getComputedStyle(el);
          const fg = parse(style.color).slice(0, 3);
          const bg = parse(bgOf(el)).slice(0, 3);
          const size = parseFloat(style.fontSize);
          const large = size >= 24 || (size >= 18.66 && Number(style.fontWeight) >= 700);
          const a = lum(fg);
          const b = lum(bg);
          const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
          const required = large ? 3 : 4.5;
          if (ratio < required && ratio < worst) {
            worst = ratio;
            worstText = el.tagName + (el.className ? '.' + String(el.className).split(' ')[0] : '') + ' ' + size.toFixed(0) + 'px on ' + bgOf(el);
          }
        }
        return { worst: worst === 99 ? null : worst, worstText };
      })()`);
    check(
      `all text meets its contrast requirement (${scheme} mode)`,
      worst.worst === null,
      worst.worst === null ? 'no failures' : `${worst.worst.toFixed(2)}:1 on ${worst.worstText}`,
    );
    page.close();
  }
} finally {
  chrome.kill();
}

const failed = results.filter((r) => !r.ok).length;
console.log(
  failed === 0
    ? `\nPASS — ${results.length}/${results.length} checks`
    : `\nFAIL — ${failed} of ${results.length} checks failed`,
);
process.exit(failed === 0 ? 0 : 1);
