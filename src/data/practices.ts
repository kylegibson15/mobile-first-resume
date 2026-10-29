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
    title: 'The maths before the power',
    body: 'Power budgets and safety rules get written down before a battery is connected, not after something releases smoke.',
  },
  {
    title: 'Honest status',
    body: 'Unfinished work is labelled unfinished, in the repository and on this page. A project that says Phase 0 is worth more than five that claim to be done.',
  },
];
