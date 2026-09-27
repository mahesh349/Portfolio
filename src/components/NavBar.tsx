import type { MouseEvent } from 'react';
import type { ThemeProps } from '../types';
import { NAVIGATION_LINKS } from "../constants/Contents";
import MaheshLogo2 from "../assets/MaheshLogo2.png";
import MaheshLogo from "../assets/MaheshLogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

interface NavBarProps extends ThemeProps {
    toggleStyle: () => void;
}

function NavBar({ toggleStyle, isActive }: NavBarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
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
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Menu */}
                <div className={`mx-auto hidden max-w-6xl items-center justify-between rounded-lg border ${isActive ? 'bg-[#16181d]/80 border-white/10' : 'bg-white/80 border-black/10'} py-3 px-6 backdrop-blur-lg lg:flex`}>
                    <div className="flex items-center gap-10">
                        <a href="#">
                            <img
                                src={isActive ? MaheshLogo2 : MaheshLogo}
                                width={40} alt="logo"
                                className={`rounded-lg border ${isActive ? 'border-gray-200' : 'border-black'} `}
                            />
                        </a>
                        <ul className="flex items-center gap-6">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a className={`text-sm font-medium ${isActive ? 'text-white' : 'text-black'} hover:text-[#f10350] transition-colors`} href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Toggle Switch */}
                    <div className="flex items-center">
                        <label htmlFor="toggleBackground" className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" id="toggleBackground" className="sr-only" onChange={toggleStyle} checked={isActive} />
                                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isActive ? 'translate-x-6' : ''}`}></div>
                            </div>
                            <span className={`ml-3 text-sm ${isActive ? 'text-white' : 'text-gray-700'}`}>Switch Theme</span>
                        </label>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`rounded-lg backdrop-blur-md lg:hidden px-4 py-2 border ${isActive ? 'bg-[#16181d]/80 border-white/10' : 'bg-white/80 border-black/10'}`}>
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img src={isActive ? MaheshLogo2 : MaheshLogo} width={40} alt="logo" className='rounded-lg border border-gray-200' />
                        </a>
                        <div className='flex items-center'>
                            {/* Toggle Switch for Mobile */}
                            <label htmlFor="toggleBackgroundMobile" className="flex items-center cursor-pointer mr-4">
                                <div className="relative">
                                    <input type="checkbox" id="toggleBackgroundMobile" className="sr-only" onChange={toggleStyle} checked={isActive} />
                                    <div className="block bg-gray-600 w-12 h-6 rounded-full"></div>
                                    <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${isActive ? 'translate-x-6' : ''}`}></div>
                                </div>
                            </label>
                            <button className="focus:outline-none" onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className={`m-2 h-6 w-6 ${isActive ? 'text-white' : 'text-black'}`} />
                                ) : (
                                    <FaBars className={`m-2 h-6 w-6 ${isActive ? 'text-white' : 'text-black'}`} />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="mt-4 flex flex-col gap-4">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className={`block text-xl font-medium ${isActive ? 'text-white' : 'text-black'}`} onClick={(e) => { handleLinkClick(e, item.href) }}>
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

export default NavBar;
