import moshify from "../assets/moshify.jpg";
import expansetracker from "../assets/expansetracker.jpg";
import portfolio from "../assets/portfolio.jpg";
import ProjectItems from "./ProjectItems";

const projectData = [
  {
    img: portfolio,
    title: "Personal Portfolio",
    githubLink: "https://github.com/AbdullahCodingMaster/Personal-Portfolio-/",
    liveLink: "https://programmingwithabdullah.netlify.app/",
    technologies: "React Js, Javascript, Tailwind Css, Joi , and GetForm.io",
  },
  {
    img: moshify,
    title: "Moshify",
    githubLink: "https://github.com/AbdullahCodingMaster/MoshifyProject",
    liveLink: "https://abdullahcodingmaster.github.io/MoshifyProject/",
    technologies: "HTML5 and CSS3",
  },
  {
    img: expansetracker,
    title: "Expanse Tracker",
    githubLink: "https://github.com/AbdullahCodingMaster/Expanse-Tracker-/",
    liveLink: "https://expansestrackers.netlify.app/",
    technologies: "React Js, Typescript, Bootstrap, Zod , and React-Hook-Form",
  },
  // Add more project data as needed
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Explore a showcase of my hands-on experience and practical skills
        through a collection of projects that I have diligently developed. These
        projects were undertaken by following instructional YouTube videos,
        where I applied the concepts learned to bring these ideas to life. Each
        project reflects my commitment to continuous learning and my ability to
        translate theoretical knowledge into tangible results.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
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
  );
};

export default Projects;
