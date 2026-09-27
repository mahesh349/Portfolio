import type { ReactNode } from "react";

interface CodeWindowProps {
  filename: string;
  className?: string;
  bodyClassName?: string;
  children?: ReactNode;
}

function CodeWindow({ filename, className = "", bodyClassName = "", children }: CodeWindowProps) {
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

export default CodeWindow;
