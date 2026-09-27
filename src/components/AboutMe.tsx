import type { ThemeProps } from "../types";
import { About } from "../constants/Contents";
import SplitNew from "./NestedComponents/SplitDivAnimation";
import Reveal from "./NestedComponents/Reveal";
import SectionHeading from "./NestedComponents/SectionHeading";

function AboutMe({ isActive }: ThemeProps) {
  return (
    <div className="relative z-10 pt-32 pb-32 px-4 sm:px-10" id="about">
      <Reveal>
        <SectionHeading eyebrow="01 · about.md" title="About Me" isActive={isActive} />
      </Reveal>
      <Reveal delay={100}>
        <div className="max-w-6xl mx-auto">
          <h1 className={`font-semibold text-2xl sm:text-3xl mb-6 ${isActive ? 'text-white' : 'text-black'}`}>
            {About.text1}
          </h1>
          <p className={`max-w-3xl text-left font-thin mb-12 ${isActive ? 'text-gray-300' : 'text-gray-700'}`}>
            {About.text2}
          </p>
        </div>
      </Reveal>
      <SplitNew isActive={isActive}/>
    </div>
  );
}

export default AboutMe;
