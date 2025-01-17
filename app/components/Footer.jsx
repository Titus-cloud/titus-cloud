import React from "react";

const Footer = () => {
  return (
    <footer className="footer  border border-top-[#33353F] border-l-transparent text-white align-center">
      <div className=" pt-6 pb-6 container m-auto flex justify-between align-center items-center">
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
