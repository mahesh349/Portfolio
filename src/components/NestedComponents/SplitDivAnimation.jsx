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
        <img src={About.FrontImg} alt="Front End" className="h-48 w-auto lg:h-[20rem] object-cover mb-4" />
        <h3 className="text-2xl mb-2">Frontend Developer</h3>
        <h2 className="text-3xl mb-4">Crafting Engaging User Experiences</h2>
        <p className="text-justify max-w-lg">
          As a Frontend Developer, I’m dedicated to creating visually compelling and responsive web interfaces that provide seamless user experiences.
          Leveraging technologies like React, HTML, CSS, and Redux, I focus on developing intuitive UI components and ensuring cross-browser compatibility.
          My projects reflect a commitment to quality and performance, using techniques like state management, unit testing, and dynamic data rendering to...
        </p>
      </div>

      {/* Backend Section */}
      <div
        className={`backend-section rounded-[15px] flex-1 
                    ${isActive ? 'bg-linear-black text-white' : 'bg-linear-white text-black'}
                    shadow-lg p-6 flex flex-col items-center justify-center text-center`}
      >
        <img src={About.BackImg} alt="Back End" className="h-48 w-auto lg:h-[20rem] object-cover mb-4" />
        <h3 className="text-2xl mb-2">Backend Developer</h3>
        <h2 className="text-3xl mb-4">Building Robust and Scalable Backends</h2>
        <p className="text-justify max-w-lg">
          In my role as a Backend Developer, I’m skilled in designing and implementing powerful server-side architectures that drive secure and efficient
          data processing. Utilizing tools like Node.js, Express.js, MySQL, and AWS, I work to create scalable, well-structured APIs and manage databases
          with a focus on speed and security. My backend work supports seamless frontend integration and ensures that applications can grow with the demands...
        </p>
      </div>
    </div>
  );
};

SplitNew.propTypes = {
  isActive: PropTypes.bool,
};

export default SplitNew;
