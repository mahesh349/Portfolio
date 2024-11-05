import PropTypes from 'prop-types';
import { NAVIGATION_LINKS } from "../constants/Contents";
import MaheshLogo2 from "../assets/MaheshLogo2.png";
import MaheshLogo from "../assets/MaheshLogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function NavBar({ toggleStyle, isActive }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    }

    return (
        <div className = 'border' >
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Menu */}
                <div className={`mx-auto hidden max-w-6xl items-center justify-between rounded-lg ${isActive ? 'bg-black/80' : 'bg-white/80'  } py-3 px-6 backdrop-blur-lg lg:flex`}>
                    <div className="flex items-center gap-10">
                        <div className=''>
                            <a href="#">
                                <img 
                                    src= {isActive ? MaheshLogo2 : MaheshLogo} 
                                    width={40} alt="logo" 
                                    className={`rounded-lg border ${isActive ? 'border-gray-200' : 'border-black'} `}
                                />
                            </a>
                        </div>
                        <ul className="flex items-center gap-6">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a className={`text-sm font-medium ${isActive ? 'text-white hover:text-yellow-400' : 'text-black hover:text-blue-500'} transition-colors`} href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={toggleStyle} className="text-white bg-blue-500 px-6 py-2 rounded-lg shadow-lg transition-all hover:bg-blue-600">
                        Toggle Background
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                <img src={MaheshLogo2} width={40} alt="logo" className='rounded-lg border border-gray-200' />
                            </a>
                        </div>
                        <div className='text-black flex items-center'>
                            <button className="focus:outline-none" onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className="m-2 h-6 w-6" />
                                ) : (
                                    <FaBars className="m-2 h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="block text-xl font-medium" onClick={(e) => { handleLinkClick(e, item.href) }}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
}

NavBar.propTypes = {
    toggleStyle: PropTypes.string,
    isActive: PropTypes.bool
}

export default NavBar;


