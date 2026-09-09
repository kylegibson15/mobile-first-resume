/**
 * The three practices in "How I work", each backed by a line from a
 * repository on this machine.
 *
 * This lives in `src/data` rather than in the component's frontmatter so that
 * `quotes.test.ts` can import it and check every quotation against the file it
 * cites. A quotation that only exists inside an `.astro` file is a quotation
 * nothing can verify.
 */
export interface Practice {
  title: string;
  body: string;
  /** The quotation, or the lead-in that introduces `items`. */
  quote?: string;
  /** Rendered as a list under `quote`. Each item is verbatim source text. */
  items?: readonly string[];
  /** Shown as the citation. */
  source: string;
  /** The file, relative to the directory holding the sibling repositories. */
  sourcePath: string;
}

export const PRACTICES: readonly Practice[] = [
  {
    title: 'Phases with exit tests',
    body: 'Every build gets a plan where each phase ends in a concrete, observable result. Nothing advances on the strength of feeling nearly done.',
    quote:
      'Each phase has an Exit test — a concrete, observable result that must pass before moving on. Don\'t skip ahead: every phase de-risks the next one.',
    source: 'quadruped/PROJECT_PLAN.md',
    sourcePath: 'quadruped/PROJECT_PLAN.md',
  },
  {
    title: 'The maths before the power',
    body: 'Power budgets and safety rules get written down before a battery is connected, not after something releases smoke.',
    quote: 'Never wire the LiPo straight to the servos.',
    source: 'quadruped/docs/lipo_safety.md',
    sourcePath: 'quadruped/docs/lipo_safety.md',
  },
  {
    title: 'Honest status',
    body: 'Unfinished work is labelled unfinished, in the repository and on this page. A project that says Phase 0 is worth more than five that claim to be done.',
    // Previously an interpunct-joined line that dropped the Raspberry Pi 3 row
    // entirely, presented inside a blockquote as if it were the table. It is
    // now all four rows, with the elided middle column marked by an ellipsis
    // in each row and named in the citation.
    items: [
      'Mac Mini M4 Pro … Setting up',
      'Raspberry Pi 4 … Planned',
      'Raspberry Pi 3 … Planned',
      'NVIDIA Jetson Orin Nano … Planned',
    ],
    source: 'home-claw/README.md, hardware table — device and status columns, role column elided',
    sourcePath: 'home-claw/README.md',
  },
];
