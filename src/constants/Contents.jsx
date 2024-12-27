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
    { label: "Contact", href: "#contact" }
];

// Home Page Details
export const Home_Page = {
    Name: 'Mahesh Prasad Pisharody',
    info: 'Full Stack Developer with a Flair for Machine Learning',
    photo: MaheshPisharody2,
    link1: "https://github.com/mahesh349",
    link2: "https://www.linkedin.com/in/mahesh-pisharody/",
    Github_logo: <FaGithub />,
    Linkedin_logo: <FaLinkedin />,
    ResumeLink: "https://drive.google.com/file/d/1qQW664-jaFzRdaQe9sHfEJtbW4efgyUb/view?usp=drive_link",
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
        TimeLine: 'Aug 2021 - Jul 2022',
        Description: {
            Sentence1: 'Developed responsive, cross-browser web applications using React.js, with a focus on enhanced user accessibility and performance.',
            Sentence2: 'Built and optimized RESTful APIs, MySQL databases, and AWS integrations to ensure efficient data management, scalability, and cost-effectiveness.',
            Sentence3: 'Implemented secure authentication mechanisms (OAuth, JWT) and actively participated in Agile processes to support collaborative, timely project delivery.',
            Sentence4: 'Managed code quality using GitHub, modern front-end tools (Redux, Webpack), and rigorous testing (Jasmine, Mocha) to maintain high standards in functionality and reliability.',
            Sentence5: 'Leveraged AWS services like RDS and Lambda to enhance application performance, scalability, and reduce operational costs.'
        }
    },
    {
        CompanyName: 'Trigent Software Inc', //Trigent Software Inc
        TimeLine: 'Jul 2020 - Jun 2021',
        Description: {
            Sentence1: 'Developed dynamic web applications with React.js, using reusable components, Redux for state management, and React Router for seamless navigation.',
            Sentence2: 'Created RESTful APIs with Node.js and Express.js, supporting CRUD operations and handling 10+ API requests daily for enhanced application functionality.',
            Sentence3: 'Managed data efficiently with MongoDB, integrating and securing third-party APIs with JWT to handle over 100+ user authentications.',
            Sentence4: 'Actively collaborated in Agile workflows, conducting unit testing with Jest and Mocha to ensure code quality, optimize performance, and meet project deadlines.',
            Sentence5: 'Enhanced application scalability and performance through efficient data handling, third-party API integrations, and rigorous testing.'
        }
    }
];

// Project Section
export const Project_Sections = [
    {
        Name: 'InsightBlog',
        Image: InsightBlog,
        About: "Built a user-centric blogging platform using JavaScript, MongoDB, Express.js, Node.js, and React.js, allowing users to create accounts, manage posts with articles, images, and videos. Integrated machine learning for content recommendations, comment sentiment analysis, spam detection, and article summarization. Secured platform with JWT authentication and bcrypt for safe user login and data protection.",
        Tech: ['React','Express.js','MongoDB','Firebase','Redux','Machine Learning Algorithms','Data Analysis','Flask','Python']
    },
    {
        Name: 'LifeGuardAI',
        Image: HealthCareAI,
        About: "Designed and implemented a machine learning-driven healthcare analytics framework in Python, achieving 80% accuracy in heart attack risk prediction. Leveraged Flask for API deployment and integrated a user-friendly interface with React and Node.js, enabling real-time data management and personalized insights for over 10,000 users, significantly enhancing patient-provider interactions.",
        Tech: ['React','Express.js','MongoDB','Firebase','Redux','Machine Learning Algortihms','Data Analysis','Flask','Python']
    },
    {
        Name: 'SuitStay',
        Image: SuitStay,
        About: "Led a team of 4 to develop a hotel management system with Node.js, MongoDB, and Express.js, reducing processing time by 50% and enhancing efficiency. Integrated Firebase and Handlebars, boosting data retrieval by 40% and improving user navigation by 30%. Implemented bcrypt for password hashing and middleware for security, achieving a robust, breach-free system.",
        Tech: ['Node.js','Express.js','MongoDB','Firebase','Redux','Handlebars','Password Hashing']
    },
    {
        Name: 'Quick Read',
        Image: QuickRead,
        About: "Used Python’s Beautiful Soup and Requests to scrape and analyze data from techcrunch.com, increasing audience engagement by 20%. Improved text analysis accuracy by 25% and reduced processing time by 40% through advanced preprocessing techniques like tokenization and lemmatization. Evaluated TF-IDF, LSA, and Textrank algorithms, finding LSA improved F1 scores by 20% and BLEU coherence by 30%.",
        Tech: ['React','Express.js','MongoDB','Natural Language Processing(NLP)','Machine Learning Algorithms','Redux']
    },
    {
        Name: 'Diebetic Retinopathy Detection Using Deep Learning',
        Image: DiebeticRetinopathy,
        About: "Developed a diabetic retinopathy detection application using deep learning with Inception v3, capable of classifying severity levels (No DR, Mild, Moderate, Severe, Proliferative) to aid in early diagnosis. Deployed on the web with Flask, the model provides robust and noise-compatible predictions, aiming to reduce blindness risk through early detection and accurate severity assessment.",
        techSkills: [
            "Deep Learning Algorithms",
            "Computer Vision",
            "Image Classification",
            "Python",
            "TensorFlow or PyTorch",
            "Evaluation Metrics",
            "Flask",
            "Web Deployment",
            "Machine Learning Model Evaluation",
            "Medical Image Analysis"
        ]
    },
    {
        Name: 'Flight Delay Prediction',
        Image: FlightDelay,
        About: "Developed a machine learning model to predict flight delays using Python and scikit-learn, analyzing historical flight data, weather conditions, and airline schedules. Implemented data preprocessing, feature selection, and model evaluation techniques, achieving an accuracy of 85%. Deployed the model using Flask, enabling real-time predictions and assisting airlines in proactive scheduling, reducing delays by 15%.",
        techSkills: [
            "Machine Learning",
            "Python",
            "scikit-learn",
            "Feature Selection",
            "Model Evaluation",
            "Data Analysis",
            "Historical Data Analysis",
            "Weather Data Analysis"
        ]
          
    }
];