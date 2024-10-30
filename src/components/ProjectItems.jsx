import PropTypes from "prop-types";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectItems = ({ img, title, githubLink, liveLink, technologies }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-[#1a2238] to-[#2d3651]">
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg opacity-10 transition-opacity duration-300"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-center mb-4">{technologies}</p>

        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            <FaGithub size={20} className="mr-2" />
            GitHub
          </a>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-400 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            <FaGlobe size={20} className="mr-2" />
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectItems.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
};

export default ProjectItems;
