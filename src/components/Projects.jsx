import React from "react";

const projects = [
  {
    title: "Hubbie Chat",
    description:
      "Just another chatting application which has active feature additions from student's feedbacks.",
    tech: ["React", "Node.js", "MongoDB", "Material-UI", "Firebase", "Socket.io"],
    image: "/projects/hubbie_chat.png",
    links: { live: "https://chat.lastbenchscholar.com/" },
  },
  {
    title: "Blogging Platform",
    description:
      "It has a minimalistic design and promotes upskilling specifically for student's lifestyle through blogs.",
    tech: ["React", "Node.js", "MongoDB", "Material-UI"],
    image: "/projects/blogging.png",
    links: { live: "https://blog.lastbenchscholar.com/" },
  },
  {
    title: "Meteor Strike",
    description:
      "A comprehensive data visualization platform for business intelligence with real-time monitoring and customizable reports.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    image: "/projects/meteor_strike.png",
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
    links: { live: "https://mi-notez.web.app/", code: "https://github.com/RaulLit/mi-notez" },
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
            <div key={idx} className="glass-card rounded-2xl overflow-hidden">
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
                    target="_blank"
                  >
                    <i className="ri-external-link-line mr-1"></i>Live Demo
                  </a>
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      className="flex items-center text-[#64FFDA] hover:underline"
                      target="_blank"
                    >
                      <i className="ri-github-line mr-1"></i>Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="px-6 py-3 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:bg-opacity-10 rounded-lg whitespace-nowrap"
          >
            View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
