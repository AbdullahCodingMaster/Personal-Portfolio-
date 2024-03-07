import PropTypes from "prop-types";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectItems = ({ img, title, githubLink, liveLink, technologies }) => {
  return (
    <div className="relative group overflow-hidden transition duration-300 ease-in-out transform rounded-xl hover:shadow-md hover:bg-gradient-to-r from-gray-100 via-gray-100 to-[#849bd6] ">
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-auto rounded-xl group-hover:opacity-10"
      />
      <div className="absolute text-black inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <h3 className="text-2xl font-bold text-black tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-2 text-black text-center">{technologies}</p>
        <div className="flex">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaGithub size={20} className="inline-block align-middle" />
            <span className="ml-2">GitHub</span>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn ml-4" /* Added margin-left here */
          >
            <FaGlobe size={20} className="inline-block align-middle" />
            <span className="ml-2">Live Site</span>
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
