import LinkedinIcon from "@/components/icons/linkedin.astro";
import XIcon from "@/components/icons/x.astro";
import GithubIcon from "@/components/icons/github.astro";
import type { Experience } from "./types";

export const SITE = {
  pageType: "website",
  author: "Yash Baddi",
  profile: "https://yashbaddi.github.io",
  desc: "My digital space, projects, insights, and thoughts on software engineering.",
  title: "Yash Baddi",
  postPerPage: 6,
  ogImage:
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
} as const;

export const PROFILE_INFO = {
  role: "Software Engineer / Full-stack Developer",
  logo: "Yash",
  slogan: "Coding, Creativity, Coffee...",
  displayName: "Yash Baddi",
  email: "yashbaddi29@gmail.com",
  about: `
  Hey there! 👋 I'm Yash, a highly skilled developer with a strong foundation in core computer science concepts. My journey in the tech world has been nothing short of exhilarating.
  ⚡️I am into the dynamic realm of web development, mastering both  backend and frontend technologies with a focus on Node.js and Postgres Database. From conceptualization to deployment, I've brought numerous projects to life, showcasing my commitment to clean, efficient, and scalable code.
  Let's code the future together! 💻✨
  `,
} as const;

export const EXPERIENCES: Experience[] = [
  {
    company: "Geekwerke",
    positions: [
      {
        title: "Full Stack Software Engineer",
        year: "06.2023 - present",
        description: `
- ♦ Nova Analytics
- Joined the founding team in its early stages collaborating with two
  senior engineers to build the product from scratch.
- Worked on backend data ingestion, validation on an ETL pipeline and
construction of PostgreSQL materialized views for efficient API access
to Amazon Sellers KPIs.
- Developed full-stack features in Python and Node.js (backend) and
Remix.js (frontend) shaping a modern, performance-oriented web
dashboard.
- Integrated Amazon SP API and Amazon Ads API, handling complex
OAuth flows and third-party API token management.
- Helped implement system monitoring and alerting with Prometheus
and Grafana, gaining hands-on exposure to observability and uptime
tracking.
- ♦ Quintype Client Migrations
- Developed Pipelines for migrating client data from MySQL to JSON
Lines Format.
            `,
        skills: [
          "Node.js",
          "Redis",
          "Docker",
          "PostgreSQL",
          "MySQL",
          "TypeScript",
          "React",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    company: "Aequs SEZ",
    positions: [
      {
        title: "Intern",
        year: "07.2019 - 08.2019",
        description: `
- ♦ Sanchari Aequs 
- Built an Android Application and a Tracking device to
track buses using Arduino, GPS module to track the location and GSM
Module to transmit the data that has been sent to Google Firebase.
            `,
        skills: [
          "Android App Development",
          "Arduino",
          "GPS Module",
          "GSM Module",
          "Google Firebase",
        ],
      },
    ],
  },
  {
    company: "Education",
    positions: [
      {
        title: "Geekskool",
        year: "01.2023 - 06.2023",
        description: `
- ♦ Completed an intensive tech bootcamp focused on full-stack development.
- ♦ Built projects like a LISP interpreter, custom OAuth provider, HTTP server, and an Express.js clone and a full-featured food delivery app.
            `,
        skills: ["React", "Node.js", "Express.js", "PostgreSQL"],
      },
      {
        title: "Vishveshwaraiah Technological University",
        year: "06.2016 - 06.2020",
        description: `
- ♦ Bachelor of Engineering in Electronics and Communication.

            `,
        skills: ["Electronics", "Communication Systems", "Computer Networks"],
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: GithubIcon,
    url: "https://github.com/yashbaddi",
  },
  {
    name: "Linkedin",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/yashbaddi/",
  },
  {
    name: "X",
    icon: XIcon,
    url: "https://x.com/yashbaddi",
  },
];
