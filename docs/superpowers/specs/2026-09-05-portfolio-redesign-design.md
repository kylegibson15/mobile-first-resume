# Portfolio Redesign — Evidence First

**Status:** approved design, not yet implemented
**Date:** 2026-09-05
**Audience:** hiring managers and recruiters for senior / staff engineering roles

## Problem

The site is not plain because of its styling. It is plain because it shows
two projects — My Vacation Home and the portfolio itself — while roughly a
dozen real ones sit on the same machine, several of them substantial.

Five redesigns were attempted before this one: a playable Game Boy, a
Netflix grid, an NVIDIA panel, a NASA variant, and an auto-playing
cinematic tour. Each was a costume over the same thin content, and each was
rejected. The costume was never the problem.

Kyle's stated goal is a site that makes people say wow, and that conveys
four things: he builds quality software, he cares about details, he is
creative and innovative, and he is passionate about his work.

None of those are styles that can be applied. They are conclusions a reader
draws from evidence.

## The evidence already exists

Reading the repositories surfaced one trait that repeats in every project
Kyle owns, and it is the most valuable thing on the machine:

> Each phase has an **Exit test** — a concrete, observable result that must
> pass before moving on. Don't skip ahead: every phase de-risks the next one.
> — `quadruped/PROJECT_PLAN.md`

> each phase has a pass/fail gate before the next one earns any time
> — `dog-selfie-cam-poc/README.md`

> **Never wire the LiPo straight to the servos.**
> — `quadruped/docs/lipo_safety.md`, written before any battery was connected

> This design uses a split-microcontroller architecture to maximize
> efficiency and reliability. A Raspberry Pi will act as the "brain,"
> handling all the complex image processing... An Arduino Nano or Raspberry
> Pi Pico will act as the "muscle," executing the precise, real-time control
> of the servos.
> — `halloween-vampire`

He plans in phases with observable exit criteria, writes safety
documentation before powering hardware on, separates soft real-time vision
from hard real-time actuation, and labels unfinished work honestly as
"Planned" rather than claiming it works.

That is a senior engineer's judgment, in his own words, already written
down. The site's job is to make it legible.

## Solution

An evidence-first portfolio. The work leads; craft is felt rather than
announced. Every claim on the page has an artifact under it.

The wow is structural: a reader opens a project expecting marketing copy
and finds a phase plan with exit criteria and an honest "Phase 0" label.

## Goals

- A hiring manager understands Kyle's level within sixty seconds, and can go
  three levels deeper if interested.
- Every project claim is backed by a diagram, a photograph, or a verbatim
  artifact from the repository.
- The site is itself an argument that he builds well: instant, accessible,
  no layout shift, correct on a phone, readable without JavaScript.

## Non-goals

- Any theme, costume, or narrative device. That approach failed five times.
- Animation as a feature. Motion budget is near zero.
- Listing every repository. Six case studies with depth beat twelve without.
- Rebuilding the Game Boy résumé. It is preserved on the `game-boy-resume`
  branch and may later be linked as an aside, but it is not part of this work.

## Content integrity

**Four repositories on this machine are other people's open-source projects
and must never be presented as Kyle's work:**

| Repository | Actually |
|---|---|
| `lerobot` | Hugging Face's robotics library (659 upstream commits) |
| `mlx-examples` | Apple's MLX examples (675 upstream commits) |
| `AmazingHand` | Apache-2.0 / CC-BY upstream project (133 upstream commits) |
| `AmazingHandPico` | same upstream |

Commit counts on clones measure upstream history, not authorship. An
interviewer checks this. Contributions to them may be described as
contributions, never as authorship.

Every number that appears on the site must be traceable to the résumé data
or to a repository. No rounded-up metrics, no invented users.

## Page structure

One page, in this order.

1. **Hero.** The one true sentence — *"By day I lead the platform that
   designs and simulates a lunar lander at Blue Origin. At night I build
   robots in my garage."* — plus name, role, location, and a compact
   "currently" line so the Blue Origin credibility lands within two seconds.
   No animation.
2. **Selected work.** Six case studies. This is the body of the page.
3. **How I work.** Three short items, each quoting a real artifact.
4. **Experience.** The full career, scannable, with real numbers.
5. **Contact.**

The claim "designs and simulates a lunar lander" is deliberate and must not
drift to "flight software" — the résumé supports platform ownership, not
flight code, and an aerospace interviewer knows the difference.

## The case-study template

Every case study uses the same six parts. The template is the design: it
forces substance and makes marketing copy impossible to write.

1. **Name and honest status** — `RUNNING`, `TRIALS`, `BETA`, `SEASONAL`, `PHASE 0`
2. **What it is** — one line
3. **The hard part** — the actual engineering problem
4. **The decision** — what was chosen, and what it cost
5. **Stack**
6. **Evidence** — a diagram, a photograph, or a verbatim repository artifact

A case study that cannot fill part 3 or part 6 does not go on the site.

## The six

### 1. Blue Origin — Lunar Permanence · `CURRENT`

Software Engineering Lead, 2024–present. Lead engineer for a five-person
team owning the platform that automates vehicle design, simulation and
performance tracking across every lunar subsystem.

**Hard part:** high-volume interdependent analysis and simulation jobs, and
CUI data that must carry row-level access control and full historical change
tracking.
**Decision:** an event-driven architecture on Kubernetes with Terraform-managed
infrastructure, which cut end-to-end simulation time by 40%.
**Stack:** Python, TypeScript, React, Terraform, Kubernetes, AWS, DynamoDB,
PostgreSQL, SQS/SNS, Datadog.
**Evidence:** 40% faster simulations, 99.999% availability, five engineers led.

### 2. AmigoWeGo — `BETA`

Group trip planning that survives contact with a group chat. 695 commits,
active this month.

**Hard part:** several people editing one shared plan from web and iOS, where
the answers to "what's the plan, who's where, what's decided, who owes what"
must stay consistent across clients.
**Decision:** contract-first. One OpenAPI document generates both clients, so
the Rust backend and the SwiftUI app cannot drift apart.
**Stack:** Rust, Axum, SQLx, PostgreSQL 16 with PostGIS, Redis 7, React 19,
TanStack Router/Query, Tailwind, SwiftUI (iOS 17+), Terraform, Cloud Build.
**Evidence:** the OpenAPI contract and the two generated clients; app screenshots
(110 media files exist in the repository).

### 3. Home Claw — `RUNNING`

A family AI assistant that answers from any room and never leaves the house.

**Hard part:** useful assistance normally means sending family schedules,
preferences and medical information to somebody else's servers.
**Decision:** privacy as an architectural constraint rather than a feature —
local-only inference on a Mac Mini M4 Pro (64 GB), with Raspberry Pi voice
stations at the edge and a Jetson Orin Nano bridging to a LeRobot SO-100 arm.
No cloud dependency, no subscription, nothing leaving the LAN.
**Stack:** MLX, FastAPI, pgvector, Raspberry Pi, Jetson Orin Nano.
**Status conflict to resolve before publishing:** `src/data/bench.ts` calls
this `RUNNING` at 92% complete, while the repository's own hardware table
marks the Mac Mini "Setting up" and every Pi and the Jetson "Planned". Those
cannot both be true. Status labels must be re-derived from the repositories
rather than inherited from `bench.ts`, and where they disagree Kyle decides.
The site's credibility rests on these labels being right.
**Evidence:** the LAN-boundary architecture diagram from the repository, and the
hardware table that honestly marks components "Setting up" and "Planned".

### 4. The Observer — `TRIALS`

A camera that keeps only the good photographs of the dogs. 273 commits.

**Hard part:** an all-day camera produces thousands of frames and almost no
keepers; the judgment of which frames are worth keeping is the product.
**Decision:** a phased proof-of-concept where each phase has a pass/fail gate
before the next earns any time — frame in, dog detection, keeper scoring,
portrait crop out.
**Stack:** YOLO, OpenCV, Pi Camera 3, Python.
**Evidence:** the phase ladder from the README, and a grid of real keeper
outputs — subject to the media decision below.

### 5. Quadruped — `PHASE 0`

Four legs from nothing: hardware, control software, CAD, simulation, and
eventually reinforcement learning.

**Hard part:** a legged robot fails at the intersection of mechanical design,
power delivery and control, and each of those can quietly destroy the others.
**Decision:** classic control first, RL later, with eight phases each gated by
an observable exit test — and the power math and battery safety written down
before anything was energised.
**Stack:** Fusion 360, Jetson, MuJoCo, Raspberry Pi, PCA9685.
**Evidence:** the verbatim phase table, and Phase 3's exit test — *"the robot
stands in a neutral pose holding its own weight for several minutes without
servo overheating or brownout; full-system current stays within BEC/battery
limits."*

### 6. The Sentry — `SEASONAL`

An animatronic vampire that tracks people up the driveway every October.

**Hard part:** computer vision is soft real-time and servo control is hard
real-time; running both on one processor makes the servos jitter.
**Decision:** a split-microcontroller architecture — a Raspberry Pi as the
"brain" doing image processing, a Pico or Nano as the "muscle" executing
precise servo and LED timing.
**Stack:** OpenCV, Raspberry Pi, Pi Pico, Arduino Nano, Adafruit PWM servo
drivers, MG995 servos.
**Evidence:** the brain/muscle architecture diagram and the power distribution
schematic.

## How I work

Three items, each quoting a repository artifact verbatim, each two or three
sentences of framing at most. No adjectives about himself.

1. **Phases with exit tests.** The quadruped plan, quoted.
2. **Safety and power math before power-on.** The LiPo document, quoted.
3. **Honest status.** The Home Claw hardware table, showing "Planned" next to
   components that do not exist yet.

This section is the one that makes a reader conclude "senior". It works only
because it quotes rather than claims.

## Craft system

- **Type.** A serif display face against a clean sans for body text.
  Unusual in engineering portfolios and immediately legible as care. Both
  self-hosted and subset; no render-blocking font CSS.
- **Colour.** Warm paper, near-black ink, a single restrained accent. A
  considered dark mode, not an inverted one.
- **Layout.** Real hierarchy, generous measure (60–75 characters), one
  column on mobile without apology.
- **Motion.** Near zero. Content appears; nothing performs. Everything
  respects `prefers-reduced-motion`.
- **Performance budget**, enforced in the browser harness: Largest
  Contentful Paint under 1.5 s on a throttled mobile profile, cumulative
  layout shift 0, and total JavaScript under 15 kB gzipped. See Rendering
  for why that number is achievable.

## Rendering

The current site ships `<div id="root"></div>` and nothing else. With
JavaScript disabled, or before the bundle loads, the résumé is blank. For a
site whose thesis is "I build quality software", that is the wrong first
impression.

**Measured cost of the current stack**, from the last build in this
repository:

| Chunk | Raw | Gzipped |
|---|---|---|
| `react-vendor` | 141.7 kB | **45.5 kB** |
| application code | 72.0 kB | 25.1 kB |

React and React DOM cost 45.5 kB gzipped before a single line of this site's
code exists. A résumé is static text, six case studies, and no application
state. Shipping a 45 kB runtime to render it is defensible, but it is not
what "I build quality software" looks like to someone who opens the network
tab — and this audience opens the network tab.

**Decision: build the site with Astro**, which ships zero JavaScript by
default and renders real HTML at build time. Tailwind carries over
unchanged.

The reason this is cheap rather than a rewrite: the redesign replaces the
entire presentation layer anyway. Every existing component — `Hero`,
`About`, `Timeline`, `Projects`, `Skills` — is being discarded and rewritten
against the new case-study template. There is no component library being
migrated; there is only a choice about what the new components are written
in. Astro and React cost roughly the same to author here, and differ by
45 kB on every visit.

`resume.ts` and `bench.ts` are plain TypeScript data and carry over as-is.

**Fallback if Astro proves awkward:** keep React and Vite, add build-time
prerendering so the HTML is complete without JavaScript, and raise the
JavaScript budget to 80 kB gzipped. This is strictly worse and should only
be taken if Astro blocks something concrete.

## Media

Visual material is uneven, and the design accounts for it rather than
pretending otherwise:

| Project | Available |
|---|---|
| The Observer | 886 images, including real keeper outputs |
| AmigoWeGo | 110 images, app screenshots |
| Quadruped (capstone) | 8 photographs, 70 CAD files |
| Quadruped (current) | 1 image, 1 CAD file |
| Home Claw, The Sentry, pill-sorter | none |

**Diagrams are the primary visual language**, not photographs. Architecture
drawings suit this audience better than staged product shots, and they are
available for every project. Photographs are used where they exist and add
something a diagram cannot.

Two decisions belong to Kyle and are not blocking; the design works either
way:

- **Photographs of the Sentry and Home Claw hardware.** None exist. Diagrams
  carry both projects if no photographs are taken. Default: diagrams only.
- **The Observer's keeper images.** They are the most charming asset on the
  machine and also photographs of Kyle's dogs, likely inside his home.
  Default until he says otherwise: not published; the phase ladder carries
  the case study instead.

## Accessibility

- Full keyboard reachability with visible focus states.
- One `h1`, correct heading order, landmarks.
- Contrast at or above 4.5:1 for body text and 3:1 for large text, verified
  numerically rather than by eye.
- Content readable with JavaScript disabled, per the rendering decision.

## Testing

**Unit tests** for anything with logic. This site is mostly content, so the
surface is small: data shaping, and any status or ordering helpers.

**Browser harness**, in the shape of the Chrome DevTools Protocol driver
already proven in this repository — dependency-free, driving a real browser
against the built site:

1. Every case study renders all six template parts; a missing "hard part" or
   missing evidence fails the build.
2. No horizontal overflow at 360, 390, 768, 1280 and 1600 px.
3. Cumulative layout shift is 0; Largest Contentful Paint within budget on a
   throttled mobile profile.
4. Total JavaScript within budget (15 kB gzipped, or 80 kB on the fallback).
5. Every interactive element is keyboard reachable with a visible focus state.
6. Body and large-text contrast pass, measured against rendered pixels.
7. The résumé's text is present in the served HTML with JavaScript disabled.
8. No occurrence of "flight software" anywhere in the built output.
9. None of `lerobot`, `mlx-examples`, `AmazingHand` or `AmazingHandPico`
   appears as authored work.

Checks 8 and 9 are content-integrity guards: they encode the two claims that
would most damage Kyle in an interview, so neither can be reintroduced
silently.

## Risks

- **Case-study writing is the real work.** The layout is a week's worth of
  care; the six "hard part" and "decision" paragraphs are what the site
  lives or dies on. They must be written from the repositories, not from
  imagination, and Kyle must confirm each one is true before it ships.
- **Several projects run in his home or hold family data.** Each case study
  must state what it discloses, and be approved individually.
- **Honest status labels cut both ways.** Publishing `PHASE 0` on the
  quadruped is the point — it is what makes the rest credible — but Kyle
  should confirm he is comfortable showing unfinished work.
