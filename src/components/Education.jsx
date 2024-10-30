import EducationItem from "./EducationItem";
import ShowMoreContent from "./ShowMoreContent";

const data = [
  {
    year: "2008 - 2018",
    title: "Early Education (Standards 1-8)",
    grade: "A+",
    duration: "10 Years",
    details: `Commencing my educational journey in 2008 at the government school in my village, I consistently demonstrated a strong commitment to academic excellence, earning commendations and rewards in each class. Particularly noteworthy is my affinity for sciences and mathematics, areas where my keen interest and aptitude became apparent early on. This early phase of education not only provided me with a solid foundation but also fueled a passion for analytical subjects that has persisted throughout my academic career.`,
  },
  {
    year: "2018 - 2020",
    title: "Secondary Education",
    grade: "B+",
    duration: "2 Years",
    details: `I pursued secondary education in Muzaffarabad at Paramount School and Science College, focusing on Computer Science. I achieved a score of 894 out of 1100. Transitioning to a private institution was a pivotal step in my academic journey, where I honed my skills in Computer Science and developed a strong work ethic.`,
  },
  {
    year: "2020 - 2022 ",
    title: "Higher Secondary Education",
    grade: "A+",
    duration: "2 Years",
    details: `At Al-Qalam College, I pursued Pre-Engineering and secured 977 out of 1100 marks. This phase of education sharpened my analytical and problem-solving skills, laying the foundation for future endeavors in engineering.`,
  },
  {
    year: "2022 - 2026 ",
    title: "BS Software Engineering",
    grade: "A",
    duration: "4 Years",
    details: `Currently enrolled in the Software Engineering program at the University of Azad Jammu and Kashmir, I have maintained a CGPA of 3.55. My focus spans C++, OOP, DSA, and MERN stack development, preparing me to excel in both front-end and back-end technologies.`,
  },
];

const Education = () => {
  return (
    <div
      id="education"
      className="max-w-screen-xl py-16 px-6 md:pl-16 lg:max-w-screen-xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Educational Pathway
      </h1>
      <div className="space-y-8">
        {data.map((item, index) => (
          <EducationItem
            key={index}
            title={item.title}
            year={item.year}
            duration={item.duration}
            grade={item.grade}
          >
            <ShowMoreContent
              initialContent={item.details.substring(0, 200) + "..."}
              fullContent={item.details}
            />
          </EducationItem>
        ))}
      </div>
    </div>
  );
};

export default Education;
