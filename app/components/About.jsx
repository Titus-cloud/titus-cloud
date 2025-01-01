import React from "react";
// import about from '../../public/images'
import Image from "next/image";

const About = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={300} height={300} />

        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate and driven web developer with a keen interest in building modern, user-friendly websites and
            applications. I thrive on solving problems through code and creating designs that not only look great but also provide excellent user        experiences. With a strong foundation in HTML, CSS, and JavaScript, I enjoy crafting responsive and interactive web solutions. Myjourney as a developer has been fueled by curiosity and a continuous desire to learn new echnologies. When I'm not coding, you can find
            me exploring design ideas, learning new skills, or brainstorming creative solutions to everyday challenges. Feel free to explore my portfolio and connect with me—I’d love to collaborate and bring impactful ideas to life!
          </p>

          {/* skills */}
        </div>
      </div>
    </section>
  );
};

export default About;
