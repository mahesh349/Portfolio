import PropTypes from "prop-types";
import { Experience_Section } from "../constants/Contents";

function ExperienceSection( {isActive} ) {
  return (
    <div id="experience" className={`text-center px-4 pb-40 `}>
      <h1 className={`text-[#f10350] font-thin mb-20 mx-auto pt-4 pb-4 text-5xl sm:mx-10 md:mx-40 lg:mx-80 xl:mx-100 
                      ${isActive ? 'bg-linear-black' : 'bg-linear-white'}
                      ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}  
                      rounded-[15px]`}>
        Work Experience
      </h1>
      <div className="space-y-10">
        {Experience_Section.map((items, itemIndex) => {
          const isEven = itemIndex % 2 === 0;
          return (
            <div key={itemIndex} className={`px-4 flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6`}>
              <div className={`${isActive ? 'bg-linear-black' : 'bg-linear-white'} rounded-[15px] ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'} p-6 w-full md:w-1/2`}>
                <h2 className="text-[#f10350] font-semibold text-2xl">{items.CompanyName}</h2>
                <p className={`${isActive ? 'text-white' : 'text-black'} text-sm mb-4 font-thin`}>{items.TimeLine}</p>
                <div className={`${isActive ? 'text-white' : 'text-black'} mt-2 space-y-2 text-justify font-thin`}>
                  {Object.values(items.Description).map((sentence, index) => (
                    <p key={index}>
                      {sentence}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


ExperienceSection.propTypes = {
  isActive: PropTypes.bool,
}


export default ExperienceSection;


