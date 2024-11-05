// import PropTypes from "prop-types";
// import { useState } from 'react';
// import { About } from '../../constants/Contents';
// import "./Custom.css";

// const SplitNew = ( {isActive} ) => {
//   const [hovered, setHovered] = useState(null); 

//   return (
//     <div className="h-[60vh] flex">
//       {/* Frontend Section */}
//       <div className={`frontend-section rounded-[15px] mr-4 transition-all duration-500 ease-in-out 
//                       ${hovered === 'frontend' ? 'w-full' : hovered === 'backend' ? 'w-0' : 'w-1/2'} 
//                       ${isActive ? 'bg-linear-black' : 'bg-linear-white'}
//                       ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}
//                       flex items-center justify-between overflow-hidden p-6`}
//         onMouseEnter={() => setHovered('frontend')}
//         onMouseLeave={() => setHovered(null)} >
//         {hovered === 'frontend' ? (
//           <>
//             <div className={`w-1/2 slide-in-left`}>
//               <h2 className={`text-3xl mb-4 ${isActive ? 'text-white' : 'text-black'}`}>Crafting Engaging User Experiences</h2>
//               <p className={`${isActive ? 'text-white' : 'text-black'} text-justify`} >
//                 As a Frontend Developer, I’m dedicated to creating visually compelling and responsive web interfaces that provide seamless user experiences. 
//                 Leveraging technologies like React, HTML, CSS, and Redux, I focus on developing intuitive UI components and ensuring cross-browser compatibility. 
//                 My projects reflect a commitment to quality and performance, using techniques like state management, unit testing, and dynamic data rendering to 
//                 ensure reliable, high-performing applications. Through my frontend work, I aim to make every user interaction meaningful and efficient.
//               </p>
//             </div>
//             <img src={About.FrontImg} alt="Front End" className="ml-[2rem] h-[30rem] w-auto image-transition" />
//           </>
//         ) : (
//           <img src={About.FrontImg} alt="Front End" className="ml-[2rem] h-[30rem] image-transition" />
//         )}
//       </div>

//       {/* Backend Section */}
//       <div
//         className={`backend-section rounded-[15px] transition-all duration-500 ease-in-out 
//                     ${hovered === 'backend' ? 'w-full' : hovered === 'frontend' ? 'w-0' : 'w-1/2'} 
//                     ${isActive ? 'bg-linear-black' : 'bg-linear-white'} 
//                     ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}
//                     flex items-center justify-between overflow-hidden p-6`}
//         onMouseEnter={() => setHovered('backend')}
//         onMouseLeave={() => setHovered(null)} >
//         {hovered === 'backend' ? (
//           <>
//             <img src={About.BackImg} alt="Back End" className="ml-[4rem] h-[30rem] w-auto image-transition" />
//             <div className="w-1/2 slide-in-right">
//               <h2 className={`text-3xl mb-4 ${isActive ? 'text-white' : 'text-black'}`}>Building Robust and Scalable Backends</h2>
//               <p className={`${isActive ? 'text-white' : 'text-black'} text-justify`} >
//                 In my role as a Backend Developer, I’m skilled in designing and implementing powerful server-side architectures that drive secure and efficient 
//                 data processing. Utilizing tools like Node.js, Express.js, MySQL, and AWS, I work to create scalable, well-structured APIs and manage databases 
//                 with a focus on speed and security. My backend work supports seamless frontend integration and ensures that applications can grow with the demands 
//                 of users. I take pride in building the foundations that make applications reliable, secure, and able to handle complex data interactions.
//               </p>
//             </div>
//           </>
//         ) : (
//           <img src={About.BackImg} alt="Back End" className="ml-[4rem] h-[30rem] image-transition" />
//         )}
//       </div>
//     </div>
//   );
// };

// SplitNew.propTypes = {
//   isActive: PropTypes.bool,
// }

// export default SplitNew;




// import PropTypes from "prop-types";
// import { useState } from 'react';
// import { About } from '../../constants/Contents';
// import "./Custom.css";

// const SplitNew = ( {isActive} ) => {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="h-[60vh] flex">
//       {/* Frontend Section */}
//       <div className={`frontend-section rounded-[15px] mr-4 transition-all duration-500 ease-in-out 
//                       ${hovered === 'frontend' ? 'w-full' : hovered === 'backend' ? 'w-0' : 'w-1/2'} 
//                       ${isActive ? 'bg-linear-black' : 'bg-linear-white'}
//                       ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}
//                       flex items-center justify-center overflow-hidden p-6`}
//         onMouseEnter={() => setHovered('frontend')}
//         onMouseLeave={() => setHovered(null)} >
//         {hovered === 'frontend' ? (
//           <>
//             <div className="w-1/2 slide-in-left">
//               <h2 className={`text-3xl mb-4 ${isActive ? 'text-white' : 'text-black'}`}>Crafting Engaging User Experiences</h2>
//               <p className={`${isActive ? 'text-white' : 'text-black'} text-justify`} >
//                 As a Frontend Developer, I’m dedicated to creating visually compelling and responsive web interfaces that provide seamless user experiences. 
//                 Leveraging technologies like React, HTML, CSS, and Redux, I focus on developing intuitive UI components and ensuring cross-browser compatibility. 
//                 My projects reflect a commitment to quality and performance, using techniques like state management, unit testing, and dynamic data rendering to 
//                 ensure reliable, high-performing applications. Through my frontend work, I aim to make every user interaction meaningful and efficient.
//               </p>
//             </div>
//             <img src={About.FrontImg} alt="Front End" className="ml-[2rem] h-[30rem] w-auto image-transition" />
//           </>
//         ) : (
//           <img src={About.FrontImg} alt="Front End" className="h-[30rem] w-auto image-transition" />
//         )}
//       </div>

//       {/* Backend Section */}
//       <div
//         className={`backend-section rounded-[15px] transition-all duration-500 ease-in-out 
//                     ${hovered === 'backend' ? 'w-full' : hovered === 'frontend' ? 'w-0' : 'w-1/2'} 
//                     ${isActive ? 'bg-linear-black' : 'bg-linear-white'} 
//                     ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}
//                     flex items-center justify-center overflow-hidden p-6`}
//         onMouseEnter={() => setHovered('backend')}
//         onMouseLeave={() => setHovered(null)} >
//         {hovered === 'backend' ? (
//           <>
//             <img src={About.BackImg} alt="Back End" className="h-[30rem] w-auto image-transition" />
//             <div className="w-1/2 slide-in-right">
//               <h2 className={`text-3xl mb-4 ${isActive ? 'text-white' : 'text-black'}`}>Building Robust and Scalable Backends</h2>
//               <p className={`${isActive ? 'text-white' : 'text-black'} text-justify`} >
//                 In my role as a Backend Developer, I’m skilled in designing and implementing powerful server-side architectures that drive secure and efficient 
//                 data processing. Utilizing tools like Node.js, Express.js, MySQL, and AWS, I work to create scalable, well-structured APIs and manage databases 
//                 with a focus on speed and security. My backend work supports seamless frontend integration and ensures that applications can grow with the demands 
//                 of users. I take pride in building the foundations that make applications reliable, secure, and able to handle complex data interactions.
//               </p>
//             </div>
//           </>
//         ) : (
//           <img src={About.BackImg} alt="Back End" className="h-[30rem] w-auto image-transition" />
//         )}
//       </div>
//     </div>
//   );
// };

// SplitNew.propTypes = {
//   isActive: PropTypes.bool,
// }

// export default SplitNew;


import PropTypes from "prop-types";
import { useState } from 'react';
import { About } from '../../constants/Contents';
import "./Custom.css";

const SplitNew = ({ isActive }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="h-[60vh] flex">
      {/* Frontend Section */}
      <div
        className={`frontend-section rounded-[15px] mr-4 transition-all duration-500 ease-in-out 
                    ${hovered === 'frontend' ? 'w-full' : hovered === 'backend' ? 'w-0' : 'w-1/2'} 
                    ${isActive ? 'bg-linear-black' : 'bg-linear-white'}
                    ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}
                    flex items-center justify-center overflow-hidden p-6`}
        onMouseEnter={() => setHovered('frontend')}
        onMouseLeave={() => setHovered(null)}
      >
        {hovered === 'frontend' ? (
          <>
            <div className="w-1/2 slide-in-left">
              <h3 className={`text-[#f10350] text-2xl mb-2 ${isActive ? 'text-white' : 'text-black'}`}>Frontend Developer</h3>
              <h2 className={`text-3xl mb-4 ${isActive ? 'text-white' : 'text-black'}`}>Crafting Engaging User Experiences</h2>
              <p className={`${isActive ? 'text-white' : 'text-black'} text-justify`}>
                As a Frontend Developer, I’m dedicated to creating visually compelling and responsive web interfaces that provide seamless user experiences. 
                Leveraging technologies like React, HTML, CSS, and Redux, I focus on developing intuitive UI components and ensuring cross-browser compatibility. 
                My projects reflect a commitment to quality and performance, using techniques like state management, unit testing, and dynamic data rendering to...
              </p>
            </div>
            <img src={About.FrontImg} alt="Front End" className="ml-[2rem] h-[30rem] w-auto image-transition" />
          </>
        ) : (
          <>
            <h3 className={`text-2xl mb-2 ${isActive ? 'text-white' : 'text-black'}`}>Frontend Developer</h3>
            <img src={About.FrontImg} alt="Front End" className="ml-[2rem] h-[30rem] image-transition" />
          </>
        )}
      </div>

      {/* Backend Section */}
      <div
        className={`backend-section rounded-[15px] transition-all duration-500 ease-in-out 
                    ${hovered === 'backend' ? 'w-full' : hovered === 'frontend' ? 'w-0' : 'w-1/2'} 
                    ${isActive ? 'bg-linear-black' : 'bg-linear-white'} 
                    ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}
                    flex items-center justify-center overflow-hidden p-6`}
        onMouseEnter={() => setHovered('backend')}
        onMouseLeave={() => setHovered(null)}
      >
        {hovered === 'backend' ? (
          <>
            <img src={About.BackImg} alt="Back End" className="ml-[4rem] h-[30rem] w-auto image-transition" />
            <div className="w-1/2 slide-in-right">
              <h3 className={`text-2xl mb-2 ${isActive ? 'text-white' : 'text-black'}`}>Backend Developer</h3>
              <h2 className={`text-3xl mb-4 ${isActive ? 'text-white' : 'text-black'}`}>Building Robust and Scalable Backends</h2>
              <p className={`${isActive ? 'text-white' : 'text-black'} text-justify`}>
                In my role as a Backend Developer, I’m skilled in designing and implementing powerful server-side architectures that drive secure and efficient 
                data processing. Utilizing tools like Node.js, Express.js, MySQL, and AWS, I work to create scalable, well-structured APIs and manage databases 
                with a focus on speed and security. My backend work supports seamless frontend integration and ensures that applications can grow with the demands...
              </p>
            </div>
          </>
        ) : (
          <>
            <img src={About.BackImg} alt="Back End" className="ml-[4rem] h-[30rem] image-transition" />
            <h3 className={`text-2xl mb-2 ${isActive ? 'text-white' : 'text-black'}`}>Backend Developer</h3>
          </>
        )}
      </div>
    </div>
  );
};

SplitNew.propTypes = {
  isActive: PropTypes.bool,
}

export default SplitNew;
