import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";

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

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {nav ? (
        <AiOutlineClose
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] font-extrabold md:hidden text-green-500"
        />
      ) : (
        <AiOutlineMenu
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] font-extrabold md:hidden text-green-500"
        />
      )}

      {nav && (
        <div className="fixed h-screen w-full bg-white/90 flex flex-col justify-center items-center z-20">
          {menuItems.map((item) => (
            <a
              key={item.id}
              onClick={handleNav}
              href={item.link}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              {item.icon}
              <span className="pl-4">{item.text}</span>
            </a>
          ))}
        </div>
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
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
