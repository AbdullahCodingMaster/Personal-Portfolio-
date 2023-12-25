import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center bg-no-repeat scale-x-[-1]"
        src="https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background Image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center sm:items-start px-2">
          <h1 className="sm:text-5xl text-2xl font-bold text-gray-800 ">
            I'm <br /> Muhammad Abdullah Awan
          </h1>
          <h2 className="sm:text-3xl text-1xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                " Sotware Engineer",
                2000,
                " Front End Developer",
                2000,
                " Back End Developer",
                2000,
                " MERN Stack Developer",
                2000,
                " Tech Enthusist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
