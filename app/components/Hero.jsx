"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7  place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl lg:text-6xl sm:text-5xl mb-4 font-bold">
            Hello, I'm {''},
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Onzere Titus',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Web Developer',
        // 1000,
        // 'We produce food for Guinea Pigs',
        // 1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
            I am a passionate developer with a knack for crafting innovative web
            solutions. I thrive on solving problems through code and creating
            user-friendly, efficient, and visually stunning digital experiences.
            Let's build something amazing together
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black w-full sm:w-fit">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover: bg-slate-800 text-white border border-white mt-3 w-full sm:w-fit ">Download CV</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-8">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
