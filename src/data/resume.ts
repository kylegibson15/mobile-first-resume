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
  title: 'Software Engineering Lead',
  subtitle: 'Distributed Systems, MLOps & Platform Engineering',
  tagline:
    'Building scalable, fault-tolerant infrastructure for mission-critical systems — from NASA lunar programs to ML pipelines processing terabytes at scale.',
  bio: 'Software Engineering Lead with 8+ years architecting large-scale distributed systems and data-intensive platforms in high-stakes environments. Led the technical vision for NASA Human Landing System software at Blue Origin — designing event-driven architectures, CI/CD pipelines on Kubernetes, and real-time data platforms with 99.999% availability. Proven track record reducing simulation time by 40%, managing heterogeneous compute workloads (CPU/GPU), and driving adoption of AI-powered engineering workflows. Passionate about solving complex infrastructure problems at scale.',
  location: 'Denver, Colorado',
  email: 'kylegibson15@gmail.com',
  phone: '(270) 577-3957',
  linkedin: 'https://www.linkedin.com/in/kylegibson15',
  github: 'https://github.com/kylegibson15',
};

export const experience: Experience[] = [
  {
    title: 'Software Engineering Lead',
    company: 'Blue Origin',
    division: 'Lunar Permanence',
    period: '2024 – Present',
    current: true,
    bullets: [
      'Lead Engineer for a 5-person team, owning the full technical vision, architecture, and deployment strategy for a platform automating vehicle design, simulation, and performance tracking across all lunar program subsystems.',
      'Designed and implemented a robust CI/CD and automation pipeline (Python, Terraform, Kubernetes, Datadog) to manage high-volume, interdependent analysis and simulation jobs, reducing end-to-end simulation time by 40%.',
      'Architected the application for scale and compliance using React, TypeScript, Python, AWS DynamoDB/RDS, and AWS SQS/SNS. Secured CUI data by implementing row-based access and full historical change tracking.',
      'Initiated and led the adoption of Generative AI techniques, including agentic workflows and shared repository context, to improve programming efficiency and decrease human effort in debugging and fixing job failures.',
      'Collaborated across Systems Engineering, Program Leadership, and Mission Planning teams to gather requirements, manage product prioritization, and deliver full-stack solutions.',
    ],
    tech: [
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
      'GenAI',
    ],
  },
  {
    title: 'Software Engineer III',
    company: 'Blue Origin',
    division: 'Lunar Permanence',
    period: '2024 – Present',
    current: true,
    bullets: [
      'Developed a new lifecycle management platform to help systems engineers track key vehicle metrics; led the transition to a unified, data-driven solution, reducing engineering workflow inefficiencies.',
      'Led the cloud deployment strategy, implementing Infrastructure as Code (IaC) with Terraform and deploying the system on Kubernetes, ensuring scalability and maintainability.',
      'Developed interactive React visualizations and a custom data table, optimizing engineers\' ability to analyze high-dimensional simulation data and accelerating the identification of critical performance regressions.',
    ],
    tech: ['React', 'TypeScript', 'Terraform', 'Kubernetes', 'Data Visualization'],
  },
  {
    title: 'Software Engineer II/III',
    company: 'Blue Origin',
    division: 'Enterprise Technology',
    period: '2022 – 2024',
    current: false,
    bullets: [
      'Managed and maintained critical platform services (user-service, file-service) written in Java and Python, ensuring 99.999% availability and reliability for space vehicle manufacturing.',
      'Designed and implemented an event-driven system using AWS SQS/SNS and OpenSearch, enhancing engineers\' ability to locate critical manufacturing data in near real-time.',
      'Automated cloud infrastructure management using Terraform and Kubernetes, and integrated Datadog monitoring, improving visibility and responsiveness.',
      'Enforced role-based access control (RBAC) for sensitive manufacturing data via REST and GraphQL APIs.',
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
    school: 'University of Louisville',
    degree: 'BS Kinesiology/Physiology',
    location: 'Kentucky',
  },
  {
    school: 'Galvanize',
    degree: 'Full Stack Immersive',
    location: 'Denver, Colorado',
  },
];
