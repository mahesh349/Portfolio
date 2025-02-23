import PropTypes from "prop-types";
import { About } from '../../constants/Contents';
import "./Custom.css";

const SplitNew = ({ isActive }) => {
  return (
    <div className="h-auto flex flex-col lg:flex-row p-4">
      {/* Frontend Section */}
      <div
        className={`frontend-section rounded-[15px] mb-4 lg:mb-0 lg:mr-4 flex-1 
                    ${isActive ? 'bg-linear-black text-white' : 'bg-linear-white text-black'}
                    shadow-lg p-6 flex flex-col items-center justify-center text-center`}
      >
        <h3 className="text-3xl mb-2">Frontend Development</h3>
        <img src={About.FrontImg} alt="Front End" className="h-48 w-auto lg:h-[20rem] object-cover mb-4" />
        <h2 className="text-3xl mb-4">Crafting Engaging User Experiences</h2>
        <p className="text-justify max-w-lg">
          I’m a full-stack developer passionate about building intuitive and high-performing web applications. 
          On the frontend, I enjoy crafting clean, responsive, and dynamic user interfaces using React.js, Redux, 
          and modern JavaScript frameworks. I focus on creating smooth user experiences with optimized state management, 
          interactive elements, and seamless API integrations. From designing reusable UI components to implementing animations 
          and accessibility best practices, I love bringing ideas to life with code.
        </p>
      </div>

      {/* Backend Section */}
      <div
        className={`backend-section rounded-[15px] flex-1 
                    ${isActive ? 'bg-linear-black text-white' : 'bg-linear-white text-black'}
                    shadow-lg p-6 flex flex-col items-center justify-center text-center`}
      >
        <h3 className="text-3xl mb-2">Backend Development</h3>
        <img src={About.BackImg} alt="Back End" className="h-48 w-auto lg:h-[20rem] object-cover mb-4" />
        <h2 className="text-3xl mb-4">Building Robust and Scalable Backends</h2>
        <p className="text-justify max-w-lg">
          On the backend, I specialize in building scalable and secure APIs using Node.js, 
          Express.js, Java, and Spring Boot. I enjoy working with databases like MongoDB, MySQL, 
          and PostgreSQL, optimizing queries, and ensuring efficient data flow. Whether it&apos;s 
          handling authentication, integrating third-party services, or deploying cloud-based 
          solutions with AWS and Docker, I focus on writing clean, maintainable, and high-performance backend logic.
        </p>
      </div>
    </div>
  );
};

SplitNew.propTypes = {
  isActive: PropTypes.bool,
};

export default SplitNew;
