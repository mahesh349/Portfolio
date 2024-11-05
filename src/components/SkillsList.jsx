import PropTypes from "prop-types";
import { useEffect } from 'react';
import "../assets/Styles/Skills.css";
import { Programming_Skills, Front_End_Skills, Back_End_Skills, Devops_Skills } from '../constants/Contents.jsx';

function SkillsList( {isActive} ) {
  useEffect(() => {
    const skillsSections = document.querySelectorAll('.skill-box');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillsSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      skillsSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div id='skills' className={`px-10 pb-40 mb-10 text-center text-black`}>
      <h1 className={`text-[#f10350] font-thin mb-20 mx-auto pt-4 pb-4 text-5xl sm:mx-10 md:mx-40 lg:mx-80 xl:mx-100 
                    ${isActive ? 'bg-linear-black' : 'bg-linear-white'}
                    ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'} 
                    rounded-[15px]`}>
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Programming Languages Section */}
        <div className={`font-thin skill-box opacity-0 transform translate-y-10 transition duration-700 ease-out p-6 bg-[#212529] rounded-[15px] shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]`}>
          <h1 className="text-[#f10350] pb-4 text-2xl font-semibold mb-4">Programming Languages</h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Programming_Skills.map((items, itemIndex) => (
              <li key={itemIndex} className="text-white flex flex-col items-center HoverChange">
                <div className="text-4xl mb-2">{items.icon}</div>
                <span className="text-lg">{items.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Front End Skills Section */}
        <div className="font-thin skill-box opacity-0 transform translate-y-10 transition duration-700 ease-out p-6 bg-[#212529] rounded-[15px] shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]">
          <h1 className="text-[#f10350] pb-2 text-2xl font-semibold mb-4">Front End Skills</h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Front_End_Skills.map((items, itemIndex) => (
              <li key={itemIndex} className="text-white flex flex-col items-center HoverChange">
                <div className="text-4xl mb-2">{items.icon}</div>
                <span className="text-lg">{items.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back End Skills Section */}
        <div className="font-thin skill-box opacity-0 transform translate-y-10 transition duration-700 ease-out p-6 bg-[#212529] rounded-[15px] shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]">
          <h1 className="text-[#f10350] pb-2 text-2xl font-semibold mb-4">Back End Skills</h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Back_End_Skills.map((items, itemIndex) => (
              <li key={itemIndex} className="text-white flex flex-col items-center HoverChange">
                <div className="text-4xl mb-2">{items.icon}</div>
                <span className="text-lg">{items.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dev Ops Skills Section */}
        <div className="font-thin skill-box opacity-0 transform translate-y-10 transition duration-700 ease-out p-6 bg-[#212529] rounded-[15px] shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]">
          <h1 className="text-[#f10350] pb-2 text-2xl font-semibold mb-4">Dev Ops Skills</h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Devops_Skills.map((items, itemIndex) => (
              <li key={itemIndex} className="text-white flex flex-col items-center HoverChange">
                <div className="text-4xl mb-2">{items.icon}</div>
                <span className="text-lg">{items.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

SkillsList.propTypes = {
  isActive: PropTypes.bool,
}


export default SkillsList;
