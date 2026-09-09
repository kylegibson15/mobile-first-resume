import { describe, expect, it } from 'vitest';
import { CASE_STUDIES, FORBIDDEN_PHRASES, NOT_MY_WORK, QUOTED_KINDS } from './projects';

describe('the six case studies', () => {
  it('has exactly six', () => {
    expect(CASE_STUDIES).toHaveLength(6);
  });

  it('gives every one a unique slug', () => {
    const slugs = CASE_STUDIES.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('fills in all six template parts for every one', () => {
    // The template is the design: a case study that cannot say what was hard
    // or show an artifact does not belong on the site.
    for (const study of CASE_STUDIES) {
      expect(study.name.length, study.slug).toBeGreaterThan(0);
      expect(study.what.length, study.slug).toBeGreaterThan(20);
      expect(study.hardPart.length, study.slug).toBeGreaterThan(60);
      expect(study.decision.length, study.slug).toBeGreaterThan(60);
      expect(study.stack.length, study.slug).toBeGreaterThan(1);
      expect(study.evidence.body.length, study.slug).toBeGreaterThan(20);
      expect(study.evidence.source.length, study.slug).toBeGreaterThan(0);
    }
  });

  it('gives every quoted evidence block a resolvable source file', () => {
    // `source` is a citation for the reader ("README.md"); it cannot be
    // opened. `sourcePath` can, and quotes.test.ts opens it. Without this,
    // a new quotation could be added with no way to check it and the
    // verbatim guard would silently not cover it.
    for (const study of CASE_STUDIES) {
      if (!QUOTED_KINDS.includes(study.evidence.kind)) continue;
      expect(study.evidence.sourcePath, study.slug).toBeTruthy();
    }
  });

  it('gives every quote-list the items it promises', () => {
    for (const study of CASE_STUDIES) {
      if (study.evidence.kind !== 'quote-list') continue;
      expect(study.evidence.items?.length, study.slug).toBeGreaterThan(0);
    }
  });

  it('leads with the current role', () => {
    expect(CASE_STUDIES[0].status).toBe('CURRENT');
  });
});

describe('content integrity', () => {
  const corpus = JSON.stringify(CASE_STUDIES).toLowerCase();

  it('never claims Kyle writes flight software', () => {
    // The résumé supports owning the platform that designs and simulates the
    // lander, not writing its flight code. An aerospace interviewer knows the
    // difference, so the wrong claim is worse than no claim.
    for (const phrase of FORBIDDEN_PHRASES) {
      expect(corpus).not.toContain(phrase.toLowerCase());
    }
  });

  it('lists the phrases it forbids', () => {
    expect(FORBIDDEN_PHRASES).toContain('flight software');
  });

  it('never presents other people\'s repositories as authored work', () => {
    // Commit counts on a clone measure upstream history. An interviewer checks.
    for (const repo of NOT_MY_WORK) {
      expect(corpus).not.toContain(repo.toLowerCase());
    }
  });

  it('names every repository that is not his', () => {
    expect(NOT_MY_WORK).toEqual(
      expect.arrayContaining(['lerobot', 'mlx-examples', 'AmazingHand', 'AmazingHandPico']),
    );
  });

  it('makes the lunar claim in the supported form', () => {
    expect(corpus).toContain('designs and simulates');
  });
});
