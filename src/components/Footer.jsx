import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5">
      <div className="container mx-auto py-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Footer Menu */}
        <div className="mb-4 lg:mb-0">
          <ul className="flex space-x-2 justify-center">
            <li>
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#resume">About</a>
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
          <a
            href="https://twitter.com/Muhamma99892934"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-abdullah-awan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AbdullahCodingMaster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=100092121775499"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/muhammadabdullahawan324/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 lg:mt-0">
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
