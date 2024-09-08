import {
  ApiGatewayIcon,
  BambooIcon,
  DynamoIcon,
  GitHubActionsIcon,
  LambdaIcon,
  LinuxIcon,
  LoadBalancerIcon,
  MongoDBIcon,
  NodeIcon,
  PostgreSQLIcon,
  PythonIcon,
  RDSIcon,
  ReactIcon,
  SQSIcon,
  TypeScriptIcon,
} from '@/components/icons';

export const about = {
  title: 'About me',
  description:
    "Experienced Software Engineer with a passion for cloud architectures and software efficiency. My hands-on experience in front-end, back-end, and DevOps provided a strong foundation for understanding and navigating the dynamic tech landscape. I'm driven by the challenge of optimizing software processes and leveraging technology to solve real-world problems effectively.",
  details: [
    {
      name: 'Name',
      value: 'Edward Ramirez',
    },
    {
      name: 'Experience',
      value: '3+ Years',
    },
    {
      name: 'Languages',
      value: 'Spanish, English',
    },
  ],
};

export const experience = {
  icon: '',
  title: 'Professional Experience',
  description:
    'Explore my comprehensive journey across various domains of software engineering, where I have contributed to innovative solutions and enhanced system efficiencies. Below are highlights from my recent roles',
  details: [
    {
      title: 'EPAM Systems',
      subtitle: 'Software Engineer',
      date: 'Dec 2022 - Present',
    },
    {
      title: 'Cox Automotive Inc',
      subtitle: 'Backend Engineer',
      date: 'May 2022 - Nov 2022',
    },
    {
      title: 'LitLingo Technologies',
      subtitle: 'Full Stack Engineer',
      date: 'Jan 2022 - Apr 2022',
    },
    {
      title: 'Melt Studio',
      subtitle: 'Software Developer',
      date: 'Oct 2021 - Dec 2021',
    },
  ],
};

export const education = {
  icon: '',
  title: 'Education',
  description: '',
  details: [
    {
      title: 'Universidad Ind. de Santander',
      subtitle: 'Engineering, Bachelor',
      date: '2017 - 2022',
    },
    {
      title: 'Michigan University',
      subtitle: 'Python Specialization',
      date: '2020 - 2021',
    },
    {
      title: 'Michigan University',
      subtitle: 'Design Web Applications with Django and JavaScript',
      date: '2020',
    },
    {
      title: 'LinkedIn Learning',
      subtitle: 'Devops with AWS',
      date: '2022',
    },
    {
      title: 'A Cloud Guru',
      subtitle: 'AWS Solutions Architect Course',
      date: '2023',
    },
    {
      title: 'Google',
      subtitle: 'Git and GitHub crash course',
      date: '2021',
    },
  ],
};

export const techStack = {
  icon: '',
  title: 'Skills',
  description:
    "My technical landscape is rich with a variety of tools and technologies that I,ve mastered through hands-on application and continuous learning. Here are some of the key technologies I've specialized in:",
  details: [
    {
      title: 'Full Stack',
      items: [
        {
          icon: ReactIcon,
          name: 'React',
        },
        {
          icon: NodeIcon,
          name: 'NodeJS',
        },
        {
          icon: TypeScriptIcon,
          name: 'TypeScript',
        },
        {
          icon: PythonIcon,
          name: 'Python',
        },
      ],
    },
    {
      title: 'AWS Services',
      items: [
        {
          icon: LambdaIcon,
          name: 'API Lambda',
        },
        {
          icon: ApiGatewayIcon,
          name: 'API Gateway',
        },

        {
          icon: LoadBalancerIcon,
          name: 'Elastic Load Balancing',
        },
        {
          icon: SQSIcon,
          name: 'Simple Queue Service',
        },
        // {
        //   icon: '/icons/amazons3.svg',
        //   name: 'Simple Storage Service',
        // },
      ],
    },
    {
      title: 'Databases',
      items: [
        {
          icon: DynamoIcon,
          name: 'DynamoDB',
        },
        {
          icon: MongoDBIcon,
          name: 'MongoDB',
        },
        {
          icon: RDSIcon,
          name: 'Relational DB Service',
        },
        {
          icon: PostgreSQLIcon,
          name: 'PostgreSQL',
        },
      ],
    },
    {
      title: 'DevOps',
      items: [
        {
          icon: GitHubActionsIcon,
          name: 'GitHub Actions',
        },
        {
          icon: BambooIcon,
          name: 'Bamboo',
        },
        {
          icon: LinuxIcon,
          name: 'Linux Scripting',
        },
      ],
    },
  ],
};
