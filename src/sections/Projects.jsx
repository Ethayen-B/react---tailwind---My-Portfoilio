import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const catLists = [{ name: "All" }, { name: "Web" }, { name: "Design" }];

  const categories = [
    { id: 1, name: "A Simple Landing Page", category: "Web", image: "/projects/pic5.png" , tech: ['React', 'tailwind', 'Framer Motion'] , link: 'https://github.com/Ethayen-B/Tizaz-Landing-Page' },
    { id: 2, name: "Save the date Poster 1", category: "Design", image: "/projects/pic1.png",tech: ['Illustrator', ] , link: '' },
    { id: 3, name: "Save the date Poster 2", category: "Design" , image: "/projects/pic2.png", tech: ['Illustrator'], link: '' },
    { id: 4, name: "Todo App", category: "Web" ,image: "/projects/pic6.png" ,tech: ['React', 'tailwind'] , link: 'https://github.com/Ethayen-B/Todo-App'},
    { id: 5, name: "Reminder Poster", category: "Design", image: "/projects/pic3.png" , tech: ['Illustrator'] , link: ''},
    { id: 6, name: "Book Review Poster", category: "Design", image: "/projects/pic4.png" , tech: ['Illustrator'] , link: ''},
  ];

  const [isActive, setIsActive] = useState("All");
  const [allCategories, setAllCategories] = useState(categories);
  const [filter, setFilter] = useState("All");

  const handleButtonClick = (list) => {
    setIsActive(list.name);
    setFilter(list.name);
  };

  const filtered =
    filter === "All"
      ? allCategories
      : allCategories.filter((item) => item.category === filter);

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-400 text-secondary-foreground">
            My <span className="text-white font-serif italic">Projects</span>
          </h2>

          <p className="text-sm text-muted-foreground animate-fade-in animate-delay-300 py-4">
            Here are the projects i've done so far. in web development, mobile
            app development and also as a graphics Design.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center">
            <div className="glass p-3 rounded-full">
              {catLists.map((list) => (
                <button
                  key={list.name}
                  className={`mx-1 px-3 py-1 rounded-full ${isActive === list.name ? "bg-primary transition-colors duration-200" : ""}`}
                  onClick={() => handleButtonClick(list)}
                >
                  {list.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-5 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {filtered.map((list) => (
              <ProjectCard key={list.id} list={list} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
