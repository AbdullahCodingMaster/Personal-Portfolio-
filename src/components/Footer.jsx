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
    <footer className="max-w-screen-xl mx-auto p-4 bg-gray-800 text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-600">
        {/* Footer Menu */}
        <div className="mb-4 md:mb-0 flex justify-center md:justify-start">
          <ul className="flex flex-wrap space-x-4 md:space-x-6">
            <li>
              <a href="#main" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-500 transition">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
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
                className="text-gray-400 hover:text-blue-500 transition"
              />
            }
          />
          <SocialIconLink
            link="https://www.instagram.com/muhammadabdullahawan324/"
            icon={
              <FaInstagram
                size={20}
                className="text-gray-400 hover:text-red-500 transition"
              />
            }
          />
          <SocialIconLink
            link="https://www.linkedin.com/in/muhammad-abdullah-awan/"
            icon={
              <FaLinkedinIn
                size={20}
                className="text-gray-400 hover:text-blue-500 transition"
              />
            }
          />
          <SocialIconLink
            link="https://github.com/AbdullahCodingMaster"
            icon={
              <FaGithub
                size={20}
                className="text-gray-400 hover:text-gray-700 transition"
              />
            }
          />
          <SocialIconLink
            link="https://web.facebook.com/profile.php?id=100092121775499"
            icon={
              <FaFacebookF
                size={20}
                className="text-gray-400 hover:text-blue-500 transition"
              />
            }
          />
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 md:mt-0">
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
