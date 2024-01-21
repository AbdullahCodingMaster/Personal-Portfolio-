import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import SocialIconLink from "./SocialIconLink";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-bold">
          <a href="#" className="">
            <img src={logo} alt="AbdullahCodingMaster" className="w-20 h-15" />
          </a>
        </h2>
        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            <SocialIconLink
              link="https://twitter.com/Muhamma99892934"
              icon={
                <FaTwitter
                  size={20}
                  className="text-blue-500 hover:text-blue-700"
                />
              }
            />

            <SocialIconLink
              link="https://www.instagram.com/muhammadabdullahawan324/"
              icon={
                <FaInstagram
                  size={20}
                  className="text-red-500 hover:text-red-700"
                />
              }
            />
            <SocialIconLink
              link="https://www.linkedin.com/in/muhammad-abdullah-awan/"
              icon={
                <FaLinkedinIn
                  size={20}
                  className="text-blue-500 hover:text-blue-700"
                />
              }
            />
            <SocialIconLink
              link="https://github.com/AbdullahCodingMaster"
              icon={
                <FaGithub
                  size={20}
                  className="text-black hover:text-gray-700"
                />
              }
            />
            <SocialIconLink
              link="https://web.facebook.com/profile.php?id=100092121775499"
              icon={
                <FaFacebookF
                  size={20}
                  className="text-blue-500 hover:text-blue-700"
                />
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
