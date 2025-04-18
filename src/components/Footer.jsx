import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#0A192F] border-t border-[#112240]">
      <div className="max-w-7xl mx-auto px-6 text-center text-secondary ">
        <p>© 2025 All Rights Reserved</p>
        <p>
          Designed & Built with ❤️ by <span className="text-highlight">Aditya Raul</span>
        </p>
        <a
          href="#home"
          className="mt-2 w-10 h-10 flex items-center justify-center glass-card rounded-full text-[#64FFDA] hover:text-white transition-colors"
        >
          <i className="ri-arrow-up-line ri-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
