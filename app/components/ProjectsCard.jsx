import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectsCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      {/* Image Section */}
      <div
        className="h-62 md:h-72 rounded-t-xl  group relative"
        style={{
          backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover'
        }}
        aria-label={title}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-50 transition-all duration-500">
          <Link
            href="gitUrl"
            className="h-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white "
          >
            <CodeBracketIcon
              className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white"
              b
            />
          </Link>
          <Link
            href="previewUrl"
            className="h-14 border-2 ml-4 relative rounded-full border-[#ADB7BE] hover:border-white "
          >
            <EyeIcon
              className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white"
              b
            />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-white bg-gray-900 mt-1 mb-5 px-4 py-6 rounded-b-xl">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;