"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  // This state is to keep track of the links when they are opened or closed
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] opacity-80">
      <div className="flex flex-wrap items-center text-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 shadow-lg"
        >
          Titus
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={()=> setNavbarOpen(true)} className="flex items-center px-3 py-3 border rounded border-slate-200 hover:text-white  hover:border-white text-slate-500">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={()=> setNavbarOpen(false)} className="flex items-center px-3 py-3 border rounded border-slate-200 hover:text-white  hover:border-white text-slate-500">
            <XMarkIcon className="h-5 w-5" />
          </button>
          )}
        </div>
        <div className="menu hidden md:flex space-x-8" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {/* <li>
              <Link
                href={"#about"}
                className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-8 hover:text-white text-[#ADB7BE]"
              >
                About
              </Link>
            </li> */}

            {/* just maping through the nav links */}
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

    </nav>
  );
};

export default Navbar;
