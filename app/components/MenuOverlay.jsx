import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="fixed inset-0 z-20 bg-[#121212] bg-opacity-90 flex justify-center items-center">
      <ul className="flex flex-col py-4 items-center space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              onClick={onClose} // Close the overlay when a link is clicked
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
