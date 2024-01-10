import { FaCheck } from "react-icons/fa";
import profile from "../assets/profile.png";

const Resume = () => {
  const introduction =
    "Passionate software engineer with expertise in front-end and back-end development. Adept at creating scalable and efficient solutions using modern technologies.";

  const skills = [
    { name: "JavaScript (ES6+)", icon: <FaCheck className="text-green-500" /> },
    { name: "React.js", icon: <FaCheck className="text-green-500" /> },
    { name: "Node.js", icon: <FaCheck className="text-green-500" /> },
    { name: "Express.js", icon: <FaCheck className="text-green-500" /> },
    { name: "HTML5", icon: <FaCheck className="text-green-500" /> },
    { name: "CSS3", icon: <FaCheck className="text-green-500" /> },
    { name: "RESTful APIs", icon: <FaCheck className="text-green-500" /> },
    { name: "MongoDB", icon: <FaCheck className="text-green-500" /> },
    { name: "Git", icon: <FaCheck className="text-green-500" /> },
    {
      name: "Responsive Web Design",
      icon: <FaCheck className="text-green-500" />,
    },
  ];

  return (
    <div id="resume" className="max-w-[800px] m-auto p-4  md:pl-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Resume
      </h1>
      <div className="text-center mb-4">
        <img
          src={profile} // Replace with your image source
          alt="Profile"
          className="mt-2 mb-2 rounded-full h-32 w-32 lg:h-40 lg:w-40 object-cover mx-auto"
        />
        <h1 className="text-3xl font-bold mt-2">Muhammad Abdullah Awan</h1>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>{introduction}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              {skill.icon}
              <span className="ml-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
