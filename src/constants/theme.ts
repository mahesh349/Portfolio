// Shared surface styles so every section matches the hero's terminal/editor look.
export const CARD_DARK = "bg-[#1b1d24] border border-white/10 shadow-xl shadow-black/30";
export const CARD_LIGHT = "bg-white border border-black/10 shadow-lg shadow-black/5";

export function cardClass(isActive: boolean, extra = ""): string {
  return `${isActive ? CARD_DARK : CARD_LIGHT} ${extra}`.trim();
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}
