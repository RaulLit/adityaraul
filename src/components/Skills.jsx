import React from "react";

const skills = [
  {
    category: "Frontend",
    icon: "ri-code-s-slash-line",
    data: [
      { label: "React", value: 95 },
      { label: "JavaScript", value: 90 },
      { label: "HTML/CSS", value: 95 },
      { label: "TypeScript", value: 85 },
      { label: "Angular", value: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "ri-server-line",
    data: [
      { label: "Node.js", value: 90 },
      { label: "Express", value: 85 },
      { label: "Python", value: 80 },
      { label: "Django", value: 75 },
      { label: "GraphQL", value: 80 },
    ],
  },
  {
    category: "Database",
    icon: "ri-database-2-line",
    data: [
      { label: "MongoDB", value: 90 },
      { label: "PostgreSQL", value: 85 },
      { label: "MySQL", value: 80 },
      { label: "Redis", value: 75 },
      { label: "Firebase", value: 85 },
    ],
  },
  {
    category: "Other Skills",
    icon: "ri-tools-line",
    data: [
      { label: "Docker", value: 80 },
      { label: "AWS", value: 75 },
      { label: "Git", value: 95 },
      { label: "TensorFlow", value: 70 },
      { label: "CI/CD", value: 85 },
    ],
  },
];

const SkillBar = ({ label, value }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-secondary">{label}</span>
      <span className="text-[#64FFDA]">{value}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
          Skills & Expertise
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#64FFDA]"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((section, idx) => (
            <div className="glass-card p-6 rounded-lg" key={idx}>
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-[#64FFDA]">
                <i className={`${section.icon} ri-2x`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{section.category}</h3>
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
};

export default Skills;
