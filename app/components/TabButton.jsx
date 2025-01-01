import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-purple-500"
    : "text-[#ADB7BE] hover:text-white";

  return (
    <button
      onClick={selectTab}
      className={`mr-4 font-semibold cursor-pointer transition-colors duration-500 ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
