import PropTypes from "prop-types";

function CodeWindow({ filename, className = "", bodyClassName = "", children }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/20 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1e2029] border-b border-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-gray-400 font-mono">{filename}</span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

CodeWindow.propTypes = {
  filename: PropTypes.string.isRequired,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  children: PropTypes.node,
};

export default CodeWindow;
