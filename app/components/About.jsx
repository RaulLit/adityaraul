"use client";

import { RiGraduationCapLine, RiMapPinLine, RiBriefcaseLine, RiTranslate2, RiFlashlightLine, RiShieldLine } from "@remixicon/react";
import Image from "next/image";
import { useAnimeTheme } from "../providers/AnimeThemeProvider";

export default function About() {
  const { isAnimeMode } = useAnimeTheme();

  const hunterStats = [
    { label: "STRENGTH (STR)", val: "99", desc: "Node.js, Express, Core Backend Mastery" },
    { label: "AGILITY (AGI)", val: "98", desc: "React, Next.js 16, High Performance" },
    { label: "INTELLIGENCE (INT)", val: "100", desc: "SSO Architecture, Systems & Security" },
    { label: "PERCEPTION (PER)", val: "95", desc: "Photography, UI Precision & Visual Art" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 sm:mb-16 relative inline-block break-words max-w-full">
          {isAnimeMode ? "[ PLAYER STATUS & HUNTER BIO ]" : "About Me"}
          <span
            className={`absolute bottom-0 left-0 w-1/2 h-1 ${isAnimeMode ? "bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" : "bg-[#64FFDA]"}`}
          ></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image / Hunter Card */}
          <div className="w-full md:w-2/5">
            <div
              className={`glass-card p-0 sm:p-4 rounded-lg ${isAnimeMode ? "border-[#00F0FF]/60 shadow-[0_0_20px_rgba(0,240,255,0.25)]" : ""}`}
            >
              <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
                <Image
                  src={isAnimeMode ? "/anime/solo_leveling_banner.jpg" : "/about_img.jpeg"}
                  alt="Aditya Raul"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Text content / Hunter Window */}
          <div className="md:w-3/5 space-y-6">
            <p className="text-lg text-secondary">
              Hello!{" "}
              <span
                className={isAnimeMode ? "text-[#00F0FF] font-bold font-mono" : "text-highlight"}
              >
                I'm Aditya
              </span>
              , a passionate developer based in Navi Mumbai, India with experience in building
              mobile applications, websites and other digital products.
            </p>
            <p className="text-lg text-secondary">
              My journey in tech began after 12th boards during Covid-19 pandemic, I started with
              Java as my first coding language. Later on, I started exploring the field of
              development, where I found my passion for creating elegant solutions to day to day
              problems. Since then, I've worked with various technologies and frameworks to deliver
              high-quality applications.
            </p>

            {isAnimeMode ? (
              /* Solo Leveling Hunter Status Window */
              <div className="p-4 sm:p-6 rounded-xl border border-[#00F0FF]/60 bg-[#050B14]/80 backdrop-blur-md shadow-[0_0_25px_rgba(0,240,255,0.2)] font-mono space-y-4">
                <div className="flex items-center justify-between border-b border-[#00F0FF]/30 pb-3">
                  <span className="text-[#00F0FF] font-bold text-xs sm:text-sm tracking-widest">
                    [ SYSTEM STATUS WINDOW ]
                  </span>
                  <span className="text-[#FCD34D] text-xs font-bold">
                    [ CLASS: SHADOW MONARCH ]
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {hunterStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0B132B]/80 p-3 rounded-lg border border-[#00F0FF]/20"
                    >
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-[#00F0FF] font-bold">{stat.label}</span>
                        <span className="text-white bg-[#00F0FF]/20 px-2 py-0.5 rounded border border-[#00F0FF]/40">
                          {stat.val}
                        </span>
                      </div>
                      <p className="text-[11px] text-secondary font-sans">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <p className="text-lg text-secondary">
                  When I'm not coding, you'll find me exploring the world through my camera lens,
                  hiking in nature, playing basketball or playing guitar & trying to sing. I believe
                  that learning diverse skills in tech & non-tech keeps fueling the excitement in
                  me.
                </p>
                <p className="text-lg text-secondary">
                  Currently, I'm focused on building my own brand{" "}
                  <a
                    className="text-highlight"
                    href="https://lastbenchscholar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LastBenchScholar
                  </a>
                  , a student centric ecosystem for growth and collaboration.
                </p>
              </>
            )}

            {/* Quick Facts */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">
                {isAnimeMode ? "[ GUILD DATA & QUICK FACTS ]" : "Quick Facts"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <RiGraduationCapLine />,
                    text: "B.E in Electronics & Telecommunication",
                  },
                  {
                    icon: <RiMapPinLine />,
                    text: "Navi Mumbai, Maharashtra, India",
                  },
                  {
                    icon: <RiBriefcaseLine />,
                    text: isAnimeMode ? "S-Rank Web & App Architect" : "Web & App developer",
                  },
                  {
                    icon: <RiTranslate2 />,
                    text: "English, Hindi, Marathi",
                  },
                ].map((fact, idx) => (
                  <div className="flex items-start" key={idx}>
                    <div
                      className={`w-6 h-6 flex items-center justify-center mr-2 ${isAnimeMode ? "text-[#00F0FF]" : "text-[#64FFDA]"}`}
                    >
                      {fact.icon}
                    </div>
                    <p className="text-secondary">{fact.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
