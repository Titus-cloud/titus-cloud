"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Pizzara",
    description: "Simple e-commerce website for selling pizzas",
    images: "/images/pizara.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Titus-cloud/My-pizzara-project",
    previewUrl: "https://titus-cloud.github.io/My-pizzara-project/",
  },
  {
    id: 2,
    title: "Clozzet",
    description: "An e-commerce website for wardrobe products.",
    images: "/images/clozet.png",
    tag: ["All"], // Fixed to array
    gitUrl: "https://github.com/Titus-cloud/my-react-course",
    previewUrl: "https://my-react-course.vercel.app/",
  },
  {
    id: 3,
    title: "Candy Coffee Cafe",
    description: "A basic landing page for a pizza e-commerce website.",
    images: "/images/candycoffee.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Titus-cloud/candy-coffee-cafe",
    previewUrl: "https://titus-cloud.github.io/candy-coffee-cafe/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // remove once: true if you want it to trigger every time

  const cardVary = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTag = (newTag) => {
    setTag(newTag);
  };

  const filterProject = projectsData.filter(
    (project) => Array.isArray(project.tag) && project.tag.includes(tag)
  );

  return (
    <section ref={ref} id="projects">
      <div className="py-8 px-4">
        <h1 className="text-center text-4xl font-bold mb-8">My Projects</h1>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag onClick={handleTag} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTag} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTag} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {filterProject.length > 0 ? (
            filterProject.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVary}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3,delay: index *0.4}}
              >
                <ProjectsCard
                  title={project.id}
                  description={project.description}
                  imgUrl={project.images}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.div>
            
            ))
          ) : (
            <p className="text-center col-span-full">No projects found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
