export interface Experience {
  title: string;
  company: string;
  division: string;
  period: string;
  current: boolean;
  bullets: string[];
  tech: string[];
}

export interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  note?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
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

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI/ML & MLOps',
    color: 'seafoam',
    skills: [
      'PyTorch',
      'Ray',
      'CUDA',
      'MLOps',
      'CI/CD Pipelines',
      'Agentic AI',
      'GenAI / LLMs',
      'Apache Spark',
      'ETL Orchestration',
      'Apache Airflow',
      'Prefect',
      'Prompt Engineering',
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    color: 'blue',
    skills: [
      'Kubernetes (EKS)',
      'Terraform (IaC)',
      'AWS',
      'Docker',
      'Datadog',
      'CloudWatch',
      'Load Testing (k6)',
      'ArgoCD',
      'GitHub Actions',
    ],
  },
  {
    name: 'Backend',
    color: 'orange',
    skills: [
      'Python',
      'Go',
      'TypeScript',
      'Node.js',
      'Java',
      'Rust',
      'C++',
      'GraphQL',
      'REST API',
      'Event-Driven (SQS/SNS)',
      'Kafka',
      'Microservices',
    ],
  },
  {
    name: 'Frontend',
    color: 'yellow',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'D3.js / SVG',
      'Data Visualization',
      'Tailwind CSS',
      'Framer Motion',
      'Three.js',
    ],
  },
  {
    name: 'Databases',
    color: 'pink',
    skills: ['PostgreSQL', 'DynamoDB', 'OpenSearch', 'Redis', 'RDS'],
  },
  {
    name: 'Leadership',
    color: 'red',
    skills: [
      'Tech Lead (5-person team)',
      'Full Product Lifecycle',
      'Stakeholder Management',
      'Agile / Scrum',
      'Architecture Design',
      'Code Review',
      'Mentoring',
      'Cross-Team Collaboration',
    ],
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

export const projects: Project[] = [
  {
    title: 'My Vacation Home',
    description:
      'Information website for a Winter Park, CO vacation rental with transit information and local restaurant recommendations. Built with modern React patterns and smooth animations.',
    tech: ['TypeScript', 'React', 'Framer Motion', 'Redux', 'Material UI', 'GitHub Pages'],
    liveUrl: 'https://kylegibson15.github.io/my-vacation-home/',
    githubUrl: 'https://github.com/kylegibson15/my-vacation-home',
  },
  {
    title: 'Portfolio (This Site)',
    description:
      'Cutting-edge portfolio built with React 18, Three.js 3D graphics, Framer Motion animations, and Tailwind CSS. Features interactive timeline, particle effects, and glassmorphism design.',
    tech: ['React 18', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Zustand', 'Vite'],
    githubUrl: 'https://github.com/kylegibson15/mobile-first-resume',
  },
];

export const metrics = [
  { label: 'Years Experience', value: 8, suffix: '+' },
  { label: 'Simulation Time Reduced', value: 40, suffix: '%' },
  { label: 'Service Availability', value: 99.999, suffix: '%' },
  { label: 'Feature Releases / Quarter', value: 10, suffix: '+' },
];
