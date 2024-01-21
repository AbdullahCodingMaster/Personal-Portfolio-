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
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import SocialIconLink from "./SocialIconLink";

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

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const downloadResume = () => {
    // Replace the link with the actual path to your PDF file
    const resumePdfLink = "path-to-your-resume.pdf";
    window.open(resumePdfLink, "_blank");
  };

  return (
    <div className="md:flex hidden">
      <div className="fixed top-[25%] z-10">
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

      <nav className="fixed top-0 w-full bg-white text-white p-4 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-bold">
            <a href="#" className="text-green-500 italic text-sm transition">
              AbdullahCodingMaster
            </a>
          </h2>
          <div className="hidden md:flex space-x-4">
            <SocialIconLink
              link="https://twitter.com/Muhamma99892934"
              icon={<FaTwitter size={20} color="blue" />}
            />
            <SocialIconLink
              link="https://web.facebook.com/profile.php?id=100092121775499"
              icon={<FaFacebookF size={20} color="blue" />}
            />
            <SocialIconLink
              link="https://www.instagram.com/muhammadabdullahawan324/"
              icon={<FaInstagram size={20} color="red" />}
            />
            <SocialIconLink
              link="https://www.linkedin.com/in/muhammad-abdullah-awan/"
              icon={<FaLinkedinIn size={20} color="blue" />}
            />
            <SocialIconLink
              link="https://github.com/AbdullahCodingMaster"
              icon={<FaGithub size={20} color="black" />}
            />
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        {nav ? (
          <AiOutlineClose
            onClick={handleNav}
            className="absolute top-4 right-4 z-[99] text-black font-bold"
          />
        ) : (
          <AiOutlineMenu
            onClick={handleNav}
            className="absolute top-4 right-4 z-[99] text-black font-bold"
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
            {/* Include Resume button in the mobile menu */}
            <button
              className="text-green-500 border border-green-500 px-4 py-2 rounded mt-4"
              onClick={downloadResume}
            >
              Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
