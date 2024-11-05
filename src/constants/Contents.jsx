// React Icons
import { SiRedux,SiSpring,SiSpringboot,SiDjango,SiMysql,SiMongodb,SiExpress } from "react-icons/si";
import { FaFigma,FaAws,FaGitAlt,FaGithub,FaDocker,FaJava,FaAngular,FaReact,FaNodeJs,FaLinkedin,FaPython } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineKubernetes } from "react-icons/ai";
import { DiRedis, DiJqueryLogo } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

// React Images
import MaheshPisharody2 from "../assets/MaheshPisharody2.jpg";
import InsightBlog from "../assets/ProjectImages/InsightBlog.jpg";
import HealthCareAI from "../assets/ProjectImages/HealthCareAI.jpg";
import SuitStay from "../assets/ProjectImages/SuitStay.jpg";
import QuickRead from "../assets/ProjectImages/QuickRead.jpg";
import DiebeticRetinopathy from "../assets/ProjectImages/DiebeticRetinopathy.jpg";
import FlightDelay from "../assets/ProjectImages/FlightDelay.jpg";
import FrontEnd from "../assets/AboutSVG/FrontEnd.png";
import BackEnd from "../assets/AboutSVG/BackEnd.png";

// Navbar Details
export const NAVIGATION_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
];

// Home Page Details
export const Home_Page = {
    Name: 'Mahesh Pisharody',
    info: 'Full Stack Developer with a flair for machine learning',
    photo: MaheshPisharody2,
    link1: "https://github.com/mahesh349",
    link2: "https://www.linkedin.com/in/mahesh-pisharody/",
    Github_logo: <FaGithub />,
    Linkedin_logo: <FaLinkedin />
};

// About Me Details
export const About = {
    text0: "About Me",
    text1: "I Create Dynamic, Responsive Websites That Blend Creativity With Efficiency",
    text2: "Hello! I'm Mahesh Pisharody, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
    BackImg: BackEnd,
    FrontImg: FrontEnd,
};

// Skills Section
export const Programming_Skills = [
    {
        icon: <FaPython />,
        name: 'Python'
    },
    {
        icon: <FaJava />,
        name: 'Java'
    },
    {
        icon: <IoLogoJavascript />,
        name: 'JavaScript'
    }
];

export const Front_End_Skills = [
    {
        icon: <FaReact />,
        name: 'React'
    },
    {
        icon: <FaAngular />,
        name: 'Angular'
    },
    {
        icon: <RiTailwindCssFill />,
        name: 'Tailwind CSS'
    },
    {
        icon: <DiJqueryLogo />,
        name: 'JQuery'
    },
    {
        icon: <SiRedux />,
        name: 'Redux'
    },
    {
        icon: <FaFigma />,
        name: 'Figma'
    }
];

export const Back_End_Skills =[
    {
        icon: <SiExpress />,
        name: 'Express'
    },
    {
        icon: <FaNodeJs />,
        name: 'Node.js'
    },
    {
        icon: <SiMongodb />,
        name: 'MongoDB'
    },
    {
        icon: <SiMysql />,
        name: 'MySQL'
    },
    {
        icon: <SiDjango />,
        name: 'Django'
    },
    {
        icon: <SiSpring />,
        name: 'Spring Framework'
    },
    {
        icon: <SiSpringboot />,
        name: 'Springboot'
    }
];

export const Devops_Skills = [
    {
        icon: <FaAws />,
        name: 'AWS'
    },
    {
        icon: <FaGitAlt />,
        name: 'Git'
    },
    {
        icon: <FaGithub />,
        name: 'GitHub'
    },
    {
        icon: <FaDocker />,
        name: 'Docker'
    },
    {
        icon: <AiOutlineKubernetes />,
        name: 'Kubernetes'
    },

    {
        icon: <DiRedis />,
        name: 'Redis'
    }
];

// Job Experience Section
export const Experience_Section = [
    {
        CompanyName: 'McKinsey & Company', //'McKinsey & Company'
        TimeLine: 'Jul 2024 - Present',
        Description: {
            Sentence1:'Designed and enhanced over 15 responsive, user-friendly web interfaces using React.js, ensuring that applications are visually engaging and deliver a seamless user experience across various devices and browsers.',
            Sentence2: 'Administered the state of the application using Redux or Context API, optimizing data flow between components, and boosting performance by reducing unnecessary re-renders and memory usage.',
            Sentence3: 'Connected frontend components with backend APIs to render dynamic content, managing data fetching, caching, and error handling for over 20 API endpoints, ensuring a smooth and dependable user experience.',
            Sentence4: 'Executed features like pagination, infinite scrolling, and data filtering/sorting based on API responses, refining the user interface and experience.',
            Sentence5: 'Developed unit tests for React components using Jest and React Testing Library, ensuring the application’s resilience and preventing bugs with new features.'
        }
    },
    {
        CompanyName: 'KPMG India', //KPMG India
        TimeLine: 'Jul 2024 - Present',
        Description: {
            Sentence1:'Designed and enhanced over 15 responsive, user-friendly web interfaces using React.js, ensuring that applications are visually engaging and deliver a seamless user experience across various devices and browsers.',
            Sentence2: 'Administered the state of the application using Redux or Context API, optimizing data flow between components, and boosting performance by reducing unnecessary re-renders and memory usage.',
            Sentence3: 'Connected frontend components with backend APIs to render dynamic content, managing data fetching, caching, and error handling for over 20 API endpoints, ensuring a smooth and dependable user experience.',
            Sentence4: 'Executed features like pagination, infinite scrolling, and data filtering/sorting based on API responses, refining the user interface and experience.',
            Sentence5: 'Developed unit tests for React components using Jest and React Testing Library, ensuring the application’s resilience and preventing bugs with new features.'
        }
    },
    {
        CompanyName: 'Trigent Software Inc', //Trigent Software Inc
        TimeLine: 'Jul 2024 - Present',
        Description: {
            Sentence1:'Designed and enhanced over 15 responsive, user-friendly web interfaces using React.js, ensuring that applications are visually engaging and deliver a seamless user experience across various devices and browsers.',
            Sentence2: 'Administered the state of the application using Redux or Context API, optimizing data flow between components, and boosting performance by reducing unnecessary re-renders and memory usage.',
            Sentence3: 'Connected frontend components with backend APIs to render dynamic content, managing data fetching, caching, and error handling for over 20 API endpoints, ensuring a smooth and dependable user experience.',
            Sentence4: 'Executed features like pagination, infinite scrolling, and data filtering/sorting based on API responses, refining the user interface and experience.',
            Sentence5: 'Developed unit tests for React components using Jest and React Testing Library, ensuring the application’s resilience and preventing bugs with new features.'
        }
    }
];

// Project Section
export const Project_Sections = [
    {
        Name: 'InsightBlog',
        Image: InsightBlog,
        Link: 'https://github.com/mahesh349/InsightBlog.git',
    },
    {
        Name: 'LifeGuardAI',
        Image: HealthCareAI,
        Link: 'https://github.com/mahesh349/LifeGuardAI'
    },
    {
        Name: 'SuitStay',
        Image: SuitStay,
        Link: 'https://github.com/mahesh349/SuitStay'
    },
    {
        Name: 'Quick Read',
        Image: QuickRead,
        Link: 'https://github.com/mahesh349/QuickRead'
    },
    {
        Name: 'Diebetic Retinopathy Detection Using Deep Learning',
        Image: DiebeticRetinopathy,
        Link: 'https://github.com/mahesh349/Diabetic-Retinopathy-Detection-With-AI'
    },
    {
        Name: 'Flight Delay Prediction',
        Image: FlightDelay,
        Link: 'https://github.com/mahesh349/Flight-Delay-Prediction'
    }
];