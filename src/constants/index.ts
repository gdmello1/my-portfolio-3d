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
    "Full-Stack Software Engineer with 5+ years of experience building and scaling production systems that don’t fall apart under real-world load. My arsenal includes JavaScript, TypeScript, Python, and Java, with hands-on experience designing backend-heavy architectures, APIs, data pipelines, and modern web applications using Node.js, NestJS, React, and Angular. I’m known for untangling complex systems, modernizing legacy codebases, and taking strong ownership from design to production, with a constant focus on reliability, maintainability, and scale. I thrive in fast-paced environments, think in systems, and continuously push myself toward stronger architecture and distributed systems mastery.",
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
    designation: "Software Engineer (SDE 2)",
    company_name: "ModernaTx, Inc.",
    icon: moderna,
    iconBg: "#F8FDFF",
    date: "Apr 2024 - Present",
    points: [
      "Architected a unified Benchling database integrating data from 16 legacy systems using Node.js and AWS services, collaborating across teams to establish data governance and ensure cross-department data consistency.",
      "Established automated data migration and two-way synchronization pipelines using Sequelize migrations, cron jobs, and Benchling APIs to transition 4.8M records from legacy systems into a unified Benchling database.",
      "Developed a Benchling API proxy using Python and FastAPI to enable legacy systems to perform CRUD operations and access data created directly through the Benchling UI.",
      "Built a network abstraction layer to dynamically redirect traffic from deprecated legacy applications to the Benchling API layer, eliminating cross-VPC connectors and reducing integration overhead by 90% across 60+ applications.",
    ],
    tech: "TypeScript · React · Angular · NestJS · Sequelize · AWS (EC2, ECS, Lambda, S3, SNS, SQS, Event-Bridge, etc.)",
    url: "https://www.modernatx.com/en-US",
  },
  {
    designation: "Software Development Engineer (SDE 1)",
    company_name: "ModernaTx, Inc.",
    icon: moderna,
    iconBg: "#F8FDFF",
    date: "Jul 2023 - Apr 2024",
    points: [
      "Revamped CI/CD workflows using GitHub Actions, reducing PR cycle time by 68% and boosting release cadence.",
      "Generated Dynatrace dashboards using SQL to visualize performance bottlenecks, improving system response time and reducing incident detection time by 40%.",
      "Introduced and set up Jest for unit testing across team-owned services, establishing standardized test practices and improving unit test coverage and code quality.",
      "Implemented Cypress integration and end-to-end tests for Angular and Node.js applications using Platform team tooling, increasing overall test coverage by over 85% and improving release reliability.",
      "Authored API documentation, developer guides, and onboarding materials with Swagger and Readme, improving new engineer ramp-up efficiency by 50%.",
    ],
    tech: "TypeScript · Angular · Express.js · Postgres · Prisma · GitHub Actions · Jenkins · AWS · Docker · Redis · ElasticSearch",
    url: "https://www.modernatx.com/en-US",
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
];

const testimonials: Testimony[] = [
  {
    testimonial:
      "I've never encountered anyone like him, who possesses both an insatiable passion for software development and a remarkable vision for application design.",
    name: "Amir Akhavan Misouri",
    designation: "Professor",
    company: "University of Massachusetts",
  },
  {
    testimonial:
      "After Gavin developed and deployed the mobile app for our product, our usebase increased by 300% in the next quarter. We can't thank him enough!",
    name: "Neil D'sousa",
    designation: "Founder",
    company: "GetSetUp.io",
  },
  {
    testimonial:
      "He is an exceptional engineer with an unwavering focus on quality and pixel-perfect UIs for web and mobile apps.",
    name: "Deepak Singh",
    designation: "Engineering Lead",
    company: "Zaya Learning Labs",
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
