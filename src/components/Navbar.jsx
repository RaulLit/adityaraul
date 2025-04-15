import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (
          window.pageYOffset >= sectionTop &&
          window.pageYOffset < sectionTop + sectionHeight
        ) {
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
      <nav className="fixed top-0 left-0 w-full z-50 glass py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-secondary">Aditya Raul</a>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${link}`);
                }}
                className={`nav-link text-secondary hover:text-white ${activeSection === link ? "active" : ""}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-secondary"
            onClick={() => setMenuOpen(true)}
          >
            <i className="ri-menu-line ri-lg"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 glass flex-col justify-center items-center flex">
          <button
            className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center text-secondary"
            onClick={() => setMenuOpen(false)}
          >
            <i className="ri-close-line ri-lg"></i>
          </button>
          <div className="flex flex-col space-y-8 text-xl">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${link}`);
                }}
                className="text-secondary hover:text-white"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
