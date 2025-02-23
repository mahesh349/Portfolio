// React Icons
import { SiRedux,SiSpring,SiSpringboot,SiMysql,SiMongodb,SiExpress,SiJest,SiGraphql,SiFlask,SiPostgresql } from "react-icons/si";
import { FaAws,FaGitAlt,FaGithub,FaDocker,FaJava,FaReact,FaNodeJs,FaLinkedin,FaPython } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineKubernetes } from "react-icons/ai";
import { DiRedis, DiJqueryLogo,DiJenkins } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";

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
    Name: 'Mahesh Pisharody',
    info: 'Full Stack Developer with a Flair for Machine Learning',
    photo: MaheshPisharody2,
    link1: "https://github.com/mahesh349",
    link2: "https://www.linkedin.com/in/mahesh-pisharody/",
    Github_logo: <FaGithub />,
    Linkedin_logo: <FaLinkedin />,
    // ResumeLink: "https://drive.google.com/file/d/1qQW664-jaFzRdaQe9sHfEJtbW4efgyUb/view?usp=drive_link",
    ResumeLink: "https://drive.google.com/file/d/1LZujQooe299kGoh8lvWkd4qg8PkeCuuI/view?usp=drive_link",
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
        icon: <FaJava />,
        name: 'Java'
    },
    {
        icon: <IoLogoJavascript />,
        name: 'JavaScript'
    },
    {
        icon: <FaPython />,
        name: 'Python'
    },
    {
        icon: <PiFileSql />,
        name: 'SQL'
    }
];

export const Front_End_Skills = [
    {
        icon: <FaReact />,
        name: 'React'
    },
    {
        icon: <SiRedux />,
        name: 'Redux'
    },
    {
        icon: <SiJest />,
        name: 'Jest'
    },
    {
        icon: <SiGraphql />,
        name: 'GraphQL'
    },
    {
        icon: <DiJqueryLogo />,
        name: 'JQuery'
    },
    {
        icon: <RiTailwindCssFill />,
        name: 'Tailwind CSS'
    }
];

export const Back_End_Skills =[
    {
        icon: <FaNodeJs />,
        name: 'Node.js'
    },
    {
        icon: <SiExpress />,
        name: 'Express'
    },
    {
        icon: <SiSpringboot />,
        name: 'Springboot'
    },
    {
        icon: <SiSpring />,
        name: 'Spring Framework'
    },
    {
        icon: <SiFlask />,
        name: 'Flask'
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
        icon: <SiPostgresql />,
        name: 'PostgreSQL'
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
    },
    {
        icon: <DiJenkins />,
        name: 'Jenkins'
    }
];

// Job Experience Section
export const Experience_Section = [
    {
        CompanyName: 'McKinsey & Company', //'McKinsey & Company'
        TimeLine: 'Jul 2024 - Present',
        Description: {
            Sentence1: 'Designed over 15 interactive web interfaces using React.js, ensuring smooth accessibility and engagement across multiple devices and screen sizes.',
            Sentence2: 'Enhanced state management with Redux, eliminating redundant renders and maximizing application efficiency for better resource allocation.',
            Sentence3: 'Developed seamless integration between frontend components and backend APIs, dynamically displaying data from 20+ endpoints while implementing caching mechanisms.',
            Sentence4: 'Introduced pagination, infinite scrolling, and real-time filtering, enriching user interactions and creating a more intuitive interface.',
            Sentence5: 'Strengthened code reliability by crafting comprehensive unit tests with Jest and React Testing Library, mitigating regression issues.',
            Sentence6: 'Minimized API latency by 30%, refining data-fetching approaches and optimizing state transitions for quicker responses.',
            Sentence7: 'Elevated content rendering strategies, contributing to a 20% boost in user engagement across enterprise platforms.'
        }
    },
    {
        CompanyName: 'KPMG India', //KPMG India
        TimeLine: 'Aug 2021 - Jul 2022',
        Description: {
            Sentence1: 'Developed financial applications using React.js and JavaScript, ensuring compliance with industry standards and seamless compatibility across browsers.',
            Sentence2: 'Built RESTful APIs using Java & Spring Framework, optimizing backend communication pipelines and decreasing data retrieval times by 30% through structured queries.',
            Sentence3: 'Architected secure MySQL databases, incorporating AWS RDS for managed storage solutions and AWS Lambda for cost-efficient serverless execution.',
            Sentence4: 'Applied advanced authentication protocols with OAuth and JWT, reinforcing access control and preventing unauthorized data exposure.',
            Sentence5: 'Conducted rigorous unit and integration testing with Jasmine and Mocha, leveraging Webpack and GitHub for structured code management.',
            Sentence6: 'Revamped database queries to enhance transaction speed, increasing backend efficiency by 25% for large-scale data processing.',
            Sentence7: 'Streamlined architectural design, boosting reliability and ensuring adherence to financial security policies.'
        }
    },
    {
        CompanyName: 'Trigent Software Inc', //Trigent Software Inc
        TimeLine: 'Jul 2020 - Jun 2021',
        Description: {
            Sentence1: 'Created modular, scalable web applications using React.js, developing reusable UI components and ensuring effortless navigation with React Router.',
            Sentence2: 'Engineered RESTful APIs using Node.js and Express.js, handling asynchronous requests efficiently for 10,000+ monthly transactions.',
            Sentence3: 'Optimized MongoDB schema structures, streamlining data retrieval processes and ensuring smooth interactions within the system.',
            Sentence4: 'Secured external API integrations, successfully incorporating 5+ third-party services and authenticating over 100,000+ users via JWT.',
            Sentence5: 'Participated in Agile development workflows, engaging in iterative sprints and adapting to evolving feature requirements.',
            Sentence6: 'Strengthened application stability through meticulous unit testing using Jest and Mocha, proactively addressing potential bottlenecks.',
            Sentence7: 'Enhanced user experience by refining interface aesthetics and accelerating API responses, increasing user retention by 30%.'
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