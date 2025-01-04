import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
  const btnstyles = isSelected ? "text-white bg-purple-500" : "text-[#ADB7BE] border-purple-600 rounded-full hover:border-white border-2"
  return (
    <button className={`${btnstyles}rounded-full border-2  px-6 py-3 text-xl cursor-pointer  hover:border-white"`} onClick={() => onClick(name)}>
    {name }
  </button>
  )
}

export default ProjectTag
