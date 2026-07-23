"use client";

import Image from "next/image";
import { useAnimeTheme } from "../providers/AnimeThemeProvider";

export default function Hero() {
  const { isAnimeMode } = useAnimeTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="animated-bg">
        {[
          {
            w: 80,
            h: 80,
            left: "15%",
            top: "45%",
            delay: "0s",
            duration: "20s",
          },
          {
            w: 120,
            h: 120,
            left: "70%",
            top: "35%",
            delay: "2s",
            duration: "25s",
          },
          {
            w: 50,
            h: 50,
            left: "30%",
            top: "75%",
            delay: "1s",
            duration: "13s",
          },
          {
            w: 150,
            h: 150,
            left: "85%",
            top: "60%",
            delay: "4s",
            duration: "30s",
          },
          {
            w: 60,
            h: 60,
            left: "10%",
            top: "80%",
            delay: "3s",
            duration: "17s",
          },
          {
            w: 100,
            h: 100,
            left: "50%",
            top: "50%",
            delay: "0s",
            duration: "23s",
          },
        ].map((bg, index) => (
          <span
            key={index}
            style={{
              width: `${bg.w}px`,
              height: `${bg.h}px`,
              left: bg.left,
              top: bg.top,
              animationDelay: bg.delay,
              animationDuration: bg.duration,
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <div>
              {isAnimeMode && (
                <div className="inline-block px-3 py-1 mb-3 rounded border border-[#00F0FF]/60 bg-[#00F0FF]/10 text-[#00F0FF] font-mono text-xs tracking-widest uppercase animate-pulse">
                  [ SYSTEM: S-RANK MONARCH PLAYER ]
                </div>
              )}
              <p
                className={`text-xl ${isAnimeMode ? "text-[#00F0FF] font-mono" : "text-[#64FFDA]"}`}
              >
                {isAnimeMode ? "[ SYSTEM STATUS: ONLINE ]" : "Hello, my name is"}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-2 text-white">
                Aditya Raul
              </h1>
              <div className="flex flex-wrap items-center mt-4 gap-2 sm:gap-4">
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl ${isAnimeMode ? "text-[#00F0FF] font-mono" : "text-secondary"}`}
                >
                  {isAnimeMode ? "Shadow Monarch" : "Developer"}
                </h2>
                <span className="text-secondary">|</span>
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl ${isAnimeMode ? "text-[#FCD34D] font-mono" : "text-secondary"}`}
                >
                  {isAnimeMode ? "S-Rank Architect" : "Creator"}
                </h2>
              </div>
            </div>
            <p className="text-base sm:text-lg text-secondary max-w-xl">
              {isAnimeMode
                ? "I command the digital shadows to architect unstoppable web applications, high-performance SSO systems, and immersive platforms."
                : "I build exceptional digital platforms with a focus on performance and user experience. Specializing in modern web technologies and creative problem solving."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="#projects"
                className={`px-6 py-3 bg-transparent border-2 text-center ${
                  isAnimeMode
                    ? "border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/20 font-mono shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                } rounded-lg whitespace-nowrap`}
              >
                {isAnimeMode ? "[ VIEW ARSENAL ]" : "View My Work"}
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 text-center ${
                  isAnimeMode
                    ? "bg-[#00F0FF] text-[#050B14] font-bold hover:bg-[#00F0FF]/80 font-mono shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                    : "bg-[#64FFDA] text-primary hover:bg-[#64FFDA]/80"
                } rounded-lg whitespace-nowrap`}
              >
                {isAnimeMode ? "[ TRANSMIT QUEST ]" : "Contact Me"}
              </a>
            </div>
          </div>

          {/* Right image card */}
          <div
            className={`w-full md:w-1/2 glass-card p-0 sm:p-8 rounded-lg ${isAnimeMode ? "border-[#00F0FF]/60 shadow-[0_0_25px_rgba(0,240,255,0.3)]" : ""}`}
          >
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
              <Image
                src={isAnimeMode ? "/anime/solo_leveling_avatar.jpg" : "/profile_photo_blue-bg.png"}
                alt="Aditya Raul"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
