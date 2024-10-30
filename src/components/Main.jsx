import { TypeAnimation } from "react-type-animation";
import heroPic from "../assets/profile.png";
import resumPDF from "../assets/resumPDF.pdf";

const Main = () => {
  const openResume = () => {
    window.open(resumPDF, "_blank");
  };

  return (
    <div id="main" className="max-w-screen-xl py-16 mx-auto px-4">
      <div className="p-8 mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10 bg-gray-900 rounded-xl shadow-lg">
        {/* Profile Picture Section */}
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[70%] md:w-full h-auto rounded-3xl shadow-md transition-transform duration-300 hover:scale-105"
            src={heroPic}
            alt="Profile"
          />
        </div>

        {/* Name and Description Section */}
        <div className="w-full md:w-2/3 text-center md:text-left flex flex-col justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl text-white font-extrabold tracking-wide mb-2">
            Muhammad Abdullah Awan
          </h1>

          <h2 className="text-base md:text-lg text-gray-400 italic font-light mb-2">
            I’m a{" "}
            <TypeAnimation
              sequence={[
                2000,
                "Software Engineer 🚀",
                2000,
                "Front End Developer 💻",
                2000,
                "MERN Stack Developer 🌐",
                2000,
                "AI Explorer 🤖",
                2000,
                "Tech Enthusiast 🔍",
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            I specialize in frontend development and crafting robust web
            applications using JavaScript, React, and Node.js. Additionally, I
            am skilled in PHP and Laravel for backend solutions. My dedication
            to innovation and continuous learning drives me to explore AI
            technologies, ensuring that I deliver high-quality solutions aligned
            with the latest industry trends.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-6">
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
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
              className="bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
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
