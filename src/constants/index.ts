import { url } from "inspector";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  nestjs,
  postgres,
  angular,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  reactnative,
  sql,
  git,
  aws,
  docker,
  umd,
  gsu,
  dbit,
  zaya,
  moderna,
} from "../assets";
import {
  Experience,
  Project,
  Service,
  Technology,
  Testimony,
  User,
} from "../configs/types";

interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const user: User = {
  first_name: "Gavin",
  last_name: "D'mello",
  portfolio_primary_title: "Gavin",
  portfolio_secondary_title: "D'mello",
  about_me_slogan:
    "I develop highly responsive full-stack web and mobile aplications",
  about_me_description:
    "I am a Software Engineer with 3+ years of experience in software development, debugging and testing. Proficient in building full-stack web and mobile applications, with expertise in UI/UX, Database and System Designs. Highly skilled in Javascript, TypeScript, Java and SQL, as well as using frameworks like React, Angular@15, Node.js, Nest.js, Postgres and MongoDB. Adept in Agile practices and team collaboration, with a strong focus on continuous improvement.",
};

const services: Service[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native (Mobile) Developer",
    icon: mobile,
  },
  {
    title: "ExpressJs/NestJs",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies: Technology[] = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NestJs",
    icon: nestjs,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences: Experience[] = [
  {
    designation: "Student Software Developer - Web Developer",
    company_name: "Don Bosco Institute of Technology, Mumbai",
    icon: dbit,
    iconBg: "#faf6de",
    date: "January 2017 - October 2017",
    points: [
      "Worked on a live project named DBJSE and learned the use of Blade(a tool for the front end and integration of the system).",
      "Developed 70% of the CRUD API in ExpressJS with CORS support and Origin and Proxy Validations to achieve a secure backend.",
      "Conducted unit testing of APIs using Postman, and tracked project status using GitHub",
    ],
    tech: " Web Development · Unit Testing · RESTful WebServices · Figma (Software) · NoSQL · Git",
    url: "https://www.dbit.in/",
  },
  {
    designation: "Software Development Engineer",
    company_name: "Zaya Learning Labs",
    icon: zaya,
    iconBg: "#def8fa",
    date: "July 2019 - February 2021",
    points: [
      "Achieved business growth by developing product(web and mobile) prototypes and presenting demos to potential clients.",
      "Developed an online assessment and progress tracking system for a high-profile client resulting in a 81% efficiency gain.",
      "Improved employee management system’s performance by 58%, by re-engineering existing solutions and using redux.",
      "Guided and supported junior developers on bug resolution, code comprehension, onboarding, and timeline planning, while providing insights on specific approaches for different cases.",
    ],
    tech: "TypeScript · Python · Flutter · XML · React-Native · GraphQL · ES6+ · PostgreSQL · OAuth · GitHub Actions · Figma",
    url: "https://www.zaya.org/",
  },

  {
    designation: "Full Stack Mobile Engineer",
    company_name: "GetSetUp.io",
    icon: gsu,
    iconBg: "#ffe6fa",
    date: "Mar 2021 - Aug 2021",
    points: [
      "Boosted user base to 300% by spearheading the development of comprehensive and engaging mobile features.",
      "Pitched ideas to improve API security with OAuth 2.0 and use proxy system design to limit access based on credentials.",
      "Implemented exhaustive edge case monitoring and unit testing, which yielded an impressive 95% reduction in errors.",
      "Conducted code reviews and delivered feedback to enhance code quality and ensure adherence to best practices.",
    ],
    tech: "Javascript · Node.js · Java · React · React Native · Relational databases · CI/CD · Postgres · Git · XML",
    url: "https://www.getsetup.io/",
  },
  {
    designation: "Full stack Software Developer | Graduate Assistant",
    company_name: "University of Massachusetts, Dartmouth",
    icon: umd,
    iconBg: "#d4d9fa",
    date: "Jan 2022 - May 2023",
    points: [
      "Reduced API call requests by 43%, using cache configurations and developing bulk and batch endpoints.",
      "Deployed and maintained interfaces and servers of applications like NBDT and FRDT  for seamless and reliable operation.",
      "Leading a team of 4 developers during the full-stack web and mobile app development of NBDT business project",
      "Developing and maintaining Full stack applications using React.js, Node.js and other related technologies.",
    ],
    tech: "TypeScript · NoSql · Express.js · React.js · React Native · D3.js · AWS S3 · GitHub · Material-UI · RESTful APIs",
    url: "https://www.umassd.edu/",
  },
  {
    designation: "Software Development Engineer (SDE 1)",
    company_name: "ModernaTx, Inc.",
    icon: moderna,
    iconBg: "#F8FDFF",
    date: "Jul 2023 - Apr 2024",
    points: [
      "Collaborated with a cross-platform team to develop an award-winning P.O.C. app using AI and data warehouse with GPT, enabling stakeholders to make data-driven decisions during business strategy planning and forecasting.",
      "Increased application reliability by implementing application testing with Jest for unit/integration testing and Cypress for end-to-end testing, resulting in a 30% reduction in bugs and enhanced overall performance.",
    ],
    tech: "TypeScript · Angular · Express.js · Postgres · Prisma · GitHub Actions · Jenkins · AWS · Docker · Redis · ElasticSearch",
    url: "https://www.modernatx.com/en-US",
  },
  {
    designation: "Software Engineer (SDE 2)",
    company_name: "ModernaTx, Inc.",
    icon: moderna,
    iconBg: "#F8FDFF",
    date: "Apr 2024 - Present",
    points: [
      "Led technical discussions in an agile setting, to transform a rigid database structure into a well-defined, scalable schema, enabling seamless integration of new tables and achieving 40% faster onboarding of experimental data.",
      "Created application evaluation dashboard templates in Dynatrace using AWS CloudWatch logs, uncovering over 1,700 improvement opportunities in database queries, REST APIs, & cloud configs across 60+ in-house applications.",
      "Reduced cost and time of running CI/CD pipelines and app deployments to AWS ECS by streamlining steps and introducing caching, saving approximately 3,500 hours of computation time annually.",
    ],
    tech: "TypeScript · React · Angular · NestJS · Sequelize · AWS (EC2, ECS, Lambda, S3, SNS, SQS, Event-Bridge, etc.)",
    url: "https://www.modernatx.com/en-US",
  },
];

const testimonials: Testimony[] = [
  {
    testimonial:
      "I've never encountered anyone like him, who possesses both an insatiable passion for software development and a remarkable vision for application design.",
    name: "Amir Akhavan Misouri",
    designation: "Professor",
    company: "University of Massachusetts",
    image:
      "https://pxl-umassdedu.terminalfour.net/fit-in/945x600/filters:format(webp)/filters:quality(90)/prod01/production-cdn-pxl/media/umassdartmouth/profiles/engineering/MASOUMI-51.jpg?text=945+WebP",
  },
  {
    testimonial:
      "After Gavin developed and deployed the mobile app for our product, our usebase increased by 300% in the next quarter. We can't thank them enough!",
    name: "Neil D'sousa",
    designation: "Founder",
    company: "GetSetUp.io",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHKaKNnEid8HQ/profile-displayphoto-shrink_800_800/0/1646771131470?e=1684368000&v=beta&t=rCpELKC1h-fuCwTej6EYEBFHQi81lpD1ckm-mIVTnz0",
  },
  {
    testimonial:
      "He is an exceptional engineer with an unwavering focus on quality and pixel-perfect UIs for web and mobile apps.",
    name: "Deepak Singh",
    designation: "Engineering Lead",
    company: "Zaya Learning Labs",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFr0n_lCTfvlA/profile-displayphoto-shrink_800_800/0/1623920643479?e=1684368000&v=beta&t=n2PnFs51fAM_K2muYptVo0cprzRkenfRz6mkaoZp0C4",
  },
];

const projects: Project[] = [
  {
    name: "3D Portfolio",
    description:
      "A portfolio template website with support of ThreeJS and powered by React, Redux and Tailwind CSS. This super animated 3d portfolio website template is most useful for users looking to showcase their skills, projects, work experiences. In addition this template also allows prospective hiring managers to reach out to you via the Contact Me Form(emailjs account required for this feature).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://ik.imagekit.io/kayo3vdtw/3d-portfolio/projects/Screenshot_2023-03-20_at_1.32.17_AM.png?updatedAt=1679290366079",
    source_code_link: "https://github.com/eliterudy/my-portfolio-3d",
    live_link: "https://gavin-dmello-portfolio-3d.netlify.app/",
  },
  {
    name: "Blogica",
    description:
      "A responsive mobile applications that allows its users to create and share content in the tech domain. This website is a great source for tech geniuses to share their knowledege and earn for thier time and efforts as well as for early professionals looking to grow their knowledge base. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://ik.imagekit.io/kayo3vdtw/3d-portfolio/projects/Screenshot_2023-03-20_at_1.27.59_AM.png?updatedAt=1679290165657",

    source_code_link: "https://github.com/eliterudy/blogica",
    live_link: "https://blogica.netlify.app/",
  },
  {
    name: "Recipe Diary",
    description:
      "A visually appealing and informative food blog website that offers a wide range of recipes, cooking techniques, and food-related content to inspire and educate food lovers.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://ik.imagekit.io/kayo3vdtw/3d-portfolio/projects/Screenshot_2023-03-20_at_1.40.12_AM.png?updatedAt=1679290834218",
    source_code_link: "https://github.com/eliterudy/recipe-diary-frontend",
    live_link: "https://eliterudy.github.io/recipe-diary-frontend/",
  },
];

export { user, services, technologies, experiences, testimonials, projects };
