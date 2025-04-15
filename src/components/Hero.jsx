import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="animated-bg">
        {[
          { w: 80, h: 80, left: "10%", top: "10%", delay: "0s", duration: "25s" },
          { w: 120, h: 120, left: "20%", top: "60%", delay: "2s", duration: "30s" },
          { w: 50, h: 50, left: "70%", top: "30%", delay: "4s", duration: "18s" },
          { w: 150, h: 150, left: "80%", top: "70%", delay: "6s", duration: "35s" },
          { w: 60, h: 60, left: "50%", top: "50%", delay: "8s", duration: "22s" },
          { w: 100, h: 100, left: "30%", top: "80%", delay: "10s", duration: "28s" }
        ].map((bg, index) => (
          <span
            key={index}
            style={{
              width: `${bg.w}px`,
              height: `${bg.h}px`,
              left: bg.left,
              top: bg.top,
              animationDelay: bg.delay,
              animationDuration: bg.duration
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h2 className="text-xl text-[#64FFDA]">Hello, my name is</h2>
              <h1 className="text-5xl md:text-7xl font-bold mt-2 text-white">Aditya Raul</h1>
              <div className="flex items-center mt-4">
                <h3 className="text-2xl md:text-3xl text-secondary">Developer</h3>
                <span className="mx-3 text-secondary">|</span>
                <h3 className="text-2xl md:text-3xl text-secondary">Creator</h3>
              </div>
            </div>
            <p className="text-lg text-secondary max-w-xl">
              I build exceptional digital experiences with a focus on performance and user experience.
              Specializing in modern web technologies and creative problem solving.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:bg-opacity-10 rounded-button whitespace-nowrap"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-[#64FFDA] text-primary hover:bg-opacity-90 rounded-button whitespace-nowrap"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right image card */}
          <div className="md:w-1/2 glass-card p-8 rounded-lg">
            <div
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20Indian%20male%20developer%20with%20a%20modern%2C%20minimalist%20aesthetic%2C%20navy%20blue%20background%2C%20high%20quality%20studio%20lighting%2C%20professional%20attire%2C%20friendly%20expression%2C%20looking%20confident&width=500&height=600&seq=1&orientation=portrait')`
              }}
              className="w-full h-[400px] bg-cover bg-center rounded object-top"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
