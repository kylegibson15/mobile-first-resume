/**
 * The narrowest possible declarations for the two Node built-ins the
 * quotation test needs.
 *
 * `@types/node` was deliberately removed from this project: it drags in an
 * ambient `process`, an ambient `Buffer` and a global `fetch` that shadow the
 * browser lib the rest of the source is checked against, which is how a site
 * that ships zero JavaScript ends up type-checking as if it were a server.
 * These four signatures are all the test uses, and they are visible only where
 * `node:fs` / `node:url` are explicitly imported.
 */
declare module 'node:fs' {
  export function readFileSync(path: string, encoding: 'utf8'): string;
  export function existsSync(path: string): boolean;
}

declare module 'node:url' {
  export function fileURLToPath(url: string | URL): string;
}
