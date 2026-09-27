import type { ThemeProps } from "../../types";
import { About } from '../../constants/Contents';
import CodeWindow from "./CodeWindow";
import "./Custom.css";

const SplitNew = ({ isActive }: ThemeProps) => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 p-4">
      <CodeWindow
        filename="frontend.tsx"
        className="frontend-section flex-1"
        bodyClassName={`p-6 flex flex-col items-center text-center ${isActive ? 'bg-[#1b1d24] text-white' : 'bg-white text-black'}`}
      >
        <h3 className="text-2xl mb-2">Frontend Development</h3>
        <img src={About.FrontImg} alt="Front End" className="h-40 w-auto lg:h-64 object-cover mb-4" />
        <h4 className="text-xl mb-3 text-[#f10350] font-semibold">Crafting Engaging User Experiences</h4>
        <p className="text-justify max-w-lg text-sm sm:text-base">
          On the frontend, I enjoy crafting clean, responsive, and dynamic user interfaces using React.js, Redux,
          and modern JavaScript frameworks. I focus on creating smooth user experiences with optimized state management,
          interactive elements, and seamless API integrations. From designing reusable UI components to implementing animations
          and accessibility best practices, I love bringing ideas to life with code.
        </p>
      </CodeWindow>

      <CodeWindow
        filename="backend.ts"
        className="backend-section flex-1"
        bodyClassName={`p-6 flex flex-col items-center text-center ${isActive ? 'bg-[#1b1d24] text-white' : 'bg-white text-black'}`}
      >
        <h3 className="text-2xl mb-2">Backend Development</h3>
        <img src={About.BackImg} alt="Back End" className="h-40 w-auto lg:h-64 object-cover mb-4" />
        <h4 className="text-xl mb-3 text-[#f10350] font-semibold">Building Robust and Scalable Backends</h4>
        <p className="text-justify max-w-lg text-sm sm:text-base">
          On the backend, I specialize in building scalable and secure APIs using Java and Spring Boot,
          Node.js, and Express.js, working with databases like PostgreSQL, MySQL, MongoDB, and DynamoDB.
          Most recently at AWS, I&apos;ve been building LLM agent systems on Amazon Bedrock and AgentCore —
          from retrieval and prompt design to multi-tenant encryption, fair-scheduling, and observability —
          while keeping the same focus on clean, maintainable, and high-performance backend logic.
        </p>
      </CodeWindow>
    </div>
  );
};

export default SplitNew;
