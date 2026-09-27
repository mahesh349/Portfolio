import type {
  NavigationLink, HomePage, ContactInfo, AboutContent, Skill,
  SkillCategory, Experience, Education, Project,
} from "../types";

// React Icons
import {
  SiRedux, SiSpring, SiSpringboot, SiSpringsecurity, SiMysql, SiMongodb, SiExpress,
  SiJest, SiPostgresql, SiTypescript, SiKotlin, SiAmazon, SiAmazondynamodb,
  SiAmazons3, SiAmazonsqs, SiAmazonecs, SiFirebase, SiJsonwebtokens, SiOpenid,
  SiPostman, SiApachemaven, SiJunit5, SiScrumalliance, SiJira, SiAxios
} from "react-icons/si";
import {
  FaAws, FaGitAlt, FaGithub, FaDocker, FaJava, FaReact, FaNodeJs, FaLinkedin,
  FaPython, FaJenkins, FaHtml5, FaCss3Alt, FaFlask, FaEye, FaProjectDiagram,
  FaDatabase, FaNetworkWired, FaUsers, FaSyncAlt, FaEnvelope, FaMapMarkerAlt
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiRedis } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";
import { TbRobot, TbApi, TbRoute } from "react-icons/tb";
import { BsChatSquareText, BsDiagram3 } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { MdLock } from "react-icons/md";

// React Images
import MaheshPisharody2 from "../assets/MaheshPisharody2.jpg";
import Migration from "../assets/ProjectImages/Migration.jpg";
import InsightBlog from "../assets/ProjectImages/InsightBlog.jpg";
import HealthCareAI from "../assets/ProjectImages/HealthCareAI.jpg";
import QuickRead from "../assets/ProjectImages/QuickRead.jpg";
import DiebeticRetinopathy from "../assets/ProjectImages/DiebeticRetinopathy.jpg";
import FrontEnd from "../assets/AboutSVG/FrontEnd.png";
import BackEnd from "../assets/AboutSVG/BackEnd.png";

// Navbar Details
export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

// Home Page Details
export const Home_Page: HomePage = {
  Name: "Mahesh Pisharody",
  info: "Software Development Engineer building full-stack platforms and LLM agent systems",
  roles: ["Software Development Engineer", "Agentic AI Engineer", "Full-Stack Engineer"],
  location: "Seattle, WA",
  availability: "Open to new opportunities",
  photo: MaheshPisharody2,
  link1: "https://github.com/mahesh349",
  link2: "https://www.linkedin.com/in/mahesh-pisharody/",
  Github_logo: <FaGithub />,
  Linkedin_logo: <FaLinkedin />,
  ResumeLink: "https://drive.google.com/file/d/1v_XNGtMQNkhZ05UgWtyU4lzJrTBavdzd/view?usp=sharing",
};

// Contact Details
export const Contact_Info: ContactInfo = {
  fullName: "Mahesh Prasad Pisharody",
  phone: "+1 (551)-349-2626",
  email: "maheshpisharody4@gmail.com",
  location: "Seattle, WA",
  Mail_logo: <FaEnvelope />,
  Location_logo: <FaMapMarkerAlt />,
};

// About Me Details
export const About: AboutContent = {
  text0: "About Me",
  text1: "Software Development Engineer with 3 years of experience shipping full-stack platforms and, most recently, LLM agent systems on AWS.",
  text2: "Hello! I'm Mahesh Pisharody, a Software Development Engineer currently building AI agent systems at Amazon Web Services — from Bedrock-backed conversational agents and retrieval optimization to multi-tenant encryption and fair-scheduling infrastructure. Before AWS, I built React and Spring Boot platforms at McKinsey & Company and Trigent Software. I hold a Master's in Computer Science from Stevens Institute of Technology, and I care about the same things end to end: clean API design, dependable data models, and interfaces people actually enjoy using. Outside of work, I'm an avid explorer of new cultures and cuisines, and I stay curious about wherever software engineering and AI are headed next.",
  BackImg: BackEnd,
  FrontImg: FrontEnd,
};

// Skills Section — grouped to match current resume categories
export const Programming_Skills: Skill[] = [
  { icon: <FaJava />, name: "Java" },
  { icon: <SiKotlin />, name: "Kotlin" },
  { icon: <FaPython />, name: "Python" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <PiFileSql />, name: "SQL" },
];

export const AI_Agentic_Skills: Skill[] = [
  { icon: <TbRobot />, name: "LLM Agents" },
  { icon: <BsChatSquareText />, name: "Prompt Engineering" },
  { icon: <SiAmazon />, name: "Amazon Bedrock" },
  { icon: <GiBrain />, name: "Bedrock AgentCore" },
  { icon: <BsDiagram3 />, name: "Strands Agents SDK" },
];

export const Front_End_Skills: Skill[] = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <TbRoute />, name: "React Router" },
  { icon: <SiAxios />, name: "Axios" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
];

export const Back_End_Skills: Skill[] = [
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <SiSpringsecurity />, name: "Spring Security" },
  { icon: <SiSpring />, name: "Spring Data JPA" },
  { icon: <FaDatabase />, name: "Hibernate" },
  { icon: <TbApi />, name: "RESTful APIs" },
  { icon: <SiOpenid />, name: "OAuth 2.0 / OIDC" },
  { icon: <SiJsonwebtokens />, name: "JWT" },
  { icon: <FaNetworkWired />, name: "Distributed Systems" },
  { icon: <FaUsers />, name: "Multi-Tenant Architecture" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
];

export const Database_Skills: Skill[] = [
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <DiRedis />, name: "Redis" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiAmazondynamodb />, name: "AWS DynamoDB" },
];

export const Devops_Skills: Skill[] = [
  { icon: <FaAws />, name: "AWS Lambda" },
  { icon: <SiAmazons3 />, name: "Amazon S3" },
  { icon: <SiAmazonsqs />, name: "Amazon SQS" },
  { icon: <MdLock />, name: "AWS KMS" },
  { icon: <FaEye />, name: "AWS CloudTrail" },
  { icon: <FaProjectDiagram />, name: "Step Functions" },
  { icon: <SiAmazonecs />, name: "ECS Fargate" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaJenkins />, name: "Jenkins" },
];

export const Testing_Tools_Skills: Skill[] = [
  { icon: <SiJunit5 />, name: "JUnit" },
  { icon: <FaFlask />, name: "Mockito" },
  { icon: <SiJest />, name: "Jest" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiApachemaven />, name: "Maven" },
];

export const Methodology_Skills: Skill[] = [
  { icon: <SiScrumalliance />, name: "Agile (Scrum)" },
  { icon: <FaSyncAlt />, name: "SDLC" },
  { icon: <SiJira />, name: "Jira" },
];

export const Skills_Categories: SkillCategory[] = [
  { title: "Programming Languages", items: Programming_Skills },
  { title: "AI & Agentic Systems", items: AI_Agentic_Skills },
  { title: "Front-End", items: Front_End_Skills },
  { title: "Back-End", items: Back_End_Skills },
  { title: "Databases", items: Database_Skills },
  { title: "Cloud & DevOps", items: Devops_Skills },
  { title: "Testing & Tools", items: Testing_Tools_Skills },
  { title: "Methodologies", items: Methodology_Skills },
];

// Job Experience Section
export const Experience_Section: Experience[] = [
  {
    CompanyName: "Amazon Web Services (AWS)",
    Role: "Software Development Engineer",
    Location: "Seattle, WA",
    TimeLine: "Sep 2025 – Present",
    Bullets: [
      "Refined prompts and tool gating for an Amazon Bedrock supply-chain recommendation agent, turning vague forecast analyses into specific, actionable forecast overrides; validated changes with end-to-end scenarios and LLM-as-judge evaluations.",
      "Diagnosed repeated knowledge-base calls in a contract question-answering agent and redesigned retrieval-tool guidance to switch data sources on failed searches, turning a reported wrong answer in 61 seconds into a correct answer in 20 seconds.",
      "Traced an agent-framework control instruction through memory persistence and chat replay, then filtered internal messages from both write and read paths — the issue had affected 362 of 2,301 analyzed chat sessions.",
      "Designed and shipped customer-managed-key encryption across recommendation storage, agent workflows, and conversational-agent responses, with per-tenant key selection and integration tests validating encrypted data at rest.",
      "Implemented event routing, DynamoDB write semantics, and tenant-priority configuration for a fair scheduling system that dispatches multi-tenant recommendation workflows to Amazon Bedrock.",
      "Built a shared AWS AppConfig platform for tenant-scoped agent features and prompts, with gradual rollout, CloudWatch monitoring, and automatic rollback across multiple AWS regions.",
    ],
  },
  {
    CompanyName: "McKinsey & Company",
    Role: "Software Engineer",
    Location: "Jersey City, NJ",
    TimeLine: "Jul 2024 – Aug 2025",
    Bullets: [
      "Delivered 15+ React interfaces for a client-engagement platform, including dashboards, approval queues, and reporting views, with reusable components adopted across the application.",
      "Structured 20+ RESTful Java and Spring Boot endpoints with layered controllers, services, and DTOs, enforcing validation and centralized exception handling.",
      "Resolved a slow dashboard endpoint by replacing repeated per-engagement queries with a targeted projection and Redis caching, cutting p95 response time by about 30%.",
      "Standardized a deliverable-approval workflow across React and Spring Boot, enforcing role-based authorization on both the client and server and recording every status change to an audit-history table.",
      "Created a reusable React component library spanning tables, filters, status badges, confirmation dialogs, and pagination controls, adopted consistently across 15+ interfaces.",
      "Introduced server-side pagination, row virtualization, and debounced cancellable search requests, eliminating redundant backend calls and stale-response overwrites on the engagement search screen.",
    ],
  },
  {
    CompanyName: "Trigent Software",
    Role: "Java Developer",
    Location: "India",
    TimeLine: "Jul 2020 – Jun 2021",
    Bullets: [
      "Developed responsive web application features using React.js and Redux, building reusable components, role-aware navigation, validated forms, and dashboard views for an enterprise onboarding platform.",
      "Designed and implemented 10+ RESTful API endpoints using Java, Spring Boot, and Spring Data JPA, supporting onboarding creation, updates, task completion, approval workflows, filtering, pagination, and audit-history retrieval.",
      "Developed and optimized MySQL database structures, JPA entity relationships, queries, constraints, and indexes to support reliable storage and efficient retrieval of user, onboarding, checklist, and approval information.",
      "Integrated OAuth 2.0/OpenID Connect authentication and JWT-based stateless authorization using Spring Security, enforcing role-based access across protected UI functionality and backend endpoints for 100+ application users.",
      "Collaborated with frontend developers, QA engineers, business analysts, and the technical lead to define API contracts, resolve integration issues, support user-acceptance testing, and deliver production-ready features through Git- and Jenkins-based CI/CD workflows.",
    ],
  },
];

// Education Section
export const Education_Section: Education[] = [
  {
    School: "Stevens Institute of Technology",
    Location: "Hoboken, NJ",
    Degree: "Master of Science in Computer Science",
    TimeLine: "Aug 2022 – May 2024",
    Details:
      "Coursework: Deep Learning, Machine Learning Fundamentals & Applications, Web Mining, Web Programming, Knowledge Discovery and Data Mining, Introduction to R, Data Structures and Algorithms, Agile Methods for Software Development, Financial Lab: Database Design.",
  },
  {
    School: "University of Pune",
    Location: "Pune, India",
    Degree: "Bachelor of Computer Application",
    TimeLine: "Jun 2018 – May 2021",
    Details: "",
  },
];

// Project Section
export const Project_Sections: Project[] = [
  {
    Name: "MigrationPilot",
    Image: Migration,
    About:
      "An agentic software-modernization platform: one coordinator agent plus three specialist agents that analyze a Java repository, plan a framework upgrade (e.g. Java 11 → 21, Spring Boot 2 → 3, AWS SDK v1 → v2), and apply incremental patches — autonomously diagnosing and repairing compilation and test failures inside an isolated sandbox. AWS Step Functions manages durable workflow state with human-approval gates, an isolated Amazon ECS Fargate build sandbox runs the changes safely, and documentation-grounded planning keeps recommendations grounded in the official migration guides instead of relying on model memory.",
    Tech: ["Kotlin", "Spring Boot", "Python", "LangGraph", "Amazon Bedrock", "AWS Step Functions", "ECS Fargate", "AWS CDK"],
  },
  {
    Name: "LifeGuardAI",
    Image: HealthCareAI,
    GithubLink: "https://github.com/mahesh349/LifeGuardAI",
    About:
      "A full-stack cardiovascular-risk application: a Flask service serves an SVM classifier (selected after evaluating eight scikit-learn classifiers and a PyTorch neural network with cross-validation on roughly 67,000 patient records) that flags elevated risk above a 0.8 probability threshold. React doctor and patient dashboards run on Firebase Authentication, backed by Express and MongoDB REST APIs tested with Jest and Supertest.",
    Tech: ["React", "Express.js", "MongoDB", "Firebase Auth", "Flask", "Python", "scikit-learn", "PyTorch"],
  },
  {
    Name: "InsightBlog",
    Image: InsightBlog,
    About:
      "A user-centric blogging platform built with JavaScript, MongoDB, Express.js, Node.js, and React.js, letting users create accounts and manage posts with articles, images, and videos. Integrated machine learning for content recommendations, comment sentiment analysis, spam detection, and article summarization, secured with JWT authentication and bcrypt password hashing.",
    Tech: ["React", "Express.js", "MongoDB", "Redux", "Machine Learning", "Flask", "Python"],
  },
  {
    Name: "Quick Read",
    Image: QuickRead,
    GithubLink: "https://github.com/mahesh349/QuickRead",
    About:
      "Used Python's Beautiful Soup and Requests to scrape and analyze articles from a news site, then compared TF-IDF, LSA, and TextRank summarization algorithms with tokenization and lemmatization preprocessing — LSA improved F1 scores and BLEU coherence over the other two approaches.",
    Tech: ["Python", "Natural Language Processing", "React", "Express.js", "MongoDB"],
  },
  {
    Name: "Diabetic Retinopathy Detection",
    Image: DiebeticRetinopathy,
    About:
      "A deep-learning application using an Inception v3 model to classify diabetic retinopathy severity (No DR, Mild, Moderate, Severe, Proliferative) from retinal images, deployed on the web with Flask to support earlier screening and diagnosis.",
    Tech: ["Deep Learning", "Computer Vision", "Python", "TensorFlow/PyTorch", "Flask"],
  },
];
