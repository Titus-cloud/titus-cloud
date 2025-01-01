"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Text Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-4xl lg:text-5xl sm:text-3xl mb-4 font-bold leading-tight">
            Hello, I'm{""}
            <br />
            <TypeAnimation
              sequence={[
                "Onzere Titus",
                2000, // Wait 2 seconds
                "Frontend Web Developer",
                2000, // Wait 2 seconds
              ]}
              wrapper="span"
              speed={50}
              className="inline-block text-purple-400"
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I am a passionate developer with a knack for crafting innovative web
            solutions. I thrive on solving problems through code and creating
            user-friendly, efficient, and visually stunning digital experiences.
            Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-full bg-white hover:bg-gray-300 text-black font-semibold w-full sm:w-auto">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-white hover:text-black border border-white text-white font-semibold w-full sm:w-auto">
              Download CV
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
