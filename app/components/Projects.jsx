"use client"
import React, {useState} from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Medic Care Clinic",
    description: "A basic landing page for a medical clinic.",
    images: "/images/medic.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Clozzet",
    description: "An e-commerce website for wardrobe products.",
    images: "/images/clozet.png",
    tag: "All",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Pizzara",
    description: "A basic landing page for a pizza e-commerce website.",
    images: "/images/pizara.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 1,
  //   title: "Medic Care Clinic",
  //   description: "A basic landing page for a medical clinic.",
  //   images: "/images/medic.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 2,
  //   title: "Clozzet",
  //   description: "An e-commerce website for wardrobe products.",
  //   images: "/images/clozet.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const Projects = () => {
  const [tag, setTag] = useState('All') 
  const handleTag = (newTag) =>{
    setTag(newTag)
  }
  
  const filterProject = projectsData.filter((project) => 
    project.tag.includes(tag)
  )
  return (
    <div className="py-8 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">My Projects</h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 horver:border-white">
     <ProjectTag onClick={handleTag} name="All" isSelected={tag === "All"} />

     <ProjectTag onClick={handleTag} name="Web" isSelected={tag === "Web"} />

     <ProjectTag onClick={handleTag} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProject.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.images}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
