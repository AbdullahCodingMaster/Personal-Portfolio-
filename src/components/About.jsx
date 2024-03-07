import { FaCheck } from "react-icons/fa";

const About = () => {
  const introduction = `I am Muhammad Abdullah Awan, a committed professional currently pursuing my studies at the University of Azad Jammu and Kashmir. With a fervent interest in web development, I actively seek opportunities to solve problems. Thriving in dynamic environments, I prioritize academic excellence while refining my skills in HTML, CSS, and JavaScript. As I progress towards advanced technologies such as Tailwind CSS and React.js, I embark on a continuous journey of growth and learning.`;

  const skills = [
    { name: "C++ Programming", percentage: 90 },
    { name: "Object Oriented Programming", percentage: 85 },
    { name: "Data Structure and Algorithms", percentage: 60 },
    { name: "Responsive Web Design", percentage: 90 },
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 85 },
    { name: "Bootstrap", percentage: 80 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "JavaScript (ES6+)", percentage: 90 },
    { name: "Git", percentage: 85 },
    { name: "GitHub", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Node.js", percentage: 70 },
    { name: "Express.js", percentage: 65 },
    { name: "RESTful APIs", percentage: 5 },
    { name: "MongoDB", percentage: 10 },
  ];

  return (
    <div
      id="about"
      className="max-w-screen-xl py-16 md:pl-16 lg:max-w-screen-xl pb-0 mx-auto p-4"
    >
      <h1 className="text-4xl font-bold text-center text-white my-5">About</h1>

      <section className="border-2 border-blue-700 p-5">
        <h2 className="text-2xl font-bold text-blue-300">Introduction</h2>
        <p className="text-base md:text-lg text-start md:text-justify ">
          {introduction}
        </p>
      </section>

      <section className="border-2 border-blue-700 p-5">
        <h2 className="text-2xl font-bold text-blue-300">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div>
                <FaCheck className="text-green-500" />
              </div>
              <div className="ml-2  w-full">
                <span>{skill.name}</span>
                <div className="bg-red-500 w-full h-3 rounded-md mt-1">
                  <div
                    className="bg-blue-500 h-full rounded-md"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
