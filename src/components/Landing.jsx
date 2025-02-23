// import { useEffect, useState } from "react";
// import { Home_Page } from "../constants/Contents.jsx";

// function Landing() {
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const newScale = 1 + scrollY * 0.001;
//       setScale(newScale);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       <div className="relative flex min-h-screen items-end justify-center overflow-hidden" id="hero">
//         <div className="absolute inset-0 z-10">
//           <div className="relative h-full w-full">
//             <img
//               src={Home_Page.photo}
//               alt={Home_Page.Name}
//               style={{ transform: `scale(${scale})`, transition: 'transform 0.1s ease-out' }}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//         <div className={`absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%`}></div>
//         <div className={`text-center z-20 mx-4 max-w-3xl pb-20`}>
//           <h1 className="text-5xl text-white font-semibold uppercase tracking-wide md:text-7xl">
//             {Home_Page.Name}
//           </h1>
//           <p className="pt-2 text-white font-semibold">{Home_Page.info}</p>
//           <ul className="flex justify-center space-x-4 pt-4">
//             <li className="text-white text-3xl">
//               <a href={Home_Page.link1} target="_blank" rel="noopener noreferrer">{Home_Page.Github_logo}</a>
//             </li>
//             <li className="text-white text-3xl">
//               <a href={Home_Page.link2} target="_blank" rel="noopener noreferrer">{Home_Page.Linkedin_logo}</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }



// export default Landing;


import { useEffect, useState } from "react";
import { Home_Page } from "../constants/Contents.jsx";

function Landing() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.001;
      setScale(newScale);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="relative flex min-h-screen items-end justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0 z-10">
          <div className="relative h-full w-full">
            <img
              src={Home_Page.photo}
              alt={Home_Page.Name}
              style={{ transform: `scale(${scale})`, transition: 'transform 0.1s ease-out' }}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className={`absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%`}></div>
        <div className={`text-center z-20 mx-4 max-w-3xl pb-20`}>
          <h1 className="text-5xl text-white font-semibold uppercase tracking-wide md:text-7xl">
            {Home_Page.Name}
          </h1>
          <p className="pt-2 text-white font-semibold">{Home_Page.info}</p>
          <ul className="flex justify-center space-x-4 pt-4">
            <li className="text-white text-3xl">
              <a href={Home_Page.link1} target="_blank" rel="noopener noreferrer">{Home_Page.Github_logo}</a>
            </li>
            <li className="text-white text-3xl">
              <a href={Home_Page.link2} target="_blank" rel="noopener noreferrer">{Home_Page.Linkedin_logo}</a>
            </li>
          </ul>
          {/* Download Resume Button */}
          <div className="pt-6">
            <a 
              href={Home_Page.ResumeLink} // Replace with the actual link to your resume
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#f10350] text-white font-semibold py-2 px-6 rounded-lg transition duration-300 hover:bg-[#d10248]">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
