import PropTypes from "prop-types";
import "../assets/Styles/Skills.css";
import { Skills_Categories } from "../constants/Contents.jsx";
import Reveal from "./NestedComponents/Reveal.jsx";
import SectionHeading from "./NestedComponents/SectionHeading.jsx";
import { cardClass } from "../constants/theme.js";

function SkillsList({ isActive }) {
  return (
    <div id="skills" className="px-4 sm:px-10 pb-32">
      <Reveal>
        <SectionHeading eyebrow="02 · skills.json" title="Skills" isActive={isActive} />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto grid-flow-row-dense">
        {Skills_Categories.map((category, catIndex) => (
          <Reveal key={category.title} delay={catIndex * 60} className={category.items.length > 8 ? "sm:col-span-2" : ""}>
            <div className={cardClass(isActive, "font-thin h-full p-6 rounded-xl text-left")}>
              <h2 className="text-[#f10350] text-lg font-semibold mb-4 uppercase tracking-wide">
                {category.title}
              </h2>
              <ul className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className={`HoverChange flex items-center gap-2 px-3 py-2 rounded-full text-sm
                                ${isActive ? 'bg-white/5 text-white' : 'bg-black/5 text-black'}`}
                  >
                    <span className="text-lg text-[#f10350]">{item.icon}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

SkillsList.propTypes = {
  isActive: PropTypes.bool,
};

export default SkillsList;
