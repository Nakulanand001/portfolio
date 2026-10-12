import { ShieldCheck, Trophy } from "lucide-react";

export const TICKER = [
  ["8+", "React features shipped — FX Connect"],
  ["75–90%", "unit test coverage"],
  ["SUB-SECOND", "live market data updates"],
  ["10+", "REST APIs integrated"],
  ["30+", "countries served"],
  ["20+", "critical bugs resolved"],
  ["CEH", "certified"],
  ["6+", "portfolio modules routed"],
];

export const EXPERIENCE = [
  {
    company: "State Street Corporation",
    role: "Associate Software Engineer II · UI Developer",
    date: "Jan 2025 — Present",
    location: "Hyderabad, India",
    subsections: [
      {
        title: "FX Connect",
        subtitle: "flagship foreign exchange trading platform",
        items: [
          "Engineered 8+ complex React/TypeScript UI features — trade entry screens, order blotter components, and real-time position dashboards — for a platform used by institutional clients across 30+ countries.",
          "Integrated 10+ RESTful APIs into the frontend data layer for accurate trade rendering, live pricing, and portfolio sync across sessions.",
          "Implemented WebSocket connections for live market data, delivering sub-second UI updates for real-time trader decision-making.",
          "Held 75–90% unit test coverage across contributed components with Jest and React Testing Library, reducing post-deployment defects in a regulated environment.",
          "Ran in Agile Scrum sprints (2-week cycles) with cross-functional teams across Hyderabad and global time zones.",
          "Shipped through Harness CI/CD via Bitbucket under strict change-management in a SOX-compliant environment.",
        ],
      },
      {
        title: "Market Execution Portfolio (MEP)",
        subtitle: "multi-module portfolio management product",
        items: [
          "Owned 5+ UI features end-to-end — design review, implementation, testing, deployment — within active sprints.",
          "Built client-side routing and URL redirection with React Router across 6+ portfolio modules, cutting navigation-related support tickets.",
          "Wired backend REST APIs for portfolio data visualization with error boundaries, loading skeletons, and empty-state handling.",
          "Resolved 20+ critical UI bugs under sprint deadlines through structured root-cause analysis with backend engineers and QA.",
          "Managed feature branches, PRs, and code review on GitHub and Bitbucket across a team of 6+ frontend developers.",
        ],
      },
    ],
  },
  {
    company: "WebTechFly",
    role: "Frontend Developer Intern",
    date: "Jan 2024 — Jul 2024",
    location: "Landran, Mohali, India",
    subsections: [
      {
        title: null,
        subtitle: null,
        items: [
          "Built 5+ client-facing websites — including a drone marketplace and portfolio sites — with HTML5, CSS3, Tailwind CSS, JavaScript, and PHP, from wireframe to production.",
          "Cut client feedback cycles by 40% by running close requirement-gathering sessions that translated business needs directly into functional UI.",
          "Produced production-ready visual assets — banners, product images, thumbnails — in Adobe Photoshop for brand-consistent deliverables.",
          "Built dynamic page components and form-handling logic in PHP against MySQL-backed data for product listings, contact forms, and admin panel features.",
        ],
      },
    ],
  },
];

export const PROJECTS = [
  {
    tag: "PY / SECURITY",
    title: "Image Steganography Tool",
    desc: "A Python tool that hides and decodes encrypted messages inside images using LSB (least-significant-bit) steganography — a hands-on exploration of applied information security.",
    stack: ["Python", "LSB Encoding", "Cryptography"],
  },
  {
    tag: "PY / NLP",
    title: "AI Voice Assistant",
    desc: "A voice-controlled assistant built with Python NLP libraries, handling web search, system tasks, and conversational responses through speech recognition and synthesis.",
    stack: ["Python", "Speech Recognition", "NLP"],
  },
  {
    tag: "IOT / TEAM LEAD",
    title: "Smart Irrigation System",
    desc: "Led a 3-member team building an IoT irrigation controller — Arduino soil-moisture sensors paired with a custom Android app to automate water delivery in real time.",
    stack: ["Arduino", "IoT", "MIT App Inventor"],
  },
];

export const SKILLS = [
  { cat: "Frontend Development", items: ["React.js", "TypeScript", "JavaScript ES6+", "Redux", "React Router", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { cat: "APIs & Real-Time", items: ["REST APIs", "WebSockets", "Async/Await", "Fetch API", "Axios"] },
  { cat: "Testing", items: ["Jest", "React Testing Library", "Unit Testing", "75–90% Coverage"] },
  { cat: "DevOps & Version Control", items: ["CI/CD", "Harness", "GitHub", "Bitbucket", "Git", "Jenkins"] },
  { cat: "Languages", items: ["JavaScript", "TypeScript", "Python", "PHP", "C", "C++"] },
  { cat: "Methodologies & Tools", items: ["Agile / Scrum", "Sprint Planning", "Code Review", "Figma", "Photoshop", "MySQL"] },
];

export const EDUCATION = [
  { date: "2021 — 2025", title: "B.Tech, Computer Science Engineering", meta: "Chandigarh Group of Colleges, Landran", score: "CGPA 8.20 / 10" },
  { date: "2021", title: "Intermediate — CBSE (Class XII)", meta: "The SD Vidya School, Ambala Cantt", score: "93.2%" },
];

export const BADGES = [
  { icon: ShieldCheck, title: "Certified Ethical Hacker (CEH)", meta: "EC-Council" },
  { icon: ShieldCheck, title: "HackerRank Certified", meta: "Python, SQL & Problem Solving" },
  { icon: Trophy, title: "Runner-Up, College Hackathon", meta: "May 2023 — full-stack prototype vs. 20+ teams" },
  { icon: Trophy, title: "4th Place, National Science Day", meta: "2022 — recognized college-wide for innovation" },
  { icon: Trophy, title: "State-Level Table Tennis", meta: "Represented Ambala district 4x — 2 Gold, 4 Silver" },
  { icon: Trophy, title: "District Basketball Championship", meta: "1 Gold, 1 Silver — team leadership under pressure" },
];

export const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

export const CONTACT = {
  email: "anandnakul000@gmail.com",
  phone: "+91 89506 64865",
  phoneHref: "+918950664865",
  linkedin: "https://www.linkedin.com/in/nakul-anand-06426421b",
  linkedinLabel: "/in/nakul-anand-06426421b",
  location: "Hyderabad, India",
};
