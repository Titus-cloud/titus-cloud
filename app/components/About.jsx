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
          <li>Python</li>
          <li>React Native</li>
          <li>Word Press</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-4">
          <li>MYC Tech Academy</li>
        </ul>
      ),
    },
    // {
    //   title: "Experience",
    //   id: "experience",
    //   content: (
    //     <ul className="list-disc pl-4">
    //       <li>Still schooling at MYC Tech Academy</li>
    //     </ul>
    //   ),
    // },
  ];

  return (
    <section
      className="text-white bg-gradient-to-br from-gray-800 to-gray-900 py-8 px-4 rounded-xl shadow-lg place-self-center "
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 sm:py-16 xl:px-16">
        {/* Image Section */}
        <div className="hidden-on-small image-container">
          <Image
            src="/images/abt.jpeg" 
            width={400}
            height={400}
            alt="A glimpse into my work life"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="text-base lg:text-lg text-gray-300">
            I'm a passionate web developer focused on creating modern,
            user-friendly websites and applications. With expertise in HTML,
            CSS, and JavaScript, I enjoy solving problems through code and
            crafting responsive, interactive solutions. Always eager to learn
            new technologies, I'm also exploring design and brainstorming
            creative solutions. Feel free to check out my portfolio and
            connect—let's collaborate and bring ideas to life!
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-start flex-row mt-8">
            {tab_data.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8 text-gray-200">
            {tab_data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
