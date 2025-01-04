import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Email = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my:12 py-24 gap-4">
      <div>
        <h5 className="text-xl fond-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently lookinf for opportunities for growth, my mailbox is
          always open for any email. Whether you have a question or you just
          want to say hi, I will always get back to you.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <FaGithub />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6">
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-1 text-sm">
              {" "}
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3 "
              placeholder="titustio@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm">
              {" "}
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3 "
              placeholder="Tell me something I am here for you"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3 resize-none h-28"
              placeholder="Leave for me a message here please "
            ></textarea>
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg w-full">
            Send Message 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
