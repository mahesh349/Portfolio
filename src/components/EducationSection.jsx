import PropTypes from "prop-types";
import { Education_Section } from "../constants/Contents";
import Reveal from "./NestedComponents/Reveal.jsx";
import SectionHeading from "./NestedComponents/SectionHeading.jsx";
import { cardClass } from "../constants/theme.js";
import { FaGraduationCap } from "react-icons/fa";

function EducationSection({ isActive }) {
  return (
    <div id="education" className="px-4 sm:px-10 pb-32">
      <Reveal>
        <SectionHeading eyebrow="04 · education.md" title="Education" isActive={isActive} />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {Education_Section.map((edu, index) => (
          <Reveal key={edu.School} delay={index * 80}>
            <div className={cardClass(isActive, "h-full text-left p-6 md:p-8 rounded-xl")}>
              <div className="flex items-start gap-4">
                <span className="text-3xl text-[#f10350] shrink-0">
                  <FaGraduationCap />
                </span>
                <div>
                  <h2 className="text-[#f10350] font-semibold text-xl">{edu.School}</h2>
                  <p className={`${isActive ? 'text-gray-300' : 'text-gray-600'} font-medium`}>{edu.Degree}</p>
                  <p className={`${isActive ? 'text-gray-400' : 'text-gray-500'} text-sm mb-3 font-mono`}>
                    {edu.Location} &middot; {edu.TimeLine}
                  </p>
                  {edu.Details && (
                    <p className={`${isActive ? 'text-gray-300' : 'text-gray-700'} text-sm font-thin`}>
                      {edu.Details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

EducationSection.propTypes = {
  isActive: PropTypes.bool,
};

export default EducationSection;
