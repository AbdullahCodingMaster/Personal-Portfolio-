import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import SocialIconLink from "./SocialIconLink";

const Main = () => {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-screen object-cover object-center bg-no-repeat scale-x-[1]"
        src="https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background Image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 flex justify-center items-center">
        <div className="max-w-screen-md mx-auto text-center px-4">
          <h1 className="sm:text-4xl text-2xl font-bold text-[#2c3e50] font-serif">
            I am <br /> Muhammad Abdullah Awan
          </h1>

          <h2 className="sm:text-xl text-base md:text-xl lg:text-2xl pt-4 text-emerald-700 font-semibold font-mono">
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
          <div className="flex justify-center items-center pt-6 space-x-4">
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
      </div>
    </div>
  );
};

// SocialIconLink Component
// const SocialIconLink = ({ link, icon }) => (
//   <a href={link} target="_blank" rel="noopener noreferrer">
//     {icon}
//   </a>
// );

export default Main;
