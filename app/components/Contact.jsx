"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x359udh",
        "template_l5wgorn",
        form.current,
        "6pDe_zthudr5xBhtq"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailSubmitted(true);
          form.current.reset();

          setTimeout(() => {
            setEmailSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="grid md:grid-cols-2  py-24 ml-16 mr-16">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for opportunities for growth. My mailbox is
          always open for any email. Whether you have a question or just want to
          say hi, I will always get back to you.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Titus-cloud" className="h-16 w-16">
            <FaGithub className="text-4xl" />
          </Link>

          <Link href="https://facebook.com" className="h-16 w-16">
            <FaFacebook className="text-4xl" />
          </Link>

          <Link href="https://www.linkedin.com/in/titus-onzere-914164313/" className="h-16 w-16">
            <FaLinkedinIn className="text-4xl" />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} className="flex flex-col gap-6" onSubmit={sendEmail}>
          <div className="mb-1">
            <label htmlFor="name" className="text-white block mb-1 text-sm">
              Name
            </label>
            <input
              name="user_name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3"
              placeholder="Your name"
            />
          </div>

          <div className="mb-1">
            <label htmlFor="email" className="text-white block mb-2 text-sm">
              Email
            </label>
            <input
              name="from_name"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3"
              placeholder="Your email"
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3 resize-none h-28"
              placeholder="Leave your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-transparent hover:bg-purple-500 hover:text-black border border-purple-500 text-white font-semibold w-full sm:w-auto"
          >
            Send Message
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-[16px] text-bold mt-3 text-center">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Email;
