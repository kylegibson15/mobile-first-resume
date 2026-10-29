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
  bio: 'Lead Engineer at Blue Origin, leading the product team behind the lunar programs\' systems-engineering platform: used by ~300 systems engineers, approved to manage CUI in AWS GovCloud, and opened to NASA penetration testers through a sandboxed deployment. Previously built core platform services used by all 10,000+ Blue Origin employees. Ships AI where it can be trusted: production Claude agents on AWS Bedrock, held to 100% factual accuracy. 7+ years of full-stack engineering in aerospace and AI/ML.',
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
      'Lead a 5-person team owning product direction, architecture, and delivery for a platform that automates systems-engineering analysis, producing technical performance measures from design parameters derived from requirements, for ~300 systems engineers across all lunar subsystems.',
      'Built it from what engineers told us: they were working from scattered Excel copies with no source of truth, and the copies were causing errors in design work. Replaced them with one governed source of truth with full change history and interactive React visualizations for high-dimensional simulation data.',
      'Worked with Security and Export Control to get the system approved to manage CUI in AWS GovCloud under ITAR/EAR and NIST 800-171, with row-level access control, full historical change tracking for configuration management, and encryption across the lifecycle of every event in the system.',
      'Defined penetration-testing infrastructure with NASA counterparts, giving NASA pentesters a sandboxed deployment of the system on AWS WorkSpaces, and worked with Blue Origin\'s NASA representative, who presents data from the system to NASA.',
      // TODO(kyle): add agent usage — questions answered per week, eval-suite size, hours saved. Keep this site and
      // ~/Desktop/Resume/KyleGibson_Resume_Anthropic_PublicSector.docx in sync.
      'Built several agents and put two into production on Claude (currently Opus 5.5) via AWS Bedrock on Blue Origin\'s internal AI platform: MCP-connected agents that answer questions on technical performance measures and design parameters directly from the source of truth.',
      'Held the agents to 100% factual accuracy with automated tests that check answers against known facts, and built the APIs the MCP servers call so agents use structured tools instead of model memory.',
      'Initiated and led the team\'s adoption of agentic workflows and shared repository context, cutting the human effort spent debugging failed simulation and analysis jobs.',
      'Designed the CI/CD and automation pipeline (Python, Terraform, Kubernetes, Datadog) for high-volume, interdependent analysis and simulation jobs, reducing end-to-end simulation time by 40%.',
      'Set priorities directly with Systems Engineering, Program Leadership, and Mission Planning.',
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
      'Built and operated core platform services used by all 10,000+ Blue Origin employees, including user, file, and notification services, in Java and Python at 99.999% availability.',
      'Built manufacturing services that track parts and every change to them, plus an event-driven search system (AWS SQS/SNS, OpenSearch) that lets engineers find manufacturing data in near real time.',
      'Enforced role-based access control (RBAC) for sensitive manufacturing data across REST and GraphQL APIs.',
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
