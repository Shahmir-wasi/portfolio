// Import images
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// Import custom company logos
import esoftinLogo from "../assets/company/E-Softin.jpeg";
import launchlabLogo from "../assets/company/LaunchLab.png";
import softsuiteLogo from "../assets/company/softsuite.png";
import aiesecLogo from "../assets/company/aiesec.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "SoftSuite Technologies",
    icon: softsuiteLogo,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Collaborated on full-stack web applications using the MERN stack.",
      "Developed and maintained scalable React-based frontends and Node.js backends.",
      "Integrated MongoDB with backend APIs and managed Express.js routing.",
      "Fixed bugs, deployed updates, and contributed to production-ready codebases.",
      "Worked closely with senior developers and participated in Agile workflows.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Launch Lab",
    icon: launchlabLogo,
    iconBg: "#E6DEDD",
    date: "June 2024 - Sep 2024",
    points: [
      "Built and enhanced web applications using the MERN stack.",
      "Created dynamic user interfaces with React and integrated them with RESTful APIs.",
      "Managed server-side logic using Node.js and Express.",
      "Designed MongoDB schemas and handled data queries efficiently.",
      "Participated in Agile sprints and contributed to technical planning meetings.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "E-Softin",
    icon: esoftinLogo,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Served as the frontend team lead, managing HTML, CSS, and JavaScript-based UI development.",
      "Designed and implemented responsive layouts for multiple client projects.",
      "Collaborated with backend teams to ensure seamless UI integration.",
      "Optimized pages for performance and cross-device compatibility.",
      "Led discussions and provided feedback in daily development check-ins.",
    ],
  },
  {
    title: "Organizing Committee President",
    company_name: "AIESEC",
    icon: aiesecLogo,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Feb 2025",
    points: [
      "Led a cross-functional team of 7–8 members to organize large-scale youth engagement events.",
      "Planned and executed Pakistan’s biggest football-based EWA event.",
      "Oversaw event logistics, budget management, and on-ground coordination.",
      "Collaborated with marketing and PR teams to promote the event effectively.",
      "Improved leadership, time management, and decision-making skills in high-pressure environments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shahmir proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shahmir does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shahmir optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SugarCare",
    description:
      "Health management platform for diabetes patients to book appointments, log symptoms, and receive doctor feedback.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://shahmir-wasi.github.io/sugarcare.io/",
  },
  {
    name: "Java with Java",
    description:
      "Online Java learning community offering tutorials, coding resources, and peer collaboration for developers worldwide.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://67f958ccc96deb1226363dc4--javawithjava.netlify.app/",
  },
  {
    name: "NFC-IET Football Society",
    description:
      "Student-led website for sharing football society news, event updates, team schedules, and multimedia highlights.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://shahmir-wasi.github.io/FC-NFC-IET.io/",
  },
];

export { services, technologies, experiences, testimonials, projects };
