"use client";

import React, { useState } from "react";
import { useAnimeTheme } from "../providers/AnimeThemeProvider";
import { RiShieldFlashLine, RiCloseLine, RiFlashlightLine, RiAwardLine } from "@remixicon/react";

export default function SystemHUD() {
  const { isAnimeMode, toggleAnimeMode } = useAnimeTheme();
  const [notificationOpen, setNotificationOpen] = useState(true);

  return (
    <>
      {/* Solo Leveling Top HUD & System Quest Alert */}
      {isAnimeMode && (
        <div className="fixed top-[68px] sm:top-20 left-0 right-0 z-40 px-2 sm:px-4 pointer-events-none">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 pointer-events-auto">
            {/* Top Status Bar */}
            <div className="w-full md:w-auto bg-[#050B14]/90 border border-[#00F0FF]/60 rounded-lg px-3 py-1.5 sm:p-2.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.25)] flex flex-wrap items-center justify-around sm:justify-between gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs text-[#38BDF8]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00F0FF] animate-ping"></span>
                <span className="text-[#00F0FF] font-bold">PLAYER:</span>
                <span className="text-white">ADITYA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#FCD34D] font-bold">TITLE:</span>
                <span className="text-[#FCD34D] truncate max-w-[110px] sm:max-w-none">SHADOW MONARCH</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00F0FF] font-bold">LVL:</span>
                <span className="text-white bg-[#00F0FF]/20 px-1.5 py-0.5 rounded border border-[#00F0FF]/40 text-[10px] sm:text-xs">100</span>
              </div>
              {/* HP & MP bars */}
              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-emerald-400 font-bold">HP</span>
                  <div className="w-16 h-2 bg-[#0B132B] rounded-full overflow-hidden border border-emerald-500/40">
                    <div className="w-full h-full bg-emerald-400"></div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[#00F0FF] font-bold">MP</span>
                  <div className="w-16 h-2 bg-[#0B132B] rounded-full overflow-hidden border border-[#00F0FF]/40">
                    <div className="w-full h-full bg-[#00F0FF] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quest Alert Banner */}
            {notificationOpen && (
              <div className="w-full md:w-auto bg-[#050B14]/95 border border-[#00F0FF] rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-lg shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono animate-bounce max-w-full overflow-hidden">
                <div className="flex items-center gap-1.5 text-[#00F0FF] truncate">
                  <RiAwardLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FCD34D] shrink-0" />
                  <span className="truncate">[ SYSTEM QUEST: AWAKENED DEVELOPER ]</span>
                </div>
                <button
                  onClick={() => setNotificationOpen(false)}
                  className="text-secondary hover:text-[#00F0FF] transition-colors shrink-0"
                >
                  <RiCloseLine className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
