import { useEffect, useState } from "react";

const SEGMENTS = [
  { t: "const ", c: "text-[#ff79c6]" },
  { t: "engineer", c: "text-[#8be9fd]" },
  { t: " = {\n", c: "text-gray-300" },
  { t: "  role", c: "text-[#8be9fd]" },
  { t: ": ", c: "text-gray-400" },
  { t: '"Software Engineer"', c: "text-[#50fa7b]" },
  { t: ",\n", c: "text-gray-400" },
  { t: "  stack", c: "text-[#8be9fd]" },
  { t: ": [", c: "text-gray-300" },
  { t: '"Java"', c: "text-[#50fa7b]" },
  { t: ", ", c: "text-gray-400" },
  { t: '"React"', c: "text-[#50fa7b]" },
  { t: ", ", c: "text-gray-400" },
  { t: '"AWS"', c: "text-[#50fa7b]" },
  { t: "],\n", c: "text-gray-300" },
  { t: "  focus", c: "text-[#8be9fd]" },
  { t: ": ", c: "text-gray-400" },
  { t: '"Agentic AI Systems"', c: "text-[#50fa7b]" },
  { t: ",\n", c: "text-gray-400" },
  { t: "  location", c: "text-[#8be9fd]" },
  { t: ": ", c: "text-gray-400" },
  { t: '"Seattle, WA"', c: "text-[#50fa7b]" },
  { t: ",\n", c: "text-gray-400" },
  { t: "  experience", c: "text-[#8be9fd]" },
  { t: ": ", c: "text-gray-400" },
  { t: '"3 yrs"', c: "text-[#50fa7b]" },
  { t: ",\n", c: "text-gray-400" },
  { t: "  education", c: "text-[#8be9fd]" },
  { t: ": ", c: "text-gray-400" },
  { t: '"MS CS, Stevens"', c: "text-[#50fa7b]" },
  { t: ",\n", c: "text-gray-400" },
  { t: "};", c: "text-gray-300" },
];

const FULL_LENGTH = SEGMENTS.reduce((sum, s) => sum + s.t.length, 0);

function TerminalPanel() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (revealed >= FULL_LENGTH) return;
    const timeout = setTimeout(() => setRevealed((r) => r + 1), 22);
    return () => clearTimeout(timeout);
  }, [revealed]);

  const done = revealed >= FULL_LENGTH;
  let remaining = revealed;

  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden border border-white/10 bg-[#161821] shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1e2029] border-b border-white/5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-gray-400 font-mono">agent.ts</span>
      </div>
      <pre className="p-5 text-sm font-mono leading-relaxed whitespace-pre-wrap min-h-[320px]">
        {SEGMENTS.map((seg, i) => {
          const take = Math.max(0, Math.min(seg.t.length, remaining));
          remaining -= take;
          if (take === 0) return null;
          return (
            <span key={i} className={seg.c}>
              {seg.t.slice(0, take)}
            </span>
          );
        })}
        {!done && <span className="inline-block w-[7px] h-[1em] bg-gray-200 align-middle animate-blink" />}
      </pre>
    </div>
  );
}

export default TerminalPanel;
