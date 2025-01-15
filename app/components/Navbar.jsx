"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed border border-[#33353F] bg-gradient-to-br from-gray-800 to-gray-900 top-0 right-0 left-0 z-10 bg-[#121212] opacity-100">
      <div className="flex container lg:py-2 flex-wrap items-center text-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          {/* Use the logo */}
          <img
            src="/images/Titus_Logo.svg"
            alt="Titus Logo"
            className="h-10 md:h-16"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-3 border rounded border-slate-200 hover:text-white hover:border-white text-slate-500"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-3 border rounded border-slate-200 hover:text-white hover:border-white text-slate-500"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex space-x-8" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={() => setNavbarOpen(false)} // Close the navbar if needed
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
