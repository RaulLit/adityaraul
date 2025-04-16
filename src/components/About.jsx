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
                    "url('/about_img.jpeg')",
                }}
                className="w-full h-[500px] bg-cover bg-center rounded-lg object-top"
              ></div>
            </div>
          </div>

          {/* Text content */}
          <div className="md:w-3/5 space-y-6">
            <p className="text-lg text-secondary">
              Hello! <span className="text-highlight">I'm Aditya</span>, a passionate developer based in Navi Mumbai, India with
              experience in building mobile applications, websites and other digital products.
            </p>
            <p className="text-lg text-secondary">
              My journey in tech began after 12th boards during Covid-19 pandemic, I started with 
              Java as my first coding language. Later on, I started exploring the field of development,
              where I found my passion for creating elegant solutions to day to day problems. 
              Since then, I've worked with various technologies and frameworks to deliver
              high-quality applications.
            </p>
            <p className="text-lg text-secondary">
              When I'm not coding, you'll find me exploring the world through my camera lens,
              hiking in nature, playing basketball or playing guitar & trying to sing. I believe that learning 
              diverse skills in tech & non-tech keeps fueling the excitement in me.
            </p>
            <p className="text-lg text-secondary">
              Currently, I'm focused on building my own brand <a className="text-highlight" href="https://lastbenchscholar.com" target="_blank">LastBenchScholar</a>,
              a student centric ecosystem for growth and collaboration.
            </p>

            {/* Quick Facts */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "ri-graduation-cap-line",
                    text: "B.E in Electronics & Telecommunication",
                  },
                  {
                    icon: "ri-map-pin-line",
                    text: "Navi Mumbai, Maharashtra, India",
                  },
                  {
                    icon: "ri-briefcase-line",
                    text: "Web & App developer",
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
