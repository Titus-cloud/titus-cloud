"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// import resume from "../../public/images/resume.pdf"

const Hero = () => {
  return (
    <section className="lg:py-10 text-white py-16 px-6 sm:px-6 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-8 lg:leading-normal place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-4xl lg:text-5xl sm:text-3xl mb-4 font-bold leading-tight">
            Hello, I'm
            <br />
            <TypeAnimation
              sequence={[
                "Onzere Titus",
                2000, // Wait 2 seconds
                "Frontend Web Developer",
                2000, // Wait 2 seconds
                "Backend Web Developer",
                2000, // Wait 2 seconds
                "Fullstack Web Developer",
                2000, // Wait 2 seconds
                "Word Press Developer",
                2000, // Wait 2 seconds
                "React Native Developer",
                2000, // Wait 2 seconds
              ]}
              wrapper="span"
              speed={50}
              className="inline-block text-purple-400"
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE]  text-base sm:text-lg lg:text-xl mb-6">
            I am a passionate developer with a knack for crafting innovative web
            solutions. I thrive on solving problems through code and creating
            user-friendly, efficient, and visually stunning digital experiences.
            Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <button
                className="px-6 py-3 rounded-full bg-purple-500 hover:bg-transparent hover:text-white border border-purple-500 text-black font-semibold w-full sm:w-auto"
                aria-label="Hire Me"
              >
                Hire Me
              </button>
            </a>

            <a
              href="images/resume.pdf"
              download="resume"
              aria-label="Download CV"
              className="w-full sm:w-auto"
            >
              <button className="px-6 py-3 rounded-full bg-transparent hover:bg-purple-500 hover:text-black border border-purple-500 text-white font-semibold w-full sm:w-auto">
                Download CV
              </button>
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-4 place-self-center hidden sm:block"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center mt-10">
            <Image
              src="/images/prof.jpeg"
              alt="Hero Image"
              width={350}
              height={350}
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
