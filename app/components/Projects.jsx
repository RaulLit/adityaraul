"use client";

import { RiExternalLinkLine, RiGithubLine, RiFlashlightLine } from "@remixicon/react";
import Image from "next/image";
import { useAnimeTheme } from "../providers/AnimeThemeProvider";

export default function Projects() {
  const { isAnimeMode } = useAnimeTheme();

  const projects = [
    {
      title: "LastBenchScholar",
      description: "An ecosystem of web applications that provides various services to students.",
      tech: ["Next.js", "Tailwind", "Node.js"],
      image: "/projects/lastbenchscholar.png",
      rank: "S-RANK GATE",
      links: { live: "https://lastbenchscholar.com/" },
    },
    {
      title: "Single Sign-On (SSO)",
      description:
        "An authentication system connecting multiple apps under my brand LastBenchScholar.",
      tech: ["Node.js", "MongoDB", "Redis", "Tailwind", "Pug", "Firebase", "Docker"],
      image: "/projects/sso.png",
      rank: "NATIONAL LEVEL",
      links: { live: "https://sso.lastbenchscholar.com/" },
    },
    {
      title: "Arena (Legacy Project)",
      description:
        "A platform provide a platform for students to improve their coding skills and participate in various coding contests.",
      tech: ["Pug", "Bootstrap", "Node.js", "MongoDB", "Redis", "Firebase", "Docker"],
      image: "/projects/arena.png",
      rank: "A-RANK DUNGEON",
      links: { live: "https://arena-4700.onrender.com/" },
    },
    {
      title: "Hubbie Chat",
      description:
        "Just another chatting application which has active feature additions from student's feedbacks.",
      tech: ["React", "Node.js", "MongoDB", "Material-UI", "Firebase", "Socket.io"],
      image: "/projects/hubbie_chat.png",
      rank: "A-RANK DUNGEON",
      links: { live: "https://chat.lastbenchscholar.com/" },
    },
    {
      title: "Blogging Platform",
      description:
        "It has a minimalistic design and promotes upskilling specifically for student's lifestyle through blogs.",
      tech: ["React", "Node.js", "MongoDB", "Material-UI"],
      image: "/projects/blogging.png",
      rank: "B-RANK GATE",
      links: { live: "https://blog.lastbenchscholar.com/" },
    },
    {
      title: "Meteor Strike",
      description:
        "A javascript and Canvas API based simple game demonstrating the power of simple programming.",
      tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
      image: "/projects/meteor_strike.png",
      rank: "SPECIAL INSTANCE",
      links: {
        live: "https://raullit.github.io/Games/Game%201/index.html",
        code: "https://github.com/RaulLit/RaulLit.github.io/tree/main/Games/Game%201",
      },
    },
    {
      title: "Mi Notez",
      description:
        "Mi Notez is a notes-keeping web app that uses the Material-UI styling library which implements Google's design style",
      tech: ["React", "Material-UI", "Firebase"],
      image: "/projects/mi_notez.png",
      rank: "C-RANK GATE",
      links: { live: "https://mi-notez.web.app/", code: "https://github.com/RaulLit/mi-notez" },
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
          {isAnimeMode ? "[ MONARCH ARSENAL & CLEARED DUNGEONS ]" : "Featured Projects"}
          <span className={`absolute bottom-0 left-0 w-1/2 h-1 ${isAnimeMode ? "bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" : "bg-[#64FFDA]"}`}></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`glass-card rounded-2xl overflow-hidden flex flex-col ${isAnimeMode ? "border-[#00F0FF]/40 hover:border-[#00F0FF]" : ""}`}>
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                {isAnimeMode && (
                  <div className="absolute top-3 right-3 bg-[#050B14]/90 border border-[#00F0FF]/60 px-2.5 py-1 rounded text-[10px] font-mono font-bold text-[#00F0FF] tracking-wider shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                    [{project.rank}]
                  </div>
                )}
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-secondary mt-2">{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full font-mono ${
                          isAnimeMode
                            ? "bg-[#0B132B] text-[#00F0FF] border border-[#00F0FF]/30 shadow-[0_0_5px_rgba(0,240,255,0.2)]"
                            : "bg-[#112240] text-[#64FFDA]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.links.live}
                      className={`flex items-center hover:underline ${isAnimeMode ? "text-[#00F0FF] font-mono text-xs" : "text-[#64FFDA]"}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiExternalLinkLine size={16} className="mr-1" />
                      {isAnimeMode ? "[ ENTER GATE ]" : "Live Demo"}
                    </a>
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        className={`flex items-center hover:underline ${isAnimeMode ? "text-[#00F0FF] font-mono text-xs" : "text-[#64FFDA]"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiGithubLine size={16} className="mr-1" />
                        {isAnimeMode ? "[ SOURCE CODE ]" : "Code"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
