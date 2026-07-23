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
        <div className="fixed top-20 left-0 right-0 z-40 px-4 pointer-events-none">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 pointer-events-auto">
            {/* Top Status Bar */}
            <div className="w-full md:w-auto bg-[#050B14]/90 border border-[#00F0FF]/60 rounded-lg p-2.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.25)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#38BDF8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping"></span>
                <span className="text-[#00F0FF] font-bold">PLAYER:</span>
                <span className="text-white">ADITYA RAUL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FCD34D] font-bold">TITLE:</span>
                <span className="text-[#FCD34D]">SHADOW MONARCH</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00F0FF] font-bold">LVL:</span>
                <span className="text-white bg-[#00F0FF]/20 px-2 py-0.5 rounded border border-[#00F0FF]/40">100</span>
              </div>
              {/* HP & MP bars */}
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-emerald-400 font-bold">HP</span>
                  <div className="w-20 h-2 bg-[#0B132B] rounded-full overflow-hidden border border-emerald-500/40">
                    <div className="w-full h-full bg-emerald-400"></div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[#00F0FF] font-bold">MP</span>
                  <div className="w-20 h-2 bg-[#0B132B] rounded-full overflow-hidden border border-[#00F0FF]/40">
                    <div className="w-full h-full bg-[#00F0FF] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quest Alert Banner */}
            {notificationOpen && (
              <div className="w-full md:w-auto bg-[#050B14]/95 border-2 border-[#00F0FF] rounded-lg px-4 py-2 backdrop-blur-lg shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-between gap-3 text-xs font-mono animate-bounce">
                <div className="flex items-center gap-2 text-[#00F0FF]">
                  <RiAwardLine className="w-4 h-4 text-[#FCD34D]" />
                  <span>[ SYSTEM QUEST: AWAKENED AS S-RANK DEVELOPER ]</span>
                </div>
                <button
                  onClick={() => setNotificationOpen(false)}
                  className="text-secondary hover:text-[#00F0FF] transition-colors"
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
