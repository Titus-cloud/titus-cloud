import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      scroll={false} // Prevent default scroll behavior
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-8 hover:text-white text-[#ADB7BE]"
      onClick={(e) => {
        e.preventDefault(); // Prevent default link behavior
        const target = document.querySelector(href); // Find the target section
        if (target) {
          target.scrollIntoView({ behavior: "smooth" }); 
        }
        if (onClick) onClick(); 
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
