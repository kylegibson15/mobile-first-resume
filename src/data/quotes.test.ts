import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { CASE_STUDIES, QUOTED_KINDS } from './projects';
import { PRACTICES } from './practices';

/**
 * Every quotation on this site is checked against the file it cites.
 *
 * The site's entire argument is that its claims are backed by verbatim
 * repository text. Nothing enforced that: the nine data guards measured string
 * lengths, the twenty-one browser checks read rendered HTML, and no check ever
 * opened a source file. Three of five quotations had drifted — one of them a
 * sentence assembled out of four separate bullets that exists in no file
 * anywhere — while every check stayed green.
 *
 * These repositories are siblings of this one on the author's machine. On any
 * other machine they are absent, and a missing repository skips its case
 * rather than failing it: a fresh clone must be able to run a green suite.
 */
const PROJECTS_DIR = fileURLToPath(new URL('../../../', import.meta.url));

/** Collapse runs of whitespace. The only normalisation applied to a quotation. */
const squash = (text: string): string => text.replace(/\s+/g, ' ').trim();

/**
 * Markdown emphasis and code markers are markup, not prose — a reader of the
 * rendered README sees none of them, and `**Exit test**` is the same sentence
 * as `Exit test`. They are stripped from the SOURCE only. Nothing is ever
 * stripped from the quotation, which must be verbatim down to the punctuation:
 * "BEC/battery limits" does not match "BEC and battery limits", and a straight
 * quote does not match a curly one.
 */
const asProse = (source: string): string => squash(source.replace(/\*\*|__|`/g, ''));

/**
 * A quotation may elide text, marked with an ellipsis the reader can see. Each
 * span between ellipses has to appear in the source, and they have to appear in
 * the order the quotation puts them in — otherwise an ellipsis would be a
 * licence to reassemble a document into a sentence it never contained.
 */
const spans = (quote: string): string[] =>
  squash(quote)
    .split(/…|\.\.\./)
    .map((span) => span.trim())
    .filter((span) => span.length > 0);

/**
 * The longest prefix of `needle` that `haystack` actually contains, plus what
 * the source says where the match ran out. A bare "expected true, got false"
 * makes a drifted quotation a needle-in-a-haystack hunt; this points at the
 * exact word where the site and the repository stop agreeing.
 */
function nearest(haystack: string, needle: string): string {
  let longest = 0;
  for (let length = needle.length; length > 0; length -= 1) {
    if (haystack.includes(needle.slice(0, length))) {
      longest = length;
      break;
    }
  }
  if (longest === 0) return 'no part of this text appears in the file at all';
  const at = haystack.indexOf(needle.slice(0, longest));
  return [
    `matched the first ${longest} characters: ${JSON.stringify(needle.slice(0, longest))}`,
    `diverges at:      ${JSON.stringify(needle.slice(longest, longest + 60))}`,
    `file has:         ${JSON.stringify(haystack.slice(at + longest, at + longest + 60))}`,
  ].join('\n    ');
}

interface Quotation {
  label: string;
  sourcePath: string;
  /** Each string is presented to the reader as literal text from the file. */
  texts: readonly string[];
}

const QUOTATIONS: Quotation[] = [
  ...CASE_STUDIES.filter((study) => QUOTED_KINDS.includes(study.evidence.kind)).map((study) => ({
    label: `case study "${study.name}"`,
    // Checked separately below; narrowing here would hide a missing path.
    sourcePath: study.evidence.sourcePath ?? '',
    texts: [study.evidence.body, ...(study.evidence.items ?? [])],
  })),
  ...PRACTICES.map((practice) => ({
    label: `how I work — "${practice.title}"`,
    sourcePath: practice.sourcePath,
    texts: [...(practice.quote ? [practice.quote] : []), ...(practice.items ?? [])],
  })),
];

describe('every quotation is verbatim in the file it cites', () => {
  it('covers every quotation the site presents as sourced', () => {
    // Six case studies, of which two are a diagram and a metric row; three
    // practices. If a case study starts quoting, this number moves and the
    // list above has to be looked at again.
    expect(QUOTATIONS).toHaveLength(7);
  });

  it('gives every quoting case study a source file to be checked against', () => {
    for (const study of CASE_STUDIES) {
      if (!QUOTED_KINDS.includes(study.evidence.kind)) continue;
      expect(study.evidence.sourcePath, `${study.slug} must name its source file`).toMatch(
        /^[\w.-]+\/[\w./-]+$/,
      );
    }
  });

  for (const quotation of QUOTATIONS) {
    it(`${quotation.label} matches ${quotation.sourcePath}`, (context) => {
      const file = `${PROJECTS_DIR}${quotation.sourcePath}`;
      if (!existsSync(file)) {
        // Not a failure. These repositories only exist on the author's
        // machine; a checkout anywhere else must still run a green suite.
        console.warn(
          `SKIPPED — ${quotation.label}: the source repository is not on this machine ` +
            `(looked for ${file}). The quotation was not verified.`,
        );
        context.skip();
        return;
      }

      const source = asProse(readFileSync(file, 'utf8'));
      for (const text of quotation.texts) {
        let searchFrom = 0;
        for (const span of spans(text)) {
          const at = source.indexOf(span, searchFrom);
          expect(
            at,
            `\n  ${quotation.label} quotes text that is not in ${quotation.sourcePath}:\n` +
              `    expected:  ${JSON.stringify(span)}\n    ${nearest(source, span)}\n`,
          ).toBeGreaterThan(-1);
          searchFrom = at + span.length;
        }
      }
    });
  }
});
