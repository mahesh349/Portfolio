import PropTypes from "prop-types";

function SectionHeading({ eyebrow, title, isActive }) {
  return (
    <div className="mb-14 md:mb-16 max-w-6xl mx-auto">
      <p className={`font-mono text-sm ${isActive ? "text-gray-500" : "text-gray-400"}`}>
        <span className="text-[#f10350]">{"// "}</span>
        {eyebrow}
      </p>
      <h2 className={`mt-2 text-3xl sm:text-4xl font-bold tracking-tight ${isActive ? "text-white" : "text-black"}`}>
        {title}
      </h2>
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default SectionHeading;
