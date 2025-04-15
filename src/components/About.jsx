import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
          About Me
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#64FFDA]"></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="md:w-2/5">
            <div className="glass-card p-4 rounded-lg">
              <div
                style={{
                  backgroundImage:
                    "url('https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20Indian%20male%20developer%20in%20casual%20professional%20attire%2C%20sitting%20at%20a%20modern%20workspace%20with%20multiple%20monitors%2C%20navy%20blue%20ambient%20lighting%2C%20focused%20on%20coding%2C%20side%20profile%2C%20high%20quality%20professional%20photography&width=500&height=600&seq=2&orientation=portrait')",
                }}
                className="w-full h-[500px] bg-cover bg-center rounded-lg object-top"
              ></div>
            </div>
          </div>

          {/* Text content */}
          <div className="md:w-3/5 space-y-6">
            <p className="text-lg text-secondary">
              Hello! I'm Aditya, a passionate developer based in Mumbai, India with over 5 years of
              experience in building digital products and experiences.
            </p>
            <p className="text-lg text-secondary">
              My journey in tech began during my undergraduate studies at the Indian Institute of
              Technology, where I discovered my passion for creating elegant solutions to complex
              problems. Since then, I've worked with various technologies and frameworks to deliver
              high-quality applications.
            </p>
            <p className="text-lg text-secondary">
              When I'm not coding, you'll find me exploring the world through my camera lens,
              hiking in nature, or experimenting with new cooking recipes. I believe that diverse
              experiences fuel creativity in problem-solving.
            </p>
            <p className="text-lg text-secondary">
              Currently, I'm focused on building accessible, human-centered products at Innovate
              Technologies, where I lead the frontend development team.
            </p>

            {/* Quick Facts */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "ri-graduation-cap-line",
                    text: "B.Tech in Computer Science",
                  },
                  {
                    icon: "ri-map-pin-line",
                    text: "Mumbai, India",
                  },
                  {
                    icon: "ri-briefcase-line",
                    text: "5+ Years Experience",
                  },
                  {
                    icon: "ri-translate-2",
                    text: "English, Hindi, Marathi",
                  },
                ].map((fact, idx) => (
                  <div className="flex items-start" key={idx}>
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-[#64FFDA]">
                      <i className={fact.icon}></i>
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
};

export default About;
