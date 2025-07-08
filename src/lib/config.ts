import LinkedinIcon from "@/components/icons/linkedin.astro";
import XIcon from "@/components/icons/x.astro";
import GithubIcon from "@/components/icons/github.astro";

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

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
] as const;

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
