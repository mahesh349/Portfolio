import PropTypes from "prop-types";
import { NAVIGATION_LINKS, Home_Page, Contact_Info } from "../constants/Contents";
import MaheshLogo from "../assets/MaheshLogo.png";
import MaheshLogo2 from "../assets/MaheshLogo2.png";
import Reveal from "./NestedComponents/Reveal.jsx";
import SectionHeading from "./NestedComponents/SectionHeading.jsx";

function Contact( {isActive} ) {
  return (
    <div
      id="contact"
      className={`border-t ${isActive ? 'border-white/10 text-white' : 'border-black/10 text-gray-700'} py-16 px-4 sm:px-10`}
    >
      <Reveal>
        <SectionHeading eyebrow="06 · contact.sh" title="Get In Touch" isActive={isActive} />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact Details */}
          <div className="space-y-2">
            <img src={isActive ? MaheshLogo2 : MaheshLogo} alt="Logo" width={40} className="mb-4" />
            <h1 className="text-xl font-semibold text-[#f10350]">Contact Details</h1>
            <p>{Contact_Info.fullName}</p>
            <p>{Contact_Info.location}</p>
            <p>{Contact_Info.phone}</p>
            <p>
              <a href={`mailto:${Contact_Info.email}`} className="text-blue-400 hover:underline">
                {Contact_Info.email}
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-[#f10350]">Links</h1>
            <ul className="space-y-1">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-[#f10350] transition-colors">
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
                <a href={Home_Page.link1} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#f10350] transition-colors">
                  {Home_Page.Github_logo}
                </a>
              </li>
              <li>
                <a href={Home_Page.link2} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#f10350] transition-colors">
                  {Home_Page.Linkedin_logo}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={`text-center text-xs mt-10 font-mono ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>
          &copy; {new Date().getFullYear()} {Contact_Info.fullName}. All rights reserved.
        </p>
      </Reveal>
    </div>
  );
}

Contact.propTypes = {
  isActive: PropTypes.bool,
}

export default Contact;
