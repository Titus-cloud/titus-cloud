import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-top-[#33353F] border-l-transparent text-white ">
      <div className="container p-6 flex justify-between">
        <img
            src="/images/Titus_Logo.svg"
            alt="Titus Logo"
            className="h-10 md:h-16"
          />
        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
