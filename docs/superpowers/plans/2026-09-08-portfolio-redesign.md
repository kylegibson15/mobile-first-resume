# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the résumé site with an evidence-first portfolio in which every project claim is backed by a verbatim artifact from the repository it describes.

**Architecture:** A static Astro site that ships no JavaScript. Content lives in two plain TypeScript data modules; one `CaseStudy` component renders the six-part template that every project must satisfy; styling is Astro's scoped CSS over a small global token sheet. Correctness is enforced by vitest over the data and by a dependency-free Chrome DevTools Protocol harness over the built HTML.

**Tech Stack:** Astro 7, TypeScript (strict), plain CSS with custom properties, vitest, Node 24's built-in `WebSocket` and `fetch` for the browser harness. No UI framework, no CSS framework, no runtime JavaScript.

**Spec:** `docs/superpowers/specs/2026-09-05-portfolio-redesign-design.md`

## Global Constraints

- **Zero runtime JavaScript.** No Astro island directives (`client:load` and friends). Total JS must stay under **15 kB gzipped**; the target is 0.
- **The claim is "the platform that designs and simulates a lunar lander".** The phrase "flight software" must never appear in source or built output. A test enforces this.
- **`lerobot`, `mlx-examples`, `AmazingHand` and `AmazingHandPico` are other people's open-source projects.** They must never appear as authored work. A test enforces this.
- **Every case study must have all six template parts** — name+status, what, hard part, decision, stack, evidence. A missing part fails the build.
- **Every number must trace to `resume.ts` or a repository.** No rounded-up metrics, no invented users.
- TypeScript `strict: true`. No `any`.
- **Motion budget is near zero.** No scroll effects, no entrance animations. Anything that moves respects `prefers-reduced-motion`.
- Contrast at or above **4.5:1** for body text and **3:1** for large text, verified numerically against rendered pixels.
- Content must be readable with JavaScript disabled.

## Two deviations from the spec, and why

1. **Tailwind is dropped, not carried over.** The spec said it carries over. This site is roughly eight components with a bespoke type system; utility classes buy nothing here, and Astro scopes component styles automatically. Plain CSS over a token sheet ships less and reads better. `tailwind.config.js` and `postcss.config.js` are deleted.
2. **`bench.ts` does not carry over — it no longer exists on this branch.** It was destroyed with the tour branch and survives only on `game-boy-resume`. Since the spec independently requires statuses to be re-derived from the repositories rather than inherited from it, Task 2 authors a fresh `src/data/projects.ts`. The old file can be read for reference with `git show game-boy-resume:src/data/bench.ts`.

## One value needing the author's confirmation

`src/data/projects.ts` sets Home Claw's status to `IN BUILD`. The spec records the conflict: `bench.ts` claimed `RUNNING` at 92%, while the repository's own hardware table marks the Mac Mini "Setting up" and every Pi and the Jetson "Planned". This plan takes the conservative, repository-supported value, because overclaiming is the failure mode that costs Kyle credibility. If he confirms it is further along, change the one string.

## File structure

```
astro.config.mjs          Astro config; zero-JS output
tsconfig.json             strict, Astro's base
vitest.config.ts          node environment, src/**/*.test.ts
src/
  data/
    resume.ts             carried over unchanged from the current site
    projects.ts           the six case studies (new)
    projects.test.ts      template completeness + content-integrity guards
  styles/
    tokens.css            colour, type scale, spacing, dark mode
    global.css            reset and base typography
  components/
    CaseStudy.astro       the six-part template — the core component
    Hero.astro
    HowIWork.astro
    Experience.astro
    Contact.astro
    diagrams/
      HomeClawDiagram.astro   inline SVG, LAN boundary
      SentryDiagram.astro     inline SVG, brain/muscle split
  layouts/
    Base.astro            html shell, metadata, styles
  pages/
    index.astro           the single page
scripts/
  cdp.mjs                 dependency-free CDP driver (rebuilt)
  verify-site.mjs         the nine browser checks
```

Deleted: `src/App.tsx`, `src/main.tsx`, `src/components/` (React), `src/hooks/`, `src/store/`, `src/services/`, `src/utils/`, `index.html`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`.

---

### Task 1: Astro scaffold, tokens, and a page that builds

**Files:**
- Create: `astro.config.mjs`, `vitest.config.ts`, `src/styles/tokens.css`, `src/styles/global.css`, `src/layouts/Base.astro`, `src/pages/index.astro`
- Modify: `package.json`, `tsconfig.json`
- Delete: `index.html`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `src/App.tsx`, `src/main.tsx`, `src/components/`, `src/hooks/`, `src/store/`, `src/services/`, `src/utils/`, `src/images/`

**Interfaces:**
- Consumes: nothing.
- Produces: `Base.astro` accepting props `{ title: string; description: string }`; the CSS custom properties listed in `tokens.css`, which every later component reads.

- [ ] **Step 1: Remove the React application**

```bash
git rm -r --quiet src/App.tsx src/main.tsx src/components src/hooks src/store src/services src/utils src/images index.html vite.config.ts tailwind.config.js postcss.config.js
```

`src/data/resume.ts` and `src/index.css` stay for now; `src/index.css` is deleted in Task 6 once its useful values have been mined for the token sheet.

- [ ] **Step 2: Install Astro and remove the React stack**

```bash
npm uninstall react react-dom react-helmet-async react-icons react-type-animation framer-motion three @react-three/fiber @react-three/drei zustand clsx tailwind-merge lenis canvas-confetti @types/react @types/react-dom @types/three @vitejs/plugin-react tailwindcss autoprefixer postcss
npm install astro@^7.3.2
npm install --save-dev vitest@^2.1.8
```

- [ ] **Step 3: Replace the scripts block in `package.json`**

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check",
  "test": "vitest run",
  "deploy": "npm run build && firebase deploy"
}
```

Remove the `lint` script: `eslint` was never installed and the script has always failed.

- [ ] **Step 4: Create `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Firebase Hosting serves this directory; the previous Vite build used it too.
  outDir: './build',
  build: { format: 'file' },
});
```

- [ ] **Step 5: Create `vitest.config.ts`**

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
```

- [ ] **Step 6: Create `src/styles/tokens.css`**

```css
/*
 * Design tokens. Every component reads these; none hardcodes a colour or a
 * size. The type scale is a fifth (1.5) at display sizes and a major third
 * (1.25) in text, which keeps headings decisive without shouting.
 */
:root {
  color-scheme: light dark;

  /* Warm paper, near-black ink. */
  --paper: #faf8f4;
  --paper-raised: #ffffff;
  --ink: #16150f;
  --ink-muted: #57544a;
  --ink-faint: #8a8578;
  --rule: #e3ded2;
  --accent: #b4432a;

  --font-display: 'Newsreader', Georgia, 'Times New Roman', serif;
  --font-text: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: ui-monospace, 'SF Mono', Menlo, monospace;

  --step--1: clamp(0.82rem, 0.79rem + 0.14vw, 0.89rem);
  --step-0: clamp(1rem, 0.96rem + 0.2vw, 1.12rem);
  --step-1: clamp(1.25rem, 1.18rem + 0.34vw, 1.45rem);
  --step-2: clamp(1.56rem, 1.44rem + 0.6vw, 1.9rem);
  --step-3: clamp(1.95rem, 1.74rem + 1.05vw, 2.6rem);
  --step-4: clamp(2.44rem, 2.05rem + 1.9vw, 3.9rem);

  --measure: 68ch;
  --gap-page: clamp(1.25rem, 5vw, 5rem);
  --gap-section: clamp(3.5rem, 9vw, 7rem);
}

@media (prefers-color-scheme: dark) {
  :root {
    --paper: #12110e;
    --paper-raised: #1a1815;
    --ink: #f2efe7;
    --ink-muted: #b0aa9c;
    --ink-faint: #7d7768;
    --rule: #2c2924;
    --accent: #e8734f;
  }
}
```

- [ ] **Step 7: Create `src/styles/global.css`**

```css
@import './tokens.css';

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-text);
  font-size: var(--step-0);
  line-height: 1.6;
  font-synthesis-weight: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3 {
  font-family: var(--font-display);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.015em;
  text-wrap: balance;
}

p {
  text-wrap: pretty;
  max-width: var(--measure);
}

a {
  color: inherit;
  text-underline-offset: 0.18em;
  text-decoration-thickness: from-font;
}

a:hover {
  text-decoration-thickness: 2px;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 2px;
}

.wrap {
  width: 100%;
  max-width: 68rem;
  margin-inline: auto;
  padding-inline: var(--gap-page);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
```

- [ ] **Step 8: Create `src/layouts/Base.astro`**

Fonts are self-hosted in Task 6. Until then the stacks fall back to system faces, which is deliberate: the site must look correct before it looks styled.

```astro
---
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content="#faf8f4" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 9: Create a placeholder `src/pages/index.astro`**

Real content arrives in Tasks 3 and 5. This exists so the build can be proven now.

```astro
---
import Base from '../layouts/Base.astro';
import { profile } from '../data/resume';
---

<Base
  title={`${profile.name} — Software Engineering Lead`}
  description="Kyle Gibson leads the platform that designs and simulates a lunar lander at Blue Origin, and builds robots at night."
>
  <main class="wrap">
    <h1>{profile.name}</h1>
  </main>
</Base>
```

- [ ] **Step 10: Build and verify zero JavaScript is emitted**

```bash
npm run build
find build -name '*.js' | head
```

Expected: the build succeeds and `find` prints nothing. If any `.js` file appears, something pulled in a client island — find it before continuing, because the whole rendering decision rests on this.

- [ ] **Step 11: Verify the résumé text is in the served HTML**

```bash
grep -c "Kyle Gibson" build/index.html
```

Expected: at least 1. This is the check the old site failed — it served an empty `<div id="root">`.

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "Replace the React app with an Astro shell that ships no JavaScript"
```

---

### Task 2: The project data and the content-integrity guards

**Files:**
- Create: `src/data/projects.ts`, `src/data/projects.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:

```ts
export type Status = 'CURRENT' | 'BETA' | 'IN BUILD' | 'TRIALS' | 'PHASE 0' | 'SEASONAL';
export interface Evidence { kind: 'quote' | 'diagram' | 'figures'; source: string; body: string; }
export interface CaseStudy {
  slug: string; name: string; status: Status; what: string;
  hardPart: string; decision: string; stack: readonly string[];
  evidence: Evidence; repo?: string;
}
export const CASE_STUDIES: readonly CaseStudy[];
export const FORBIDDEN_PHRASES: readonly string[];
export const NOT_MY_WORK: readonly string[];
```

- [ ] **Step 1: Write the failing test**

Create `src/data/projects.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { CASE_STUDIES, FORBIDDEN_PHRASES, NOT_MY_WORK } from './projects';

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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/data/projects.test.ts`
Expected: FAIL — cannot resolve `./projects`.

- [ ] **Step 3: Write `src/data/projects.ts`**

Every `hardPart`, `decision` and `evidence` below is drawn from the named
repository. Do not embellish them.

```ts
/**
 * The six case studies.
 *
 * Each one must fill all six parts of the template. The template exists to
 * make marketing copy impossible to write: a project that cannot name its
 * hard part, or show an artifact, does not go on the site.
 */

export type Status = 'CURRENT' | 'BETA' | 'IN BUILD' | 'TRIALS' | 'PHASE 0' | 'SEASONAL';

export interface Evidence {
  /** `quote` renders verbatim repository text; `diagram` an inline SVG; `figures` a metric row. */
  kind: 'quote' | 'diagram' | 'figures';
  /** Where it came from, shown as a citation. */
  source: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  status: Status;
  what: string;
  hardPart: string;
  decision: string;
  stack: readonly string[];
  evidence: Evidence;
  repo?: string;
}

/** Claims that must never appear anywhere in the site's content. */
export const FORBIDDEN_PHRASES: readonly string[] = ['flight software'];

/**
 * Open-source projects cloned onto this machine. Their commit counts are
 * upstream history, not authorship, and they must never be listed as work.
 */
export const NOT_MY_WORK: readonly string[] = [
  'lerobot',
  'mlx-examples',
  'AmazingHand',
  'AmazingHandPico',
];

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: 'blue-origin',
    name: 'Blue Origin — Lunar Permanence',
    status: 'CURRENT',
    what: 'The platform that automates vehicle design, simulation and performance tracking across every lunar subsystem.',
    hardPart:
      'High-volume analysis and simulation jobs that depend on each other, over data classified as CUI — so every row needs access control and every change needs a permanent history, without that bookkeeping becoming the bottleneck.',
    decision:
      'An event-driven architecture on Kubernetes with infrastructure defined in Terraform, so simulation work fans out instead of queueing behind itself. End-to-end simulation time fell by 40%.',
    stack: ['Python', 'TypeScript', 'React', 'Terraform', 'Kubernetes', 'AWS', 'DynamoDB', 'PostgreSQL', 'SQS/SNS', 'Datadog'],
    evidence: {
      kind: 'figures',
      source: 'Lead engineer, five-person team, 2024–present',
      body: '40% faster simulations · 99.999% service availability · 5 engineers led',
    },
  },
  {
    slug: 'amigowego',
    name: 'AmigoWeGo',
    status: 'BETA',
    what: 'Group trip planning that survives contact with a group chat.',
    hardPart:
      'Several people edit one shared plan from a phone and a browser at the same time. Four questions have to stay answerable and consistent across both clients: what is the plan, who is where, what was decided, and who owes what.',
    decision:
      'Contract first. A single OpenAPI document generates both clients, so the Rust backend and the SwiftUI app cannot drift apart — the compiler catches a mismatch that would otherwise surface as a bug on somebody\'s holiday.',
    stack: ['Rust', 'Axum', 'SQLx', 'PostgreSQL 16', 'PostGIS', 'Redis 7', 'React 19', 'SwiftUI', 'Terraform'],
    evidence: {
      kind: 'quote',
      source: 'README.md',
      body: 'When a group uses this app, they should always know: what\'s the plan, who\'s where, what\'s decided, who owes what — tracked and settled without awkward chasing.',
    },
  },
  {
    slug: 'home-claw',
    name: 'Home Claw',
    status: 'IN BUILD',
    what: 'A family assistant that answers from any room and never leaves the house.',
    hardPart:
      'A useful home assistant needs the family\'s schedules, preferences and medical information. Every product that does this well sends that data to someone else\'s servers.',
    decision:
      'Privacy as an architectural constraint rather than a feature. Inference runs locally on a Mac Mini M4 Pro, Raspberry Pi voice stations sit at the edge, and a Jetson bridges to a robot arm. No cloud dependency, no subscription, nothing crossing the LAN boundary — which rules out the easy answer and makes model size a hardware problem.',
    stack: ['MLX', 'FastAPI', 'pgvector', 'Raspberry Pi', 'Jetson Orin Nano'],
    evidence: {
      kind: 'diagram',
      source: 'Architecture, README.md',
      body: 'The LAN boundary is the design: every component that touches family data sits inside it.',
    },
  },
  {
    slug: 'the-observer',
    name: 'The Observer',
    status: 'TRIALS',
    what: 'A camera that keeps only the good photographs of the dogs.',
    hardPart:
      'An all-day camera produces thousands of frames and almost no keepers. Detecting a dog is the easy half; deciding which frames are worth keeping is the actual product, and it is a judgement call.',
    decision:
      'A phased proof of concept where each phase has to pass a gate before the next one earns any time: frame in, dog detection, keeper scoring, portrait crop out. The ladder stops early if a rung fails, instead of arriving at a finished pipeline that produces nothing worth looking at.',
    stack: ['YOLO', 'OpenCV', 'Pi Camera 3', 'Python'],
    evidence: {
      kind: 'quote',
      source: 'README.md',
      body: 'This repo is the proof-of-concept ladder; each phase has a pass/fail gate before the next one earns any time.',
    },
  },
  {
    slug: 'quadruped',
    name: 'Quadruped',
    status: 'PHASE 0',
    what: 'Four legs from nothing: hardware, control software, CAD, simulation, and eventually reinforcement learning.',
    hardPart:
      'A legged robot fails where mechanical design, power delivery and control meet, and each of those can quietly destroy the others — a servo that browns out the controller looks exactly like a bug in the gait.',
    decision:
      'Classic control first and reinforcement learning later, across eight phases that each end in an observable exit test. The power maths and the battery safety rules were written down before anything was energised.',
    stack: ['Fusion 360', 'Jetson', 'MuJoCo', 'Raspberry Pi', 'PCA9685'],
    evidence: {
      kind: 'quote',
      source: 'PROJECT_PLAN.md, Phase 3 exit test',
      body: 'The robot stands in a neutral pose holding its own weight for several minutes without servo overheating or brownout; full-system current stays within BEC and battery limits.',
    },
  },
  {
    slug: 'the-sentry',
    name: 'The Sentry',
    status: 'SEASONAL',
    what: 'An animatronic that tracks people up the driveway every October.',
    hardPart:
      'Computer vision is soft real-time and servo control is hard real-time. Run both on one processor and the vision work steals the timing the servos need, so the head moves in visible jerks.',
    decision:
      'Split the two across processors. A Raspberry Pi is the brain and does the image processing; a Pico or Nano is the muscle and does nothing but precise servo and LED timing. The interface between them is deliberately narrow: simple commands, no shared state.',
    stack: ['OpenCV', 'Raspberry Pi', 'Pi Pico', 'Arduino Nano', 'Adafruit PWM driver'],
    evidence: {
      kind: 'quote',
      source: 'Project plan',
      body: 'A Raspberry Pi will act as the "brain," handling all the complex image processing for object tracking. An Arduino Nano or Raspberry Pi Pico will act as the "muscle," executing the precise, real-time control of the servos and LEDs.',
    },
  },
];
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/data/projects.test.ts`
Expected: PASS, 9 tests.

- [ ] **Step 5: Commit**

```bash
git add src/data/projects.ts src/data/projects.test.ts
git commit -m "Add the six case studies and the guards that keep them honest"
```

---

### Task 3: The CaseStudy component and the hero

**Files:**
- Create: `src/components/CaseStudy.astro`, `src/components/Hero.astro`
- Modify: `src/pages/index.astro`

**Interfaces:**
- Consumes: `CASE_STUDIES`, `type CaseStudy` from `src/data/projects.ts`; `profile` from `src/data/resume.ts`.
- Produces: `<CaseStudy study={CaseStudy} />` and `<Hero />`.

- [ ] **Step 1: Create `src/components/CaseStudy.astro`**

```astro
---
import type { CaseStudy } from '../data/projects';

interface Props {
  study: CaseStudy;
}

const { study } = Astro.props;
---

<article class="study" id={study.slug}>
  <header>
    <h3>{study.name}</h3>
    <span class="status">{study.status}</span>
  </header>

  <p class="what">{study.what}</p>

  <div class="parts">
    <section>
      <h4>The hard part</h4>
      <p>{study.hardPart}</p>
    </section>
    <section>
      <h4>The decision</h4>
      <p>{study.decision}</p>
    </section>
  </div>

  <ul class="stack" aria-label={`Stack for ${study.name}`}>
    {study.stack.map((item) => <li>{item}</li>)}
  </ul>

  <figure class="evidence" data-kind={study.evidence.kind}>
    {study.evidence.kind === 'quote' ? (
      <blockquote>{study.evidence.body}</blockquote>
    ) : (
      <div class="evidence-body"><slot name="diagram">{study.evidence.body}</slot></div>
    )}
    <figcaption>{study.evidence.source}</figcaption>
  </figure>
</article>

<style>
  .study {
    padding-block: var(--gap-section);
    border-top: 1px solid var(--rule);
  }

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.75rem 1rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: var(--step-3);
  }

  /* The honest status is the point of the whole page: PHASE 0 next to a
     finished-looking write-up is what makes the rest believable. */
  .status {
    font-family: var(--font-mono);
    font-size: var(--step--1);
    letter-spacing: 0.08em;
    color: var(--ink-muted);
    border: 1px solid var(--rule);
    border-radius: 999px;
    padding: 0.15em 0.7em;
    white-space: nowrap;
  }

  .what {
    font-size: var(--step-1);
    font-family: var(--font-display);
    color: var(--ink);
    margin-bottom: 2rem;
  }

  .parts {
    display: grid;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 48rem) {
    .parts {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }

  h4 {
    font-family: var(--font-text);
    font-size: var(--step--1);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-faint);
    margin-bottom: 0.5rem;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 0.75rem;
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
    font-family: var(--font-mono);
    font-size: var(--step--1);
    color: var(--ink-muted);
  }

  .stack li::after {
    content: ' ·';
    color: var(--ink-faint);
  }

  .stack li:last-child::after {
    content: '';
  }

  .evidence {
    margin: 0;
    padding: 1.5rem;
    background: var(--paper-raised);
    border-left: 3px solid var(--accent);
  }

  blockquote {
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--step-1);
    line-height: 1.45;
  }

  figcaption {
    margin-top: 0.9rem;
    font-family: var(--font-mono);
    font-size: var(--step--1);
    color: var(--ink-faint);
  }
</style>
```

- [ ] **Step 2: Create `src/components/Hero.astro`**

The sentence is fixed. Do not reword it: "designs and simulates" is what the
résumé supports, and "flight software" is a claim it does not.

```astro
---
import { profile } from '../data/resume';
---

<header class="hero">
  <p class="eyebrow">{profile.title} · {profile.location}</p>
  <h1>{profile.name}</h1>
  <p class="thesis">
    By day I lead the platform that designs and simulates a lunar lander at Blue Origin.
    At night I build robots in my garage.
  </p>
</header>

<style>
  .hero {
    padding-block: clamp(4rem, 12vh, 9rem) var(--gap-section);
  }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: var(--step--1);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-faint);
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: var(--step-4);
    margin-bottom: 1.5rem;
  }

  .thesis {
    font-family: var(--font-display);
    font-size: var(--step-2);
    line-height: 1.35;
    max-width: 28ch;
  }
</style>
```

- [ ] **Step 3: Wire them into `src/pages/index.astro`**

```astro
---
import Base from '../layouts/Base.astro';
import CaseStudy from '../components/CaseStudy.astro';
import Hero from '../components/Hero.astro';
import { CASE_STUDIES } from '../data/projects';
import { profile } from '../data/resume';
---

<Base
  title={`${profile.name} — Software Engineering Lead`}
  description="Kyle Gibson leads the platform that designs and simulates a lunar lander at Blue Origin, and builds robots at night."
>
  <main class="wrap">
    <Hero />

    <section aria-labelledby="work">
      <h2 id="work" class="section-head">Selected work</h2>
      {CASE_STUDIES.map((study) => <CaseStudy study={study} />)}
    </section>
  </main>
</Base>

<style>
  .section-head {
    font-family: var(--font-text);
    font-size: var(--step--1);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-faint);
  }
</style>
```

- [ ] **Step 4: Build and confirm still zero JavaScript**

```bash
npm run build
find build -name '*.js' | head
grep -c "holding its own weight" build/index.html
```

Expected: build succeeds, `find` prints nothing, and the grep prints at least 1 — the quadruped's exit test is in the served HTML.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Render the six-part case study template"
```

---

### Task 4: The two diagrams

**Files:**
- Create: `src/components/diagrams/HomeClawDiagram.astro`, `src/components/diagrams/SentryDiagram.astro`
- Modify: `src/components/CaseStudy.astro`, `src/pages/index.astro`

**Interfaces:**
- Consumes: the `evidence.kind === 'diagram'` branch of `CaseStudy.astro`.
- Produces: two components taking no props, each rendering inline SVG.

Home Claw and The Sentry have no photographs. Diagrams carry them, and for
this audience an architecture drawing is stronger than a staged photograph
anyway. Both SVGs must use `currentColor` so they work in dark mode, and
carry a `<title>` so they are not silent to assistive technology.

- [ ] **Step 1: Create `src/components/diagrams/HomeClawDiagram.astro`**

```astro
---
// The LAN boundary is the whole argument: every box that touches family data
// is inside it, and nothing crosses out.
---

<svg viewBox="0 0 640 260" role="img" aria-labelledby="hc-title hc-desc" class="diagram">
  <title id="hc-title">Home Claw architecture</title>
  <desc id="hc-desc">
    A dashed boundary labelled Home network contains a Mac Mini running local
    inference, two Raspberry Pi voice stations, and a Jetson bridging to a robot
    arm. No connection crosses the boundary.
  </desc>

  <rect x="8" y="8" width="624" height="244" rx="10" fill="none"
        stroke="currentColor" stroke-dasharray="6 6" opacity="0.45" />
  <text x="24" y="32" font-size="13" fill="currentColor" opacity="0.6">HOME NETWORK — nothing leaves</text>

  <rect x="232" y="62" width="176" height="66" rx="6" fill="none" stroke="currentColor" />
  <text x="320" y="88" font-size="14" text-anchor="middle" fill="currentColor">Mac Mini M4 Pro</text>
  <text x="320" y="108" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">local inference · knowledge</text>

  <rect x="40" y="170" width="150" height="58" rx="6" fill="none" stroke="currentColor" />
  <text x="115" y="194" font-size="13" text-anchor="middle" fill="currentColor">Pi voice station</text>
  <text x="115" y="212" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">STT · TTS</text>

  <rect x="245" y="170" width="150" height="58" rx="6" fill="none" stroke="currentColor" />
  <text x="320" y="194" font-size="13" text-anchor="middle" fill="currentColor">Pi voice station</text>
  <text x="320" y="212" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">STT · TTS</text>

  <rect x="450" y="170" width="150" height="58" rx="6" fill="none" stroke="currentColor" />
  <text x="525" y="194" font-size="13" text-anchor="middle" fill="currentColor">Jetson Orin Nano</text>
  <text x="525" y="212" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">arm bridge</text>

  <g stroke="currentColor" opacity="0.55" fill="none">
    <path d="M280 128 L115 170" />
    <path d="M320 128 L320 170" />
    <path d="M360 128 L525 170" />
  </g>
</svg>

<style>
  .diagram {
    width: 100%;
    height: auto;
    color: var(--ink);
  }
</style>
```

- [ ] **Step 2: Create `src/components/diagrams/SentryDiagram.astro`**

```astro
---
// Brain and muscle, and the deliberately narrow interface between them.
---

<svg viewBox="0 0 640 200" role="img" aria-labelledby="sn-title sn-desc" class="diagram">
  <title id="sn-title">The Sentry's split-microcontroller architecture</title>
  <desc id="sn-desc">
    A camera feeds a Raspberry Pi doing image processing. The Pi sends simple
    commands over serial to a Pico, which drives the servos and LEDs in real time.
  </desc>

  <rect x="12" y="70" width="118" height="58" rx="6" fill="none" stroke="currentColor" />
  <text x="71" y="94" font-size="13" text-anchor="middle" fill="currentColor">Camera</text>
  <text x="71" y="112" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">5MP day/night</text>

  <rect x="180" y="56" width="160" height="86" rx="6" fill="none" stroke="currentColor" />
  <text x="260" y="84" font-size="14" text-anchor="middle" fill="currentColor">Raspberry Pi</text>
  <text x="260" y="104" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">the brain</text>
  <text x="260" y="122" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">soft real-time vision</text>

  <rect x="392" y="56" width="160" height="86" rx="6" fill="none" stroke="currentColor" />
  <text x="472" y="84" font-size="14" text-anchor="middle" fill="currentColor">Pico / Nano</text>
  <text x="472" y="104" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">the muscle</text>
  <text x="472" y="122" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.65">hard real-time servos</text>

  <rect x="596" y="70" width="32" height="58" rx="6" fill="none" stroke="currentColor" />
  <text x="612" y="104" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">servos</text>

  <g stroke="currentColor" fill="none">
    <path d="M130 99 L180 99" marker-end="url(#arrow)" />
    <path d="M340 99 L392 99" marker-end="url(#arrow)" />
    <path d="M552 99 L596 99" marker-end="url(#arrow)" />
  </g>
  <text x="366" y="88" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.6">simple commands</text>

  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
    </marker>
  </defs>
</svg>

<style>
  .diagram {
    width: 100%;
    height: auto;
    color: var(--ink);
  }
</style>
```

- [ ] **Step 3: Let `index.astro` pass a diagram into the matching case study**

Replace the `CASE_STUDIES.map(...)` line in `src/pages/index.astro` with:

```astro
      {CASE_STUDIES.map((study) => (
        <CaseStudy study={study}>
          {study.slug === 'home-claw' && <HomeClawDiagram slot="diagram" />}
          {study.slug === 'the-sentry' && <SentryDiagram slot="diagram" />}
        </CaseStudy>
      ))}
```

and add the imports at the top of the frontmatter:

```astro
import HomeClawDiagram from '../components/diagrams/HomeClawDiagram.astro';
import SentryDiagram from '../components/diagrams/SentryDiagram.astro';
```

The Sentry's `evidence.kind` is `quote`, so it renders its quotation; the
diagram is additional. Change its `evidence.kind` to `diagram` in
`src/data/projects.ts` only if the drawing reads better than the quotation —
check both in the browser and keep whichever is stronger. Whichever you keep,
`npm test` must still pass.

- [ ] **Step 4: Build and check both diagrams reached the HTML**

```bash
npm run build
grep -c "Home Claw architecture" build/index.html
grep -c "split-microcontroller architecture" build/index.html
find build -name '*.js' | head
```

Expected: both greps print 1, `find` prints nothing.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Draw the Home Claw and Sentry architectures"
```

---

### Task 5: How I work, experience, and contact

**Files:**
- Create: `src/components/HowIWork.astro`, `src/components/Experience.astro`, `src/components/Contact.astro`
- Modify: `src/pages/index.astro`

**Interfaces:**
- Consumes: `experience`, `education`, `profile` from `src/data/resume.ts`.
- Produces: three components taking no props.

`HowIWork` is the section that makes a reader conclude "senior". It works
only because it quotes rather than claims — no adjectives about Kyle.

- [ ] **Step 1: Create `src/components/HowIWork.astro`**

```astro
---
const PRACTICES = [
  {
    title: 'Phases with exit tests',
    body: 'Every build gets a plan where each phase ends in a concrete, observable result. Nothing advances on the strength of feeling nearly done.',
    quote:
      'Each phase has an Exit test — a concrete, observable result that must pass before moving on. Don\'t skip ahead: every phase de-risks the next one.',
    source: 'quadruped/PROJECT_PLAN.md',
  },
  {
    title: 'The maths before the power',
    body: 'Power budgets and safety rules get written down before a battery is connected, not after something releases smoke.',
    quote: 'Never wire the LiPo straight to the servos.',
    source: 'quadruped/docs/lipo_safety.md',
  },
  {
    title: 'Honest status',
    body: 'Unfinished work is labelled unfinished, in the repository and on this page. A project that says Phase 0 is worth more than five that claim to be done.',
    quote: 'Mac Mini M4 Pro — Setting up · Raspberry Pi 4 — Planned · Jetson Orin Nano — Planned',
    source: 'home-claw/README.md, hardware table',
  },
];
---

<section aria-labelledby="how" class="how">
  <h2 id="how" class="section-head">How I work</h2>
  <div class="grid">
    {PRACTICES.map((practice) => (
      <article>
        <h3>{practice.title}</h3>
        <p>{practice.body}</p>
        <figure>
          <blockquote>{practice.quote}</blockquote>
          <figcaption>{practice.source}</figcaption>
        </figure>
      </article>
    ))}
  </div>
</section>

<style>
  .how {
    padding-block: var(--gap-section);
    border-top: 1px solid var(--rule);
  }

  .grid {
    display: grid;
    gap: 3rem;
    margin-top: 2.5rem;
  }

  @media (min-width: 56rem) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }
  }

  h3 {
    font-size: var(--step-1);
    margin-bottom: 0.75rem;
  }

  figure {
    margin: 1.25rem 0 0;
    padding-left: 1rem;
    border-left: 2px solid var(--rule);
  }

  blockquote {
    margin: 0;
    font-family: var(--font-mono);
    font-size: var(--step--1);
    line-height: 1.6;
    color: var(--ink-muted);
  }

  figcaption {
    margin-top: 0.6rem;
    font-family: var(--font-mono);
    font-size: var(--step--1);
    color: var(--ink-faint);
  }
</style>
```

- [ ] **Step 2: Create `src/components/Experience.astro`**

```astro
---
import { education, experience } from '../data/resume';
---

<section aria-labelledby="experience" class="xp">
  <h2 id="experience" class="section-head">Experience</h2>

  {experience.map((role) => (
    <article class="role">
      <div class="meta">
        <h3>{role.company}</h3>
        <p class="division">{role.division}</p>
        <p class="period">{role.period}</p>
      </div>
      <div class="detail">
        <p class="title">{role.title}</p>
        <ul>
          {role.bullets.map((bullet) => <li>{bullet}</li>)}
        </ul>
      </div>
    </article>
  ))}

  <article class="role">
    <div class="meta"><h3>Education</h3></div>
    <div class="detail">
      <ul>
        {education.map((school) => (
          <li>{school.degree} — {school.school}{school.note ? ` (${school.note})` : ''}</li>
        ))}
      </ul>
    </div>
  </article>
</section>

<style>
  .xp {
    padding-block: var(--gap-section);
    border-top: 1px solid var(--rule);
  }

  .role {
    display: grid;
    gap: 0.75rem 3rem;
    padding-block: 2.5rem;
    border-bottom: 1px solid var(--rule);
  }

  .role:last-child {
    border-bottom: 0;
  }

  @media (min-width: 48rem) {
    .role {
      grid-template-columns: 15rem 1fr;
    }
  }

  h3 {
    font-size: var(--step-1);
  }

  .division,
  .period {
    font-family: var(--font-mono);
    font-size: var(--step--1);
    color: var(--ink-faint);
  }

  .title {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  ul {
    padding-left: 1.1rem;
    display: grid;
    gap: 0.6rem;
  }

  li {
    max-width: var(--measure);
  }
</style>
```

- [ ] **Step 3: Create `src/components/Contact.astro`**

```astro
---
import { profile } from '../data/resume';
---

<section aria-labelledby="contact" class="contact">
  <h2 id="contact">Let's talk.</h2>
  <ul>
    <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
    <li><a href={profile.github} rel="noreferrer">GitHub</a></li>
    <li><a href={profile.linkedin} rel="noreferrer">LinkedIn</a></li>
  </ul>
  <p class="where">{profile.location}</p>
</section>

<style>
  .contact {
    padding-block: var(--gap-section);
    border-top: 1px solid var(--rule);
  }

  h2 {
    font-size: var(--step-3);
    margin-bottom: 1.5rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 2rem;
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
  }

  /* Links must look like links. Underlines are not decoration here. */
  a {
    text-decoration: underline;
  }

  .where {
    font-family: var(--font-mono);
    font-size: var(--step--1);
    color: var(--ink-faint);
  }
</style>
```

- [ ] **Step 4: Add all three to `src/pages/index.astro`**

Import them in the frontmatter and place them after the work section, inside
`<main>`:

```astro
    <HowIWork />
    <Experience />
    <Contact />
```

- [ ] **Step 5: Build and verify**

```bash
npm run build
grep -c "de-risks the next one" build/index.html
grep -c "Never wire the LiPo" build/index.html
find build -name '*.js' | head
npm test
```

Expected: both greps print 1, `find` prints nothing, tests pass.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Add how-I-work, experience and contact"
```

---

### Task 6: Typography, fonts, and the polish pass

**Files:**
- Create: `public/fonts/` (subset font files), `public/favicon.svg`
- Modify: `src/styles/tokens.css`, `src/styles/global.css`, `src/layouts/Base.astro`
- Delete: `src/index.css`

**Interfaces:**
- Consumes: the token names from Task 1.
- Produces: no new JavaScript surface; self-hosted `@font-face` rules.

- [ ] **Step 1: Fetch and subset the two faces**

Newsreader for display and Inter for text, both open-licensed. Download the
variable WOFF2 files into `public/fonts/`:

```bash
mkdir -p public/fonts
curl -sL -o public/fonts/newsreader.woff2 \
  "https://cdn.jsdelivr.net/fontsource/fonts/newsreader:vf@latest/latin-wght-normal.woff2"
curl -sL -o public/fonts/inter.woff2 \
  "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2"
ls -la public/fonts
```

If either URL 404s, get the equivalent file from the `@fontsource-variable/newsreader`
and `@fontsource-variable/inter` npm packages instead and copy the
`files/*-latin-wght-normal.woff2` out of them. Do not fall back to a Google
Fonts `<link>`: it is a render-blocking third-party request and this site has
a performance budget.

- [ ] **Step 2: Declare the faces in `src/styles/global.css`**

Add at the very top, above the `@import`:

```css
@font-face {
  font-family: 'Newsreader';
  src: url('/fonts/newsreader.woff2') format('woff2-variations');
  font-weight: 200 800;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}
```

- [ ] **Step 3: Preload both in `src/layouts/Base.astro`**

Add inside `<head>`, before the stylesheet:

```astro
    <link rel="preload" href="/fonts/newsreader.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
```

- [ ] **Step 4: Add a favicon**

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#16150f"/>
  <text x="16" y="22" font-family="Georgia, serif" font-size="18" fill="#faf8f4" text-anchor="middle">K</text>
</svg>
```

- [ ] **Step 5: Delete the old stylesheet**

`src/index.css` belonged to the React site and nothing imports it now.

```bash
git rm --quiet src/index.css
grep -rn "index.css" src/ || echo "no references remain"
```

- [ ] **Step 6: Build and check the fonts are served and no JavaScript appeared**

```bash
npm run build
ls build/fonts/
find build -name '*.js' | head
du -sh build
```

Expected: both woff2 files present, no `.js`.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Self-host the type and retire the React stylesheet"
```

---

### Task 7: The browser harness

**Files:**
- Create: `scripts/cdp.mjs`, `scripts/verify-site.mjs`

**Interfaces:**
- Consumes: the built site served by `npm run preview`.
- Produces: a pass/fail report. Not part of `npm test` — it needs a browser.

Node 24 has a global `WebSocket` and `fetch`, so the Chrome DevTools Protocol
needs no dependency. Chrome is at `/Applications/Google Chrome.app`.

- [ ] **Step 1: Create `scripts/cdp.mjs`**

```js
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

  chrome.on('error', (error) => {
    console.error('chrome failed to spawn:', error.message);
  });

  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return { chrome, port };
    } catch {
      // still starting
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error('Chrome did not open its devtools port');
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
```

- [ ] **Step 2: Create `scripts/verify-site.mjs`**

```js
import { readFileSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { connect, launch, sleep } from './cdp.mjs';

const BASE = process.env.BASE ?? 'http://localhost:4321';
const results = [];

function check(name, ok, detail = '') {
  results.push({ ok });
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`);
}

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
    const page = await connect(port, `${BASE}/`);
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
    const page = await connect(port, `${BASE}/`);
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
    const page = await connect(port, `${BASE}/`);
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
  {
    const page = await connect(port, `${BASE}/`);
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
        const parse = (s) => s.match(/\\d+/g).slice(0, 3).map(Number);
        const bg = parse(getComputedStyle(document.body).backgroundColor);
        let worst = 99;
        let worstText = '';
        for (const el of document.querySelectorAll('p, li, h1, h2, h3, h4, blockquote, figcaption, .status, a')) {
          if (!el.textContent.trim()) continue;
          const style = getComputedStyle(el);
          const fg = parse(style.color);
          const size = parseFloat(style.fontSize);
          const large = size >= 24 || (size >= 18.66 && Number(style.fontWeight) >= 700);
          const a = lum(fg);
          const b = lum(bg);
          const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
          const required = large ? 3 : 4.5;
          if (ratio < required && ratio < worst) {
            worst = ratio;
            worstText = el.tagName + ' ' + size.toFixed(0) + 'px';
          }
        }
        return { worst: worst === 99 ? null : worst, worstText };
      })()`);
    check(
      'all text meets its contrast requirement',
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
```

- [ ] **Step 3: Build, serve and run the harness**

```bash
npm run build
npm run preview &
```

Astro's preview serves on port 4321 by default. Confirm the printed URL, then:

```bash
node scripts/verify-site.mjs
```

Expected: every check passes. If contrast or overflow fails, that is real
information about the design — fix the CSS, do not loosen the check.

- [ ] **Step 4: Stop the preview server**

```bash
kill %1
```

- [ ] **Step 5: Commit**

```bash
git add scripts/cdp.mjs scripts/verify-site.mjs
git commit -m "Verify the built site in a real browser"
```

---

### Task 8: Look at it, and close the gaps

**Files:**
- Modify: whichever CSS the screenshots prove wrong.

Every previous iteration of this site shipped defects that passed every
automated check and were obvious within five seconds of looking. This task
exists because that kept happening.

**Interfaces:**
- Consumes: the harness from Task 7.
- Produces: no new interface.

- [ ] **Step 1: Capture the page at four widths**

With the preview server running, write `/tmp/shoot.mjs`:

```js
import { writeFileSync } from 'node:fs';
import { connect, launch, sleep } from '/Users/kylegibson/Desktop/Projects/mobile-first-resume/scripts/cdp.mjs';

const { chrome, port } = await launch(9310);
try {
  for (const [w, h] of [[390, 844], [768, 1024], [1280, 900], [1600, 1000]]) {
    const page = await connect(port, 'about:blank');
    await page.send('Emulation.setDeviceMetricsOverride', {
      width: w, height: h, deviceScaleFactor: 1, mobile: w < 500,
    });
    await page.send('Page.navigate', { url: 'http://localhost:4321/' });
    await sleep(1500);
    const shot = await page.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    writeFileSync(`/tmp/site-${w}.png`, Buffer.from(shot.data, 'base64'));
    console.log(`captured ${w}`);
    page.close();
  }
} finally { chrome.kill(); }
```

Run it: `node /tmp/shoot.mjs`

- [ ] **Step 2: Actually look at all four screenshots**

Open each one and read it as a hiring manager would. Specifically check:

- Does the hero sentence land, or is it lost against the name?
- Is the measure comfortable, or are lines running too long at 1600px?
- Do the status chips read as deliberate, or as debris?
- Does the evidence block look like the most important thing in each case
  study? It is.
- Is the mobile layout deliberate, or merely not broken?
- Does dark mode look designed, or inverted?

- [ ] **Step 3: Fix what the screenshots showed and re-verify**

```bash
npm run build && node scripts/verify-site.mjs && node /tmp/shoot.mjs
```

- [ ] **Step 4: Check dark mode explicitly**

Add to `/tmp/shoot.mjs` before the navigate call and re-run:

```js
    await page.send('Emulation.setEmulatedMedia', {
      features: [{ name: 'prefers-color-scheme', value: 'dark' }],
    });
```

Look at the result. A dark mode that is merely inverted is a defect here —
the spec asks for one that is considered.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Close the gaps that only looking at it revealed"
```

---

## Done when

- `npm test` passes.
- `npm run build` succeeds and emits **no JavaScript at all**.
- `node scripts/verify-site.mjs` passes every check.
- The four screenshots have been looked at by a human or by the agent, and
  what they revealed has been fixed.
- `grep -ri "flight software" build/` returns nothing.

## Deliberately not in this plan

- **Photographs of the Sentry and Home Claw hardware.** None exist. Diagrams
  carry both. If Kyle takes photographs later, they slot into the evidence
  block without a structural change.
- **The Observer's keeper images.** They are photographs of Kyle's dogs inside
  his home. Default is not published; the phase-ladder quotation carries the
  case study.
- **Home Claw's real status.** Set to `IN BUILD` on repository evidence. One
  string to change if Kyle confirms otherwise.
- **The Game Boy résumé.** Preserved on the `game-boy-resume` branch. Linking
  to it as an aside is a later decision, not part of this work.
