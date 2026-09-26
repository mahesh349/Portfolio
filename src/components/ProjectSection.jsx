import PropTypes from "prop-types";
import { Project_Sections } from "../constants/Contents.jsx";
import Reveal from "./NestedComponents/Reveal.jsx";
import SectionHeading from "./NestedComponents/SectionHeading.jsx";
import CodeWindow from "./NestedComponents/CodeWindow.jsx";
import { slugify } from "../constants/theme.js";
import "../assets/Styles/Skills.css";
import { FaGithub, FaFlask } from "react-icons/fa";

function ProjectSection({ isActive }) {
  return (
    <div id="projects" className="px-4 sm:px-10 pb-32">
      <Reveal>
        <SectionHeading eyebrow="05 · projects/" title="Projects" isActive={isActive} />
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Project_Sections.map((item, index) => (
          <Reveal key={item.Name} delay={(index % 3) * 80} className={item.Featured ? "sm:col-span-2 md:col-span-3" : ""}>
            <CodeWindow
              filename={`${slugify(item.Name)}.md`}
              className="hover-lift h-full"
              bodyClassName={`h-full text-left ${isActive ? 'bg-[#1b1d24]' : 'bg-white'}`}
            >
              {/* Project Image or icon fallback for concept projects */}
              {item.Image ? (
                <img src={item.Image} alt={item.Name} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-[#f10350]/20 to-black/40 text-6xl text-[#f10350]">
                  <FaFlask />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h2 className={`${isActive ? 'text-white' : 'text-black'} text-xl font-semibold`}>
                    {item.Name}
                  </h2>
                  {item.Status && (
                    <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-[#f10350]/15 text-[#f10350] whitespace-nowrap">
                      {item.Status}
                    </span>
                  )}
                </div>
                <p className={`${isActive ? 'text-gray-300' : 'text-gray-700'} text-sm mb-4`}>
                  {item.About}
                </p>

                {/* Technologies Used */}
                <div className="mb-4">
                  <h3 className={`${isActive ? 'text-white' : 'text-black'} text-xs uppercase tracking-wide font-semibold mb-2 opacity-70`}>
                    Tech Stack
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {(item.Tech || []).map((tech, i) => (
                      <li key={i} className="text-xs px-2 py-1 rounded-full Border-Custom text-[#f10350]">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {item.GithubLink && (
                  <a
                    href={item.GithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`HoverChange inline-flex items-center gap-2 text-sm font-semibold ${isActive ? 'text-white' : 'text-black'}`}
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
              </div>
            </CodeWindow>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

ProjectSection.propTypes = {
  isActive: PropTypes.bool,
};

export default ProjectSection;
