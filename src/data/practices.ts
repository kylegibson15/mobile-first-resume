/**
 * The three practices in "How I work". Each is a title and a sentence or two
 * of prose; the case studies above carry the evidence.
 */
export interface Practice {
  title: string;
  body: string;
}

export const PRACTICES: readonly Practice[] = [
  {
    title: 'Phases with exit tests',
    body: 'Every build gets a plan where each phase ends in a concrete, observable result. Nothing advances on the strength of feeling nearly done.',
  },
  {
    title: 'Constraints before code',
    body: 'The power budget before a battery is connected. The access and export rules before controlled data touches a server.',
  },
  {
    title: 'Honest status',
    body: 'Unfinished work is labelled unfinished, in the repository and on this page. A project that says Phase 0 is worth more than five that claim to be done.',
  },
];
