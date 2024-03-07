import { TypeAnimation } from "react-type-animation";
import heroPic from "../assets/profile.png";
import resumPDF from "../assets/resumPDF.pdf";

const Main = () => {
  const openResume = () => {
    window.open(resumPDF, "_blank");
  };

  return (
    <div
      id="main"
      className=" max-w-screen-xl py-16 md:pl-16 lg:max-w-screen-xl pb-0 mx-auto p-4"
    >
      <div className="border-2 border-blue-700 p-5 mx-auto flex flex-col md:flex-row justify-center items-center  md:px-4 h-screen">
        {/* Profile Picture Section */}
        <div className="h-[100%] w-[100%]   md:w-1/2 lg:w-1/3 rounded-lg  md:h-[100%]  flex justify-center items-center ">
          <img
            className="lg:w-full h-auto rounded-2xl sm:mt-1 "
            src={heroPic}
            alt="Profile"
          />
        </div>
        {/* Left Section - Name and Description */}
        <div className=" h-[100%] w-[100%] md:w-1/2 lg:w-2/3 text-center  md:text-left  md:h-full flex flex-col justify-center">
          <h1 className="text-3xl text-white md:text-4xl font-bold  font-sans mb-1 ">
            Muhammad Abdullah Awan
          </h1>
          <h2 className="text-base italic md:text-xl lg:text-2xl text-blue-300 font-light my-1">
            I&rsquo;m a{" "}
            <TypeAnimation
              sequence={[
                2000,
                " Software Engineer 🚀",
                2000,
                " Front End Developer 💻",
                2000,
                " Tech Enthusiast 🌐",
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
          <p className="text-base md:text-lg text-start md:text-justify mb-4">
            I excel in Frontend development, crafting engaging web apps with
            JavaScript, React, and Node.js. My commitment to innovation and
            learning ensures I deliver high-quality solutions, staying abreast
            of industry trends.
          </p>
          {/* Buttons Section */}
          <div className="flex justify-center md:justify-start items-center space-x-4 w-full">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/muhammad-abdullah-awan/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-300"
              onClick={openResume}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
