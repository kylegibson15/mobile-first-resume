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
    what: 'The platform that designs and simulates a lunar lander, automating vehicle design, simulation and performance tracking across every subsystem.',
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
