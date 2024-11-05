import PropTypes from "prop-types";
import { NAVIGATION_LINKS } from "../constants/Contents";
import { Home_Page } from "../constants/Contents"; // Assuming Home_Page has social media links and icons
import MaheshLogo from "../assets/MaheshLogo.png";
import MaheshLogo2 from "../assets/MaheshLogo2.png";

function Contact( {isActive} ) {
  return (
    <div id="contact" className={`rounded ${isActive ? 'bg-linear-black' : 'bg-linear-white'} ${isActive ? 'shadow-[-2px_-2px_25px_rgba(255,255,255,0.2),6px_6px_25px_black]' : 'shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#ffffff]'}  ${isActive ? 'text-white' : 'text-gray-700'} py-12 px-6`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Details */}
        <div className="space-y-2">
          <img src={isActive ? MaheshLogo2 : MaheshLogo} alt="Logo" width={40} className="mb-4" />
          <h1 className="text-xl font-semibold text-[#f10350]">Contact Details</h1>
          <p>Name: Mahesh Prasad Pisharody</p>
          <p>Phone: +1 (551)-349-2626</p>
          <p>Email: <a href="mailto:maheshpisharody99@gmail.com" className="text-blue-400 hover:underline">maheshpisharody99@gmail.com</a></p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-[#f10350]">Links</h1>
          <ul className="space-y-1">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-blue-400 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-[#f10350]">Follow Me</h1>
          <ul className="flex space-x-4">
            <li>
              <a href={Home_Page.link1} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-colors">
                {Home_Page.Github_logo}
              </a>
            </li>
            <li>
              <a href={Home_Page.link2} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-colors">
                {Home_Page.Linkedin_logo}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  isActive: PropTypes.bool,
}

export default Contact;
