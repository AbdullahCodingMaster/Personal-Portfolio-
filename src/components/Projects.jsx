import projectImg from "../assets/projectImg.png";
import ProjectItems from "./ProjectItems";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni qui
        consequuntur, deserunt voluptatem unde delectus inventore error
        architecto, ab quas eos commodi provident dignissimos animi nobis
        perspiciatis labore optio eum.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <ProjectItems img={projectImg} title="Lorem" />
        <ProjectItems img={projectImg} title="Lorem" />
        <ProjectItems img={projectImg} title="Lorem" />
        <ProjectItems img={projectImg} title="Lorem" />
      </div>
    </div>
  );
};

export default Projects;
