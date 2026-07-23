"use client";

import { RiCodeSSlashLine, RiServerLine, RiDatabase2Line, RiToolsLine } from "@remixicon/react";
import { useAnimeTheme } from "../providers/AnimeThemeProvider";

export default function Skills() {
  const { isAnimeMode } = useAnimeTheme();

  const skills = [
    {
      category: isAnimeMode ? "[ FRONTEND SPELLS ]" : "Frontend",
      icon: <RiCodeSSlashLine size={32} />,
      data: [
        { label: "React", value: 90 },
        { label: "JavaScript", value: 90 },
        { label: "HTML/CSS", value: 95 },
        { label: "Material UI", value: 90 },
        { label: "Tailwind", value: 70 },
      ],
    },
    {
      category: isAnimeMode ? "[ BACKEND SHADOWS ]" : "Backend",
      icon: <RiServerLine size={32} />,
      data: [
        { label: "Node.js", value: 90 },
        { label: "Express", value: 90 },
        { label: "Python", value: 80 },
        { label: "Firebase", value: 90 },
        { label: "GraphQL", value: 75 },
        { label: "Flask", value: 65 },
      ],
    },
    {
      category: isAnimeMode ? "[ STORAGE VAULTS ]" : "Database",
      icon: <RiDatabase2Line size={32} />,
      data: [
        { label: "MongoDB", value: 90 },
        { label: "Redis", value: 80 },
        { label: "Firebase", value: 90 },
      ],
    },
    {
      category: isAnimeMode ? "[ SYSTEM ARTIFACTS ]" : "Other Skills",
      icon: <RiToolsLine size={32} />,
      data: [
        { label: "Docker", value: 80 },
        { label: "AWS", value: 75 },
        { label: "Git", value: 95 },
        { label: "Figma", value: 85 },
        { label: "Flutter", value: 90 },
        { label: "Svelte", value: 75 },
      ],
    },
  ];

  const SkillBar = ({ label, value }) => (
    <div>
      <div className="flex justify-between mb-1 font-mono text-xs">
        <span className="text-secondary">{label}</span>
        <span className={isAnimeMode ? "text-[#00F0FF] font-bold" : "text-[#64FFDA]"}>
          {isAnimeMode ? `LVL ${value}` : `${value}%`}
        </span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 sm:mb-16 relative inline-block break-words max-w-full">
          {isAnimeMode ? "[ PLAYER ACTIVE & PASSIVE SKILLS ]" : "Skills & Expertise"}
          <span className={`absolute bottom-0 left-0 w-1/2 h-1 ${isAnimeMode ? "bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" : "bg-[#64FFDA]"}`}></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((section, idx) => (
            <div className={`glass-card p-6 rounded-2xl h-fit ${isAnimeMode ? "border-[#00F0FF]/40" : ""}`} key={idx}>
              <div className={`w-12 h-12 flex items-center justify-center mb-4 ${isAnimeMode ? "text-[#00F0FF]" : "text-[#64FFDA]"}`}>
                {section.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isAnimeMode ? "font-mono text-[#00F0FF]" : ""}`}>{section.category}</h3>
              <div className="space-y-4">
                {section.data.map((skill, i) => (
                  <SkillBar key={i} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
