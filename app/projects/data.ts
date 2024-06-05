import {
  ReactIcon,
  NodeIcon,
  TypeScriptIcon,
  NextIcon,
  TailwindIcon,
  DjangoIcon,
  MaterialIcon,
  PythonIcon,
  SentryIcon,
  PostgreSQLIcon,
  FlaskIcon,
  FirebaseIcon,
} from '@/components/icons';

export const projects = [
  {
    id: '01',
    title: 'Pulso Polar',
    category: 'Frontend',
    description:
      'Pulso Polar is a web application designed to promote wellness services such as ice baths, breathing techniques, and yoga. The app features detailed listings of services, pricing information, and a company blog to engage users with relevant wellness content.',
    stack: [
      {
        icon: ReactIcon,
        name: 'React',
      },
      {
        icon: NextIcon,
        name: 'NextJS',
      },
      {
        icon: TypeScriptIcon,
        name: 'TypeScript',
      },
      {
        icon: TailwindIcon,
        name: 'Tailwind CSS',
      },
    ],
    image: '/assets/projects/pulso.png',
    live: 'www.pulsopolar.com',
    github: 'https://github.com/edwardramirez31/pulso-polar-frontend',
  },
  {
    id: '02',
    title: 'Crypto Tweets',
    category: 'Frontend',
    description:
      'Crypto Tweets delivers real-time notifications on cryptocurrency updates directly to users via WhatsApp. The platform offers a premium subscription plan and integrates PayPal for secure payment processing. It features up-to-date news, data analysis, and price tracking functionalities.',
    stack: [
      {
        icon: ReactIcon,
        name: 'React JS',
      },
      {
        icon: DjangoIcon,
        name: 'Django',
      },
      {
        icon: PythonIcon,
        name: 'Python',
      },
      {
        icon: MaterialIcon,
        name: 'Material UI',
      },
    ],
    image: '/assets/projects/crypto.png',
    live: 'https://cryptotweets.netlify.app',
    github: '',
  },
  {
    id: '03',
    title: 'Suscripciones',
    category: 'Frontend',
    description:
      'Web application that enables business owners to create personalized websites for selling products or services on a subscription basis. The app leverages Firebase and Google Cloud Functions for backend operations. Sentry is utilized for real-time error tracking and performance monitoring, enhancing reliability and user experience.',
    stack: [
      {
        icon: NextIcon,
        name: 'NextJS',
      },
      {
        icon: FirebaseIcon,
        name: 'Firebase',
      },
      {
        icon: NodeIcon,
        name: 'NodeJS',
      },
      {
        icon: SentryIcon,
        name: 'Sentry',
      },
    ],
    image: '/assets/projects/pergamino.png',
    live: 'https://go.suscripciones.co/o/pergamino',
    github: '',
  },
  {
    id: '04',
    title: 'Litlingo',
    category: 'Litlingo',
    description:
      "AI-driven software application that aids companies in managing communication risks and enhancing compliance. Our team's expertise spans artificial intelligence, linguistics, and legal tech. We customize real-time solutions for businesses to prevent costly communication errors by detecting potential risks before they occur.",
    stack: [
      {
        icon: ReactIcon,
        name: 'React',
      },
      {
        icon: FlaskIcon,
        name: 'Flask',
      },
      {
        icon: TypeScriptIcon,
        name: 'TypeScript',
      },
      {
        icon: PostgreSQLIcon,
        name: 'PostgreSQL',
      },
    ],
    image: '/assets/projects/litlingo.png',
    live: 'www.litlingo.com',
    github: '',
  },
];
