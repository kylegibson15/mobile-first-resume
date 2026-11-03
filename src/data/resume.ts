export interface Experience {
  title: string;
  company: string;
  division: string;
  period: string;
  current: boolean;
  bullets: string[];
  tech: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  note?: string;
}

export const profile = {
  name: 'Kyle Gibson',
  title: 'Lead Engineer, Products & Platforms',
  subtitle: 'Products & Platforms for Regulated, Mission-Critical Engineering',
  tagline:
    'Building products and platforms for regulated, mission-critical engineering — from NASA lunar programs to the services every Blue Origin employee depends on.',
  bio: 'Leads the Blue Origin team that built the lunar programs\' systems-engineering platform from scratch, including for NASA\'s Human Landing System: ~300 systems engineers, approved to manage CUI in AWS GovCloud. Builds enterprise- and government-grade products, and ships AI where it can be trusted. 7+ years of full-stack and backend engineering.',
  location: 'Denver, Colorado',
  email: 'kylegibson15@gmail.com',
  phone: '(270) 577-3957',
  linkedin: 'https://www.linkedin.com/in/kylegibson15',
  github: 'https://github.com/kylegibson15',
};

export const experience: Experience[] = [
  {
    title: 'Lead Engineer',
    company: 'Blue Origin',
    division: 'Lunar Data, AI & Applications',
    period: '2024 – Present',
    current: true,
    bullets: [
      'Built the platform from scratch after engineers said scattered Excel copies were causing design errors. It turns design parameters derived from requirements into technical performance measures for ~300 systems engineers across all lunar subsystems.',
      'Lead a 5-person team owning product direction, architecture, and delivery, and turn requirements from Systems Engineering, Program Leadership, and Mission Planning into the roadmap.',
      'Worked with Security and Export Control to get the system approved to manage CUI in AWS GovCloud under ITAR/EAR and NIST 800-171: row-level access control, full change history, and encryption across every event\'s lifecycle.',
      'Defined penetration-testing infrastructure with NASA counterparts, giving NASA pentesters a sandboxed deployment on AWS WorkSpaces, and work with Blue Origin\'s NASA representative, who presents data from the system to NASA.',
      // TODO(kyle): add agent usage — questions answered per week, eval-suite size, hours saved. Keep this site and
      // ~/Desktop/Resume/KyleGibson_Resume_Anthropic_PublicSector.docx in sync.
      'Put two agents into production on Claude (currently Opus 5.5) via AWS Bedrock. They answer design questions through MCP and purpose-built APIs, not model memory.',
      'Held both agents to 100% factual accuracy with automated tests that check answers against known facts from the source of truth.',
      'Led the team\'s adoption of agentic workflows and shared repository context, cutting the human effort spent debugging failed simulation and analysis jobs.',
      'Designed the CI/CD and job pipeline (Python, Kubernetes, Terraform, Datadog) for interdependent simulation jobs, cutting end-to-end simulation time by 40%.',
      'Promoted from Software Engineer III to Lead Engineer on the same program.',
    ],
    tech: [
      'AWS GovCloud',
      'CUI / ITAR',
      'Claude on Bedrock',
      'MCP',
      'LLM Evaluation',
      'Python',
      'TypeScript',
      'React',
      'Terraform',
      'Kubernetes',
      'AWS',
      'DynamoDB',
      'PostgreSQL',
      'SQS/SNS',
      'Datadog',
      'Data Visualization',
    ],
  },
  {
    title: 'Software Engineer II/III',
    company: 'Blue Origin',
    division: 'Platform Engineering',
    period: '2022 – 2024',
    current: false,
    bullets: [
      'Built and operated core platform services used by all 10,000+ Blue Origin employees, including the user, file, and notification services, in Java and Python at 99.999% availability.',
      'Built manufacturing services that track parts and every change to them, with event-driven search (AWS SQS/SNS, OpenSearch) and role-based access control across REST and GraphQL APIs.',
      'Automated infrastructure with Terraform and Kubernetes and added Datadog monitoring across the services.',
    ],
    tech: [
      'Java',
      'Python',
      'AWS',
      'SQS/SNS',
      'OpenSearch',
      'Terraform',
      'Kubernetes',
      'Datadog',
      'GraphQL',
      'REST',
    ],
  },
  {
    title: 'Sr. Full Stack Software Engineer',
    company: 'Alteryx',
    division: 'Data Science R&D',
    period: '2019 – 2022',
    current: false,
    bullets: [
      'Architected and deployed ETL orchestration pipelines (Apache Airflow/Prefect) to manage terabytes of data flows for model training and serving, supporting multiple internal ML applications.',
      'Engineered scalable backend services using Rust and Python for data-intensive applications, including the development of full-stack applications with interactive D3.js/SVG visualizations.',
    ],
    tech: ['Rust', 'Python', 'Apache Airflow', 'Prefect', 'D3.js', 'SVG', 'ETL', 'ML Pipelines'],
  },
  {
    // Concurrent with Blue Origin, so `current` stays false: one "Now" badge, on the day job.
    title: 'Founder & Engineer',
    company: 'Giskard Labs LLC',
    division: 'Independent products',
    period: '2026 – Present',
    current: false,
    bullets: [
      'Took AmigoWeGo, a group trip-planner, from zero to the App Store as a solo engineer (about 20 users): Rust and PostGIS backend, React and SwiftUI clients generated from one OpenAPI contract.',
      'Built sqllm, natural-language questions over SQL tables, with a 40-question evaluation comparing local models against Claude on a pass bar set before any run.',
    ],
    tech: ['Rust', 'PostGIS', 'React', 'SwiftUI', 'OpenAPI', 'LLM Evaluation'],
  },
];

export const education: Education[] = [
  {
    school: 'University of Colorado',
    degree: 'MS Computer Science',
    location: 'Colorado',
    note: 'In Progress',
  },
  {
    school: 'Galvanize',
    degree: 'Full Stack Immersive',
    location: 'Denver, Colorado',
  },
  {
    school: 'University of Louisville',
    degree: 'BS Kinesiology/Physiology',
    location: 'Kentucky',
  },
];
