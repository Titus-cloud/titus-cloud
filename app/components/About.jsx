"use client";

import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // The content of the transition
  const tab_data = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-4">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Figma</li>
          <li>Tailwind CSS</li>
          <li>Firebase</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-4">
          {/* <li>HTML5</li>
         <li>CSS3</li>
         <li>JavaScript</li>
         <li>React.js</li>
         <li>Next.js</li>
          <li>Figma</li>
          <li>Tailwind CSS</li>
          <li>Firebase</li> */}
          <li>Still schooling at MYC Tech academy</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-4">
          {/* <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Figma</li>
          <li>Tailwind CSS</li>
          <li>Firebase</li> */}
          <li>Still schooling at MYC Tech academy</li>
        </ul>
      ),
    },
  ];
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          width={300}
          height={300}
          alt="This is the pic of what I do"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate and driven web developer with a keen interest in
            building modern, user-friendly websites and applications. I thrive
            on solving problems through code and creating designs that not only
            look great but also provide excellent user experiences. With a
            strong foundation in HTML, CSS, and JavaScript, I enjoy crafting
            responsive and interactive web solutions. My journey as a developer
            has been fueled by curiosity and a continuous desire to learn new
            technologies. When I'm not coding, you can find me exploring design
            ideas, learning new skills, or brainstorming creative solutions to
            everyday challenges. Feel free to explore my portfolio and connect
            with me—I’d love to collaborate and bring impactful ideas to life!
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-start flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8 ">
            {tab_data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
