"use client";

import { RiArrowUpLine, RiFlashlightLine } from "@remixicon/react";
import { useAnimeTheme } from "../providers/AnimeThemeProvider";

export default function Footer() {
  const { isAnimeMode, toggleAnimeMode } = useAnimeTheme();

  return (
    <footer className="py-8 bg-[#0A192F] border-t border-[#112240]">
      <div className="max-w-7xl mx-auto px-6 text-center text-secondary flex flex-col items-center">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <p>
          Designed & Built with ❤️ by <span className="text-highlight">Aditya Raul</span>
        </p>

        {/* Hidden Anime Mode Switcher Button - visible on hover */}
        <div className="mt-2 group">
          <button
            onClick={() => {
              toggleAnimeMode();
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 flex items-center gap-1.5 cursor-pointer border ${
              isAnimeMode
                ? "bg-[#050B14] text-[#00F0FF] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                : "bg-[#0A192F] text-[#64FFDA] border-[#64FFDA]/40 hover:bg-[#64FFDA]/10"
            }`}
            title={isAnimeMode ? "Switch to Normal Mode" : "Activate Solo Leveling Anime Mode"}
          >
            <RiFlashlightLine className={`w-3.5 h-3.5 ${isAnimeMode ? "animate-pulse text-[#00F0FF]" : ""}`} />
            <span>{isAnimeMode ? "[ SYSTEM: MONARCH MODE ACTIVE ]" : "[ SECRET: TOGGLE ?anime MODE ]"}</span>
          </button>
        </div>

        <a
          href="#home"
          aria-label="Scroll to top"
          className="mt-3 w-10 h-10 flex items-center justify-center glass-card rounded-full text-[#64FFDA] hover:text-white transition-colors"
        >
          <RiArrowUpLine size={22} />
        </a>
      </div>
    </footer>
  );
}
