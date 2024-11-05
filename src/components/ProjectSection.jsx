import PropTypes from "prop-types";
import { Project_Sections } from "../constants/Contents.jsx";

function ProjectSection( {isActive} ) {
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
                    <a href={item.Link} target="_blank" rel="noopener noreferrer" key={index} className={` overflow-hidden ${isActive ? 'bg-linear-black' : 'bg-linear-white'} rounded-[15px] ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}`}>
                        <img src={item.Image} alt={item.Name} className="w-full h-48 object-cover" />
                        <div className={`p-4 ${isActive ? 'bg-linear-black' : 'bg-linear-white'}`}>
                            <h2 className={`${isActive ? 'text-white' : 'text-black'} text-xl font-semibold`}>{item.Name}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

ProjectSection.propTypes = {
    isActive: PropTypes.bool,
}

export default ProjectSection;
