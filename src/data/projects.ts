/**
 * The six case studies.
 *
 * Each one must fill all six parts of the template. The template exists to
 * make marketing copy impossible to write: a project that cannot name its
 * hard part, or show an artifact, does not go on the site.
 */

export type Status = 'CURRENT' | 'RELEASED' | 'RUNNING' | 'BETA' | 'IN BUILD' | 'TRIALS' | 'PHASE 0' | 'SEASONAL';

/**
 * `quote` and `quote-list` render verbatim repository text; `diagram` an
 * inline SVG; `figures` a metric row.
 */
export type EvidenceKind = 'quote' | 'quote-list' | 'diagram' | 'figures';

/**
 * The kinds the site presents to the reader as literal repository text, inside
 * a `<blockquote>`. Every one of them must carry a `sourcePath`, and
 * `quotes.test.ts` checks the text against that file. This list is what makes
 * the check exhaustive: add a quoting kind and the test starts covering it.
 */
export const QUOTED_KINDS: readonly EvidenceKind[] = ['quote', 'quote-list'];

export interface Evidence {
  kind: EvidenceKind;
  /** Where it came from, shown as a citation. Display text, not a path. */
  source: string;
  /**
   * The file the quotation is taken from, relative to the directory holding
   * these sibling repositories. Required for every quoting kind — the
   * citation above is prose and cannot be resolved to a file, which is how
   * three quotations drifted from their sources while thirty checks passed.
   */
  sourcePath?: string;
  /** The quotation, or for `quote-list` the lead-in that precedes `items`. */
  body: string;
  /** `quote-list` only: the list that follows `body`. Each item is verbatim. */
  items?: readonly string[];
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
  /** Where a reader can open the finished thing. Rendered under the stack. */
  links?: readonly { label: string; href: string; kind?: 'appstore' | 'website' }[];
  /** The product's own app icon, a path under /public. Decorative: the name sits beside it. */
  icon?: string;
  /** Pictures of what the project produced. Rendered as a fanned hand of cards. */
  gallery?: { caption: string; items: readonly { src: string; alt: string }[] };
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
    name: 'Blue Origin — Lunar Data, AI & Applications',
    status: 'CURRENT',
    what: 'The platform my team built from scratch, which designs and simulates a lunar lander for ~300 systems engineers, plus the Claude agents that answer questions straight from its source of truth.',
    hardPart:
      'Engineers were working from scattered spreadsheet copies with no source of truth, and the copies were causing design errors. The replacement holds data classified as CUI, so every row needs access control, every change needs a permanent history, and NASA\'s penetration testers need a sandbox of their own, all without that bookkeeping becoming the bottleneck.',
    decision:
      'One governed source of truth in AWS GovCloud, approved by Security and Export Control to manage CUI, on an event-driven architecture on Kubernetes so interdependent simulation jobs fan out instead of queueing behind each other. End-to-end simulation time fell by 40%.',
    stack: ['Python', 'TypeScript', 'React', 'AWS GovCloud', 'Terraform', 'Kubernetes', 'DynamoDB', 'PostgreSQL', 'SQS/SNS', 'Datadog', 'Bedrock', 'MCP'],
    evidence: {
      kind: 'figures',
      source: 'Lead engineer, five-person team, 2024–present',
      body: '~300 systems engineers · approved for CUI in GovCloud · 40% faster simulations · 2 production agents at 100% factual accuracy',
    },
  },
  {
    slug: 'amigowego',
    name: 'AmigoWeGo',
    status: 'RELEASED',
    what: 'Group trip planning that survives contact with a group chat.',
    hardPart:
      'Several people edit one shared plan from a phone and a browser at the same time. Four questions have to stay answerable and consistent across both clients: what is the plan, who is where, what was decided, and who owes what.',
    decision:
      'Contract first. A single OpenAPI document generates both clients, so the Rust backend and the SwiftUI app cannot drift apart — the compiler catches a mismatch that would otherwise surface as a bug on somebody\'s holiday.',
    stack: ['Rust', 'Axum', 'SQLx', 'PostgreSQL 16', 'PostGIS', 'Redis 7', 'React 19', 'SwiftUI', 'Terraform'],
    icon: '/amigowego-icon.svg',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/amigowego/id6758466876', kind: 'appstore' },
      { label: 'Website', href: 'https://amigowego.com/', kind: 'website' },
    ],
    evidence: {
      // The four questions are the strongest thing in that README, so they are
      // quoted as they are written: a lead-in and four bullets. They were
      // previously flattened into one sentence that appears nowhere in the
      // file, with the fourth bullet's trailing clause welded onto the end.
      kind: 'quote-list',
      source: 'Product overview',
      sourcePath: 'my-travel-planner/README.md',
      body: 'When a group uses this app, they should always know:',
      items: [
        'What\'s the plan? - Today\'s activities and what\'s coming next',
        'Who\'s where? - Where everyone is during the trip',
        'What\'s decided? - Clear record of group decisions',
        'Who owes what? - Expenses tracked and settled without awkward chasing',
      ],
    },
  },
  {
    slug: 'home-claw',
    name: 'Home Claw',
    status: 'RUNNING',
    what: 'A family assistant that answers from any room and never leaves the house.',
    hardPart:
      'A useful home assistant needs the family\'s schedules, preferences and medical information. Every product that does this well sends that data to someone else\'s servers.',
    // The README's hardware table marks the Mac Mini and both Pis "Running"
    // and the Jetson "Planned", so the prose has to hold to it: the Jetson
    // arm bridge is still not built.
    decision:
      'Privacy as an architectural constraint rather than a feature. The Mac Mini M4 Pro is the only machine that runs inference, and it and both Raspberry Pi voice stations are running; the Jetson arm bridge is planned, not built. No cloud dependency, no subscription, nothing crossing the LAN boundary — which rules out the easy answer and makes model size a hardware problem.',
    stack: ['MLX', 'FastAPI', 'pgvector', 'Raspberry Pi', 'Jetson Orin Nano'],
    evidence: {
      kind: 'diagram',
      source: 'Architecture — dashed boxes are planned',
      body: 'The LAN boundary is the design: every component that touches family data is meant to sit inside it.',
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
    gallery: {
      caption: 'Cards The Observer has made from real keepers — Pokémon-style for Luna, baseball-style for Max.',
      items: [
        { src: '/cards/observer-luna-blue.jpg', alt: 'A Pokémon-style card of Luna, a brindle boxer sitting on a couch in window light, on a pale blue patterned frame.' },
        { src: '/cards/observer-luna-holo.jpg', alt: 'A holographic version of Luna’s card, the same boxer under a rainbow foil sheen and a gold border.' },
        { src: '/cards/observer-max-front.jpg', alt: 'A baseball-style card of Max, a fawn French bulldog looking off to one side, in a purple frame with Dude’s Dog House & Spa lettering.' },
        { src: '/cards/observer-max-back.jpg', alt: 'The back of Max’s baseball card: a season-and-career record table of visits, keepers and sharpness.' },
      ],
    },
    evidence: {
      kind: 'quote',
      source: 'Project plan',
      sourcePath: 'dog-selfie-cam-poc/README.md',
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
      source: 'Project plan, Phase 3 exit test',
      sourcePath: 'quadruped/PROJECT_PLAN.md',
      // The leading ellipsis marks the dropped first half of the exit test
      // (joint commanding and sensor streaming). "BEC/battery", not "BEC and
      // battery" — the plan's wording, not a tidied-up version of it.
      body: '…the robot stands in a neutral pose holding its own weight for several minutes without servo overheating or brownout; full-system current stays within BEC/battery limits.',
    },
  },
  {
    slug: 'the-sentry',
    name: 'The Sentry',
    status: 'SEASONAL',
    what: 'An animatronic that tracks people up the driveway every October.',
    hardPart:
      'Computer vision is soft real-time and servo control is hard real-time. Run both on one processor and the vision work steals the timing the servos need, so the head moves in visible jerks.',
    // "no shared state" was authored, not sourced — the plan says nothing
    // about shared state. What it does say is that the Pico "receives simple
    // commands from the Pi", over serial. The claim now stops where the
    // repository stops.
    decision:
      'Split the two across processors. A Raspberry Pi is the brain and does the image processing; a Pico or Nano is the muscle and does nothing but precise servo and LED timing. The interface between them is deliberately narrow: the Pi sends simple commands over a serial link, and the Pico executes them.',
    stack: ['OpenCV', 'Raspberry Pi', 'Pi Pico', 'Arduino Nano', 'Adafruit PWM driver'],
    evidence: {
      kind: 'quote',
      source: 'Project plan, §1',
      sourcePath: 'halloween-vampire/README.md',
      // "receiving simple commands from the Pi and" was previously deleted
      // without an ellipsis — the very clause the decision above rests on.
      body: 'A Raspberry Pi will act as the "brain," handling all the complex image processing for object tracking. An Arduino Nano or Raspberry Pi Pico will act as the "muscle," receiving simple commands from the Pi and executing the precise, real-time control of the servos and LEDs.',
    },
  },
];
