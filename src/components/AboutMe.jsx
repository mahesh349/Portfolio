import PropTypes from 'prop-types';
import { About } from "../constants/Contents";
import SplitNew from "./NestedComponents/SplitDivAnimation.jsx";
import "../assets/Styles/Card3D.css";

function AboutMe({ isActive }) {
  return (
    <div className="relative z-10 text-center pt-40 pb-40 px-4" id="about">
      <h1 className={`text-[#f10350] font-thin mx-auto pt-4 pb-4 text-5xl sm:mx-10 md:mx-40 lg:mx-80 xl:mx-100
                    ${isActive ? 'bg-linear-black' : 'bg-linear-white'}
                    ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}
                    rounded-[15px]`}>
        {About.text0}
      </h1>
      <h1 className={`font-thin text-4xl mt-12 mb-12 ${isActive ? 'text-white' : 'text-black'}`}>
        {About.text1}
      </h1>
      <SplitNew isActive={isActive}/>
    </div>
  );
}

AboutMe.propTypes = {
  isActive: PropTypes.bool,
}

export default AboutMe;
