import moshify from "../assets/moshify.jpg";
import expansetracker from "../assets/expansetracker.jpg";
import portfolio from "../assets/portfolio.jpg";
import ProjectItems from "./ProjectItems";

const projectData = [
  {
    img: portfolio,
    title: "Personal Portfolio",
    githubLink: "https://github.com/AbdullahCodingMaster/Personal-Portfolio-/",
    liveLink: "https://muhammadabdullahawan.netlify.app/",
    technologies: "React JS, JavaScript, Tailwind CSS, Joi, GetForm.io",
  },
  {
    img: moshify,
    title: "Moshify",
    githubLink: "https://github.com/AbdullahCodingMaster/MoshifyProject",
    liveLink: "https://abdullahcodingmaster.github.io/MoshifyProject/",
    technologies: "HTML5, CSS3",
  },
  {
    img: expansetracker,
    title: "Expense Tracker",
    githubLink: "https://github.com/AbdullahCodingMaster/Expanse-Tracker-/",
    liveLink: "https://expansestrackers.netlify.app/",
    technologies: "React JS, TypeScript, Bootstrap, Zod, React-Hook-Form",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-screen-xl mx-auto py-16 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Projects
      </h1>

      {/* Background color applied only to the text and project items */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <p className="text-lg text-white text-start md:text-justify mb-8 border-l-4 border-blue-600 pl-4">
          Explore my practical experience through a collection of projects,
          reflecting my commitment to learning. These projects were developed by
          following instructional YouTube videos, showcasing my ability to
          convert theory into real-world results.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectItems
              key={index}
              img={project.img}
              title={project.title}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
