import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import SocialIconLink from "./SocialIconLink";

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-400 p-5">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Menu */}
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-wrap space-x-2 md:space-x-4 justify-center">
            <li>
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <SocialIconLink
            link="https://twitter.com/Muhamma99892934"
            icon={
              <FaTwitter
                size={20}
                className="text-gray-400 hover:text-blue-700"
              />
            }
          />

          <SocialIconLink
            link="https://www.instagram.com/muhammadabdullahawan324/"
            icon={
              <FaInstagram
                size={20}
                className="text-gray-400 hover:text-red-700"
              />
            }
          />
          <SocialIconLink
            link="https://www.linkedin.com/in/muhammad-abdullah-awan/"
            icon={
              <FaLinkedinIn
                size={20}
                className="text-gray-400 hover:text-blue-700"
              />
            }
          />
          <SocialIconLink
            link="https://github.com/AbdullahCodingMaster"
            icon={
              <FaGithub
                size={20}
                className="text-gray-400 hover:text-gray-700"
              />
            }
          />
          <SocialIconLink
            link="https://web.facebook.com/profile.php?id=100092121775499"
            icon={
              <FaFacebookF
                size={20}
                className="text-gray-400 hover:text-blue-700"
              />
            }
          />
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 md:mt-0 md:ml-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Muhammad Abdullah Awan. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
