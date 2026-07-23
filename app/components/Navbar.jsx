"use client";

import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { useAnimeTheme } from "../providers/AnimeThemeProvider";

export default function Navbar() {
  const { isAnimeMode } = useAnimeTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const links = ["home", "about", "projects", "skills", "photography", "contact"];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${isAnimeMode ? "bg-[#050B14]/80 border-b border-[#00F0FF]/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,240,255,0.15)]" : "glass"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#home" className={`text-2xl font-bold ${isAnimeMode ? "font-mono text-[#00F0FF] tracking-wider text-shadow-[0_0_10px_#00F0FF]" : "text-secondary"}`}>
            {isAnimeMode ? "[ ADITYA.RAUL ]" : "Aditya Raul"}
          </a>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${link}`);
                }}
                className={`nav-link text-secondary hover:text-white ${isAnimeMode ? "font-mono text-xs uppercase" : ""} ${activeSection === link ? "active text-[#00F0FF]" : ""}`}
              >
                {isAnimeMode ? `[ ${link} ]` : link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center ${isAnimeMode ? "text-[#00F0FF]" : "text-secondary"}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open mobile navigation menu"
          >
            <RiMenuLine size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`fixed inset-0 z-50 flex-col justify-center items-center flex ${isAnimeMode ? "bg-[#050B14]/95 backdrop-blur-xl border border-[#00F0FF]/50" : "glass"}`}>
          <button
            className={`absolute top-4 right-6 w-10 h-10 flex items-center justify-center ${isAnimeMode ? "text-[#00F0FF]" : "text-secondary"}`}
            onClick={() => setMenuOpen(false)}
            aria-label="Close mobile navigation menu"
          >
            <RiCloseLine size={22} />
          </button>
          <div className="flex flex-col space-y-8 text-xl text-center">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${link}`);
                }}
                className={`${isAnimeMode ? "font-mono text-[#00F0FF] text-lg uppercase tracking-wider" : "text-secondary hover:text-white"}`}
              >
                {isAnimeMode ? `[ ${link} ]` : link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
