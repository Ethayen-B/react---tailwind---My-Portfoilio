import React from "react";
import { DiIllustrator, DiMongodb, DiPhotoshop } from "react-icons/di";
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaJs, FaNode, FaReact } from "react-icons/fa";
import { FaFlutter, FaPhp } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, level: 95 },
    { name: "CSS", icon: FaCss3, level: 90 },
    { name: "Java Script", icon: FaJs, level: 70 },
    { name: "PHP", icon: FaPhp, level: 25 },
    { name: "SQL", icon: TbSql, level: 20 },
    { name: "React", icon: FaReact, level: 70 },
    { name: "Node JS", icon: FaNode, level: 55 },
    { name: "Mongo", icon: DiMongodb, level: 50 },
    { name: "Tailwind", icon: SiTailwindcss, level: 80 },
    { name: "Bootstrap", icon: FaBootstrap, level: 75 },
    { name: "Illustrator", icon: DiIllustrator, level: 90 },
    { name: "Photoshop", icon: DiPhotoshop, level: 75 },
    { name: "Flutter", icon: FaFlutter, level: 15 },
    { name: "Java", icon: FaJava, level: 10 },
  ];
  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-400 text-secondary-foreground">
            My <span className="text-white font-serif italic">Skills</span>
          </h2>
        </div>

        <div className="flex flex-wrap m-4">
          {skills.map((skill, idx) => (
            <div className="p-4 lg:w-1/4 md:w-1/2 w-full" key={idx}>
              <div className="h-full p-6 rounded-2xl border border-primary/30 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_0_3px_rgba(255,165,0,0,0.15)]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-xl p-3 flex items-center text-primary justify-center group-hover:scale-110 transition-transform duration-300 glass">
                    {<skill.icon size={50} />}
                  </div>
                  <h3 className="md:text-xl text-3xl font-bold ml-2 ">{skill.name}</h3>
                </div>
                <div className="mb-2 flex justify-between items-center">
                  <span className="font-medium">Proficiency</span>
                  <span className="font-bold">{skill.level}%</span>
                </div>
                <div className="w-full rounded-full h-3 overflow-hidden bg-gray-800">
                    <div className="h-full rounded-full bg-primary transition-all duration-1000 ease-in" style={{width: `${skill.level}%`}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
