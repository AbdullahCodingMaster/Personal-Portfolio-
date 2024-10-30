import { FaCheck } from "react-icons/fa";

const About = () => {
  const introduction = `I am Muhammad Abdullah Awan, a committed professional currently pursuing my studies at the University of Azad Jammu and Kashmir. With a fervent interest in web development, I actively seek opportunities to solve problems. Thriving in dynamic environments, I prioritize academic excellence while refining my skills in HTML, CSS, and JavaScript. As I progress towards advanced technologies such as Tailwind CSS and React.js, I embark on a continuous journey of growth and learning.`;

  const skills = [
    { name: "C++ Programming", percentage: 90 },
    { name: "Object Oriented Programming", percentage: 85 },
    { name: "Data Structures and Algorithms", percentage: 60 },
    { name: "Responsive Web Design", percentage: 90 },
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 85 },
    { name: "Bootstrap", percentage: 80 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "JavaScript (ES6+)", percentage: 90 },
    { name: "Git", percentage: 85 },
    { name: "GitHub", percentage: 85 },
    { name: "Postman", percentage: 80 },
    { name: "Docker", percentage: 80 },
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 90 },
    { name: "Express.js", percentage: 95 },
    { name: "RESTful APIs", percentage: 95 },
    { name: "MongoDB", percentage: 90 },
    { name: "PHP", percentage: 80 },
    { name: "Codeigniter", percentage: 90 },
    { name: "Laravel", percentage: 90 },
    { name: "MYSQL", percentage: 90 },
  ];

  return (
    <div
      id="about"
      className="max-w-screen-xl py-16 px-6 md:pl-16 lg:max-w-screen-xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        About Me
      </h1>

      <section className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Introduction
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          {introduction}
        </p>
      </section>

      <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-700 p-3 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaCheck className="text-green-400 mr-3" />
              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-xs text-gray-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-600 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-md"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
