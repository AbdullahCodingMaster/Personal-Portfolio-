import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";

const menuItems = [
  { id: 1, icon: <AiOutlineHome size={20} />, text: "Home", link: "#main" },
  { id: 2, icon: <BsPerson size={20} />, text: "About", link: "#about" },
  {
    id: 3,
    icon: <MdCastForEducation size={20} />,
    text: "Education",
    link: "#education",
  },
  {
    id: 4,
    icon: <AiOutlineProject size={20} />,
    text: "Projects",
    link: "#projects",
  },
  {
    id: 5,
    icon: <AiOutlineMail size={20} />,
    text: "Contact",
    link: "#contact",
  },
];

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div>
      {nav ? (
        <AiOutlineClose
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] text-3xl md:hidden text-white cursor-pointer hover:text-gray-400 transition-colors"
        />
      ) : (
        <AiOutlineMenu
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] text-3xl md:hidden text-white cursor-pointer hover:text-gray-400 transition-colors"
        />
      )}

      {nav && (
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col justify-center items-center z-20 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              onClick={handleNav}
              href={item.link}
              className="w-[80%] text-white flex items-center justify-center p-4 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              {item.icon}
              <span className="pl-4 text-lg">{item.text}</span>
            </a>
          ))}
        </div>
      )}

      <div className="hidden md:block fixed top-[30%] left-0 z-10">
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="p-4 bg-blue-600 text-white rounded-full shadow-lg shadow-gray-800 hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
