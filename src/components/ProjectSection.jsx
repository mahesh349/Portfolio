// import PropTypes from "prop-types";
// import { Project_Sections } from "../constants/Contents.jsx";
// import "../assets/Styles/Skills.css";

// function ProjectSection({ isActive }) {
//     return (
//         <div id="projects" className="min-h-screen p-10 text-center">
//             <h1 className={`text-[#f10350] mb-20 mx-auto pt-4 pb-4 text-5xl sm:mx-10 md:mx-40 lg:mx-80 xl:mx-100 
//                             ${isActive ? 'bg-linear-black' : 'bg-linear-white'}
//                             ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}  
//                             rounded-[15px]`}>
//                 Projects
//             </h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
//                 {Project_Sections.map((item, index) => (
//                     <div 
//                         key={index} 
//                         className={`overflow-hidden ${isActive ? 'bg-linear-black' : 'bg-linear-white'} rounded-[15px] ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}`}
//                     >
//                         {/* Project Image */}
//                         <img src={item.Image} alt={item.Name} className="w-full h-48 object-cover" />

//                         {/* Project Content */}
//                         <div className={`p-6 ${isActive ? 'bg-linear-black' : 'bg-linear-white'}`}>
//                             <h2 className={`${isActive ? 'text-white' : 'text-black'} text-xl font-semibold mb-2`}>
//                                 {item.Name}
//                             </h2>
//                             <p className={`${isActive ? 'text-gray-300' : 'text-gray-700'} text-sm mb-4`}>
//                                 {item.About}
//                             </p>

//                             {/* Technologies Used */}
//                             <div className="mb-4">
//                                 <h3 className={`${isActive ? 'text-white' : 'text-black'} text-lg font-semibold mb-2`}>
//                                     Technologies Used:
//                                 </h3>
//                                 <ul className="flex flex-wrap gap-2">
//                                     {/* 7 Dummy Technologies for each card */}
//                                     {item.Tech.map((tech, i) => (
//                                         <li key={i} className="text-xs px-2 py-1 rounded-full Border-Custom text-[#f10350]">
//                                             {tech}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             {/* GitHub Button */}
//                             {/* <a 
//                                 href={item.Link} 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="inline-block px-4 py-2 mt-4 text-sm font-semibold rounded Border-Custom text-[#f10350] transform hover:scale-110 transition"
//                             >
//                                 View on GitHub
//                             </a> */}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// ProjectSection.propTypes = {
//     isActive: PropTypes.bool,
// }

// export default ProjectSection;

import PropTypes from "prop-types";
import { Project_Sections } from "../constants/Contents.jsx";
import "../assets/Styles/Skills.css";

function ProjectSection({ isActive }) {
    return (
        <div id="projects" className="min-h-screen p-10 text-center">
            <h1 className={`text-[#f10350] mb-20 mx-auto pt-4 pb-4 text-5xl sm:mx-10 md:mx-40 lg:mx-80 xl:mx-100 
                            ${isActive ? 'bg-linear-black' : 'bg-linear-white'}
                            ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}  
                            rounded-[15px]`}>
                Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                {Project_Sections.map((item, index) => (
                    <div 
                        key={index} 
                        className={`overflow-hidden ${isActive ? 'bg-linear-black' : 'bg-linear-white'} rounded-[15px] ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}`}
                    >
                        {/* Project Image */}
                        <img src={item.Image} alt={item.Name} className="w-full h-48 object-cover" />

                        {/* Project Content */}
                        <div className={`p-6 ${isActive ? 'bg-linear-black' : 'bg-linear-white'}`}>
                            <h2 className={`${isActive ? 'text-white' : 'text-black'} text-xl font-semibold mb-2`}>
                                {item.Name}
                            </h2>
                            <p className={`${isActive ? 'text-gray-300' : 'text-gray-700'} text-sm mb-4`}>
                                {item.About}
                            </p>

                            {/* Technologies Used */}
                            <div className="mb-4">
                                <h3 className={`${isActive ? 'text-white' : 'text-black'} text-lg font-semibold mb-2`}>
                                    Technologies Used:
                                </h3>
                                <ul className="flex flex-wrap gap-2">
                                    {/* Conditionally map over techSkills or Tech if it exists */}
                                    {(item.techSkills || item.Tech || []).map((tech, i) => (
                                        <li key={i} className="text-xs px-2 py-1 rounded-full Border-Custom text-[#f10350]">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

ProjectSection.propTypes = {
    isActive: PropTypes.bool,
}

export default ProjectSection;
