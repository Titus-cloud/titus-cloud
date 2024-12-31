import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

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
  return (
    <nav>
      <div className="flex flex-wrap items-center text-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu block md:w-auto" id="navbar">
          <ul>
            {/* <li>
              <Link
                href={"#about"}
                className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-8 hover:text-white text-[#ADB7BE]"
              >
                About
              </Link>
            </li> */}

            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
