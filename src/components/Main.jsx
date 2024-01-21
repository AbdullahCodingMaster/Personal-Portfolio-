import { TypeAnimation } from "react-type-animation";
import heroPic from "../assets/myprofile.png";
import resumPDF from "../assets/resumPDF.pdf";

const Main = () => {
  const openResume = () => {
    window.open(resumPDF, "_blank");
  };

  return (
    <div
      id="main"
      className="flex flex-col  md:flex-row justify-evenly items-center py-[8.5rem] md:px-16 lg:max-w-screen-xl pb-0 mx-auto p-4 md:pl-16"
    >
      {/* Profile Picture Section */}
      <div className="flex items-center mb-8 md:mb-0 md:hidden">
        <img
          className="w-45 h-40 object-cover object-center bg-no-repeat"
          alt="Profile"
          src={heroPic}
        />
      </div>

      {/* Left Section - Name and Description */}
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-3xl  md:text-4xl font-bold text-start text-[#2c3e50] font-serif">
          I am, <br /> Muhammad Abdullah Awan
        </h1>

        <h2 className="text-base md:text-xl text-start lg:text-2xl pt-4 text-emerald-700 font-semibold font-mono">
          I am a{" "}
          <TypeAnimation
            sequence={[
              2000,
              " Software Engineer 🚀",
              2000,
              " Front End Developer 💻",
              2000,
              " Back End Developer ⚙️",
              2000,
              " MERN Stack Developer 🛠️",
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

        <p className="text-base text-justify md:text-lg">
          A passionate Full Stack Software Developer 🚀with a special interest
          in Frontend technologies and experience building Web applications with
          JavaScript, React, Node.js, and other cool libraries and frameworks.
        </p>

        {/* Buttons Section */}
        <div className="flex justify-start items-center pt-6 space-x-4 w-full">
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={() =>
              window.open("https://github.com/AbdullahCodingMaster", "_blank")
            }
          >
            GitHub
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
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
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={openResume}
          >
            Resume
          </button>
        </div>
      </div>

      {/* Profile Picture Section for Larger Devices */}
      <div className="hidden w-full h-full md:flex items-center">
        <img
          className="w-full h-full rounded-full object-cover object-center bg-no-repeat"
          src={heroPic}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Main;
