import { FaCheck } from "react-icons/fa";

const About = () => {
  const introduction = `I'm Muhammad Abdullah Awan, a dedicated professional 
  currently studying at the University of Azad Jammu and Kashmir. Passionate 
  about web development, I am actively seeking opportunities in problem-solving.
  Thriving in dynamic environments, I focus on maintaining academic excellence 
  while honing my skills in HTML, CSS, and JavaScript. Progressing to advanced 
  technologies like Tailwind CSS and React.js, I am on a continuous journey of 
  growth and learning.`;

  const skills = [
    { name: "JavaScript (ES6+)", icon: <FaCheck className="text-green-500" /> },
    { name: "React.js", icon: <FaCheck className="text-green-500" /> },
    // { name: "Node.js", icon: <FaCheck className="text-green-500" /> },
    // { name: "Express.js", icon: <FaCheck className="text-green-500" /> },
    { name: "HTML5", icon: <FaCheck className="text-green-500" /> },
    { name: "CSS3", icon: <FaCheck className="text-green-500" /> },
    // { name: "RESTful APIs", icon: <FaCheck className="text-green-500" /> },
    // { name: "MongoDB", icon: <FaCheck className="text-green-500" /> },
    { name: "Git", icon: <FaCheck className="text-green-500" /> },
    { name: "GitHub", icon: <FaCheck className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <FaCheck className="text-green-500" /> },
    { name: "Bootstrap", icon: <FaCheck className="text-green-500" /> },
    {
      name: "Responsive Web Design",
      icon: <FaCheck className="text-green-500" />,
    },
  ];

  return (
    <div
      id="about"
      className="max-w-screen-xl  py-16  md:pl-16 lg:max-w-screen-xl pb-0 mx-auto p-4 "
    >
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        About
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p className="text-justify">{introduction}</p>
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

export default About;
