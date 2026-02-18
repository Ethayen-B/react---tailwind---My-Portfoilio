import { Github } from "lucide-react";
import React, { useState } from "react";

const ProjectCard = ({ list }) => {
  return (
    <div className="rounded-xl p-2 bg-surface border-2 border-primary/30 hover:border-primary/50">
      <img src={list.image} className="rounded-xl w-200 " />
      <div className="px-3 pt-4 text-center">
        <h2 className="font-semibold text-2xl">{list.name}</h2>
        <div className={`flex flex-wrap justify-center gap-2 mt-4 `}>
          {list.tech.map((tech, techId) => (
            <span
              className="px-3 py-1 bg-surface text-sm border border-primary/50  rounded-full text-muted-foreground"
              key={techId}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex mt-4 w-full gap-2 ">
          {list.category === "Design" ? (
            <></>
          ) : (
            <a
              href=""
              className="text-center rounded-lg flex items-center justify-center hover:bg-gray-900 py-2 bg-gray-600 w-full"
            >
              <Github />
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
