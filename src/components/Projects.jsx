import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20dark%20theme&width=400&height=250&seq=3&orientation=landscape",
    links: { live: "#", code: "#" },
  },
  {
    title: "Fitness Tracker App",
    description:
      "A mobile application for tracking workouts, nutrition, and progress with personalized recommendations and social features.",
    tech: ["React Native", "Firebase", "TensorFlow"],
    image:
      "https://readdy.ai/api/search-image?query=mobile%20app%20interface%20for%20fitness%20tracking&width=400&height=250&seq=4&orientation=landscape",
    links: { live: "#", code: "#" },
  },
  {
    title: "AI Assistant Platform",
    description:
      "An intelligent virtual assistant platform with natural language processing capabilities for customer support and task automation.",
    tech: ["Python", "TensorFlow", "Vue.js", "FastAPI"],
    image:
      "https://readdy.ai/api/search-image?query=AI-powered%20chatbot%20interface&width=400&height=250&seq=5&orientation=landscape",
    links: { live: "#", code: "#" },
  },
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive data visualization platform for business intelligence with real-time monitoring and customizable reports.",
    tech: ["D3.js", "Angular", "Express", "PostgreSQL"],
    image:
      "https://readdy.ai/api/search-image?query=data%20visualization%20dashboard&width=400&height=250&seq=6&orientation=landscape",
    links: { live: "#", code: "#" },
  },
  {
    title: "Blockchain Wallet",
    description:
      "A secure cryptocurrency wallet with multi-chain support, transaction history, and advanced security features.",
    tech: ["Solidity", "Web3.js", "React", "Ethers.js"],
    image:
      "https://readdy.ai/api/search-image?query=blockchain%20application%20interface&width=400&height=250&seq=7&orientation=landscape",
    links: { live: "#", code: "#" },
  },
  {
    title: "Smart Home System",
    description:
      "An IoT platform for smart home automation with device management, scene creation, and voice control integration.",
    tech: ["IoT", "MQTT", "React", "Node.js"],
    image:
      "https://readdy.ai/api/search-image?query=smart%20home%20control%20application&width=400&height=250&seq=8&orientation=landscape",
    links: { live: "#", code: "#" },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
          Featured Projects
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#64FFDA]"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card rounded-lg overflow-hidden">
              <div
                style={{
                  backgroundImage: `url('${project.image}')`,
                }}
                className="w-full h-48 bg-cover bg-center object-top"
              ></div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-secondary">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-[#112240] text-[#64FFDA] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-2">
                  <a
                    href={project.links.live}
                    className="flex items-center text-[#64FFDA] hover:underline"
                  >
                    <i className="ri-external-link-line mr-1"></i>Live Demo
                  </a>
                  <a
                    href={project.links.code}
                    className="flex items-center text-[#64FFDA] hover:underline"
                  >
                    <i className="ri-github-line mr-1"></i>Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="px-6 py-3 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:bg-opacity-10 rounded-button whitespace-nowrap"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
