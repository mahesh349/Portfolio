import type { ThemeProps } from "../types";
import { Experience_Section } from "../constants/Contents";
import Reveal from "./NestedComponents/Reveal";
import SectionHeading from "./NestedComponents/SectionHeading";
import { cardClass } from "../constants/theme";

function ExperienceSection({ isActive }: ThemeProps) {
  return (
    <div id="experience" className="px-4 sm:px-10 pb-32">
      <Reveal>
        <SectionHeading eyebrow="03 · experience.log" title="Work Experience" isActive={isActive} />
      </Reveal>
      <div className="relative space-y-12 max-w-6xl mx-auto">
        {/* Vertical line for the timeline */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 ${isActive ? 'border-white/10' : 'border-black/10'} hidden md:block`}></div>

        {Experience_Section.map((items, itemIndex) => {
          const isLeft = itemIndex % 2 === 0;
          return (
            <Reveal key={items.CompanyName} delay={itemIndex * 80}>
              <div
                className={`relative flex flex-col md:flex-row ${isLeft ? "md:justify-end" : "md:justify-start"} items-center w-full`}
              >
                {/* Dot on the timeline */}
                {itemIndex === 0 && (
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-[#f10350] animate-ping hidden md:block"></span>
                )}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#f10350] w-4 h-4 rounded-full hidden md:block"></div>

                {/* Experience content */}
                <div className={cardClass(isActive, "rounded-xl p-6 md:p-8 w-full md:w-[calc(50%-2rem)] text-left mx-4")}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h2 className="text-[#f10350] font-semibold text-2xl">{items.CompanyName}</h2>
                    {itemIndex === 0 && (
                      <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-[#f10350]/15 text-[#f10350]">
                        Current
                      </span>
                    )}
                  </div>
                  <p className={`${isActive ? 'text-gray-300' : 'text-gray-600'} text-base font-medium`}>
                    {items.Role}
                  </p>
                  <p className={`${isActive ? 'text-gray-400' : 'text-gray-500'} text-sm mb-4 font-mono`}>
                    {items.Location} &middot; {items.TimeLine}
                  </p>
                  <ul className={`${isActive ? 'text-white' : 'text-black'} mt-2 space-y-2 text-left font-thin list-disc list-outside pl-5 marker:text-[#f10350]`}>
                    {items.Bullets.map((sentence, index) => (
                      <li key={index}>{sentence}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceSection;
