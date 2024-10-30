import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import SocialIconLink from "./SocialIconLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-md text-white p-4 z-50 shadow-md shadow-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-extrabold italic tracking-wide">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-300 transition-colors"
          >
            Abdullah
          </a>
        </h2>

        <div className="hidden md:flex space-x-6">
          <SocialIconLink
            link="https://twitter.com/Muhamma99892934"
            icon={
              <FaTwitter
                className="text-blue-400 hover:text-blue-300 transition-colors"
                size={24}
              />
            }
          />
          <SocialIconLink
            link="https://www.instagram.com/muhammadabdullahawan324/"
            icon={
              <FaInstagram
                className="text-pink-500 hover:text-pink-400 transition-colors"
                size={24}
              />
            }
          />
          <SocialIconLink
            link="https://www.linkedin.com/in/muhammad-abdullah-awan/"
            icon={
              <FaLinkedinIn
                className="text-blue-500 hover:text-blue-300 transition-colors"
                size={24}
              />
            }
          />
          <SocialIconLink
            link="https://github.com/AbdullahCodingMaster"
            icon={
              <FaGithub
                className="text-gray-400 hover:text-gray-200 transition-colors"
                size={24}
              />
            }
          />
          <SocialIconLink
            link="https://web.facebook.com/profile.php?id=100092121775499"
            icon={
              <FaFacebookF
                className="text-blue-500 hover:text-blue-300 transition-colors"
                size={24}
              />
            }
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {/* Add an icon for mobile toggle if needed */}
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
