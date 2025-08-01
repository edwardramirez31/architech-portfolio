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
  ApiGatewayIcon,
  S3Icon,
  DynamoIcon,
  LambdaIcon,
  HtmlIcon,
  CSSIcon,
  PHPIcon,
  JSIcon,
} from '@/components/icons';

export const projects = [
  {
    id: '01',
    title: 'Desafío Barichara',
    category: 'Frontend - Cloud - Serverless',
    description:
      'Web application designed to promote and sell tickets to a Trail Running and Mountain Biking event in the landscape of Barichara, Colombia. The app features detailed listings of event categories, pricing, prizes, checkout and payments gateway integration with Wompi.',
    stack: [
      {
        icon: ReactIcon,
        name: 'React',
      },
      {
        icon: LambdaIcon,
        name: 'Lambda',
      },
      {
        icon: DynamoIcon,
        name: 'Dynamo DB',
      },
      {
        icon: TailwindIcon,
        name: 'Tailwind',
      },
      {
        icon: ApiGatewayIcon,
        name: 'Gateway',
      },
      {
        icon: S3Icon,
        name: 'AWS S3',
      },
      {
        icon: SentryIcon,
        name: 'Sentry',
      },
      {
        icon: TypeScriptIcon,
        name: 'TypeScript',
      },
    ],
    image: '/assets/projects/barichara.png',
    live: 'https://www.desafiobarichara.com',
    github: '',
  },
  {
    id: '02',
    title: 'ComerciBeef',
    category: 'Frontend',
    description:
      'Developed a modern website for a meat distribution company, designed with a clean and contemporary layout. The site is fully optimized for SEO, helping it rank at the top of Google search results. It highlights the company’s services and history, with the goal of attracting new customers. The site also includes integrated contact forms and job application forms for potential employees.',
    stack: [
      {
        icon: HtmlIcon,
        name: 'HTML',
      },
      {
        icon: CSSIcon,
        name: 'CSS',
      },
      {
        icon: PHPIcon,
        name: 'PHP',
      },
      {
        icon: JSIcon,
        name: 'JavaScript',
      },
    ],
    image: '/assets/projects/comercibeef.png',
    live: 'https://www.comercibeef.com',
    github: '',
  },
  {
    id: '03',
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
        name: 'Tailwind',
      },
    ],
    image: '/assets/projects/pulso.png',
    live: 'www.pulsopolar.com',
    github: 'https://github.com/edwardramirez31/pulso-polar-frontend',
  },
  {
    id: '04',
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
        name: 'Material',
      },
    ],
    image: '/assets/projects/crypto.png',
    live: 'https://cryptotweets.netlify.app',
    github: '',
  },
  {
    id: '05',
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
    id: '06',
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
