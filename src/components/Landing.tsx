import type { ThemeProps } from "../types";
import { Home_Page } from "../constants/Contents";
import { FaMapMarkerAlt } from "react-icons/fa";
import RoleTypewriter from "./NestedComponents/RoleTypewriter";
import TerminalPanel from "./NestedComponents/TerminalPanel";

function Landing({ isActive }: ThemeProps) {
  return (
    <div
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden ${isActive ? "bg-[#16181d]" : "bg-[#f4f6f8]"}`}
    >
      {/* Dot-grid backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${isActive ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)"} 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(circle at 50% 40%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, black, transparent 75%)",
        }}
      />
      {/* Accent glow */}
      <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#f10350]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 py-32 grid gap-16 md:grid-cols-2 md:items-center">
        {/* Left: intro */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f10350]/30 bg-[#f10350]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f10350]">
            <span className="h-2 w-2 rounded-full bg-[#f10350] animate-pulse" />
            {Home_Page.availability}
          </span>

          <p className={`mt-6 font-mono text-sm ${isActive ? "text-gray-400" : "text-gray-500"}`}>Hi, I&apos;m</p>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${isActive ? "text-white" : "text-black"}`}>
            {Home_Page.Name}
          </h1>

          <p className="mt-4 font-mono text-lg sm:text-xl">
            <span className={isActive ? "text-gray-500" : "text-gray-400"}>{"> "}</span>
            <RoleTypewriter roles={Home_Page.roles} className="text-[#f10350]" />
          </p>

          <p className={`mt-6 max-w-md ${isActive ? "text-gray-300" : "text-gray-600"}`}>
            {Home_Page.info}
          </p>

          <p className={`mt-3 flex items-center gap-1.5 text-sm ${isActive ? "text-gray-400" : "text-gray-500"}`}>
            <FaMapMarkerAlt /> {Home_Page.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={Home_Page.ResumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f10350] text-white font-semibold py-2.5 px-6 rounded-lg transition duration-300 hover:bg-[#d10248]"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className={`inline-block font-semibold py-2.5 px-6 rounded-lg border transition duration-300 ${
                isActive ? "border-white/30 text-white hover:bg-white/10" : "border-black/20 text-black hover:bg-black/5"
              }`}
            >
              Contact Me
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-5">
            <li className={`text-2xl transition-colors hover:text-[#f10350] ${isActive ? "text-white" : "text-black"}`}>
              <a href={Home_Page.link1} target="_blank" rel="noopener noreferrer">{Home_Page.Github_logo}</a>
            </li>
            <li className={`text-2xl transition-colors hover:text-[#f10350] ${isActive ? "text-white" : "text-black"}`}>
              <a href={Home_Page.link2} target="_blank" rel="noopener noreferrer">{Home_Page.Linkedin_logo}</a>
            </li>
          </ul>
        </div>

        {/* Right: terminal panel */}
        <div className="flex justify-center md:justify-end">
          <TerminalPanel />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl animate-bounce ${isActive ? "text-white/50" : "text-black/40"}`}
      >
        ↓
      </a>
    </div>
  );
}

export default Landing;
