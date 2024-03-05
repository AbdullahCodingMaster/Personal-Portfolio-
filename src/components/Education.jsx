import EducationItem from "./EducationItem";
import ShowMoreContent from "./ShowMoreContent";

// ... (existing imports and data)
// import data from "../data";
const data = [
  {
    year: "2008 - 2018",
    title: "Early Education (Standards 1-8)",
    grade: "A+",
    duration: "10 Years",
    details: `Commencing my educational journey in 2008 at the government school in my village, I consistently demonstrated a strong commitment to academic excellence, earning commendations and rewards in each class. Particularly noteworthy is my affinity for sciences and mathematics, areas where my keen interest and aptitude became apparent early on. This early phase of education not only provided me with a solid foundation but also fueled a passion for analytical subjects that has persisted throughout my academic career. The rewards I garnered in each class underscored my dedication to learning and laid the groundwork for my subsequent educational pursuits. These formative years at my village's government school have not only shaped my intellectual curiosity but have also instilled in me a deep-seated commitment to continuous learning and excellence in the realms of science and mathematics.`,
  },
  {
    year: "2018 - 2020",
    title: "Secondary Education",
    grade: "B+",
    duration: "2 Years",
    details: `Subsequently, I pursued my secondary education in the bustling city of Muzaffarabad at the renowned Paramount School and Science College. Focused on the field of Computer Science, I dedicated myself to academic excellence, achieving a notable score of 894 out of 1100. The transition to a private educational institution in the city marked a significant juncture in my academic journey. Determined to thrive in a more competitive environment, I worked diligently to not only meet but exceed academic expectations. This period of my education not only honed my skills in Computer Science but also fostered resilience and a strong work ethic as I navigated the challenges of a more rigorous curriculum in a dynamic urban setting.`,
  },
  {
    year: "2020 - 2022 ",
    title: "Higher Secondary Education",
    grade: "A+",
    duration: "2 Years",
    details: `Continuing my academic journey, I pursued higher education in the field of Pre-Engineering at Azad Jammu and Kashmir's premier institution, Al-Qalam College in Muzaffarabad. Demonstrating an unwavering commitment to excellence, I secured an impressive 977 out of 1100 marks. This phase of my education was characterized by an intensified focus on technical and engineering subjects, and I dedicated extra effort to excel in the demanding curriculum. The challenging coursework at Al-Qalam College not only sharpened my analytical and problem-solving skills but also deepened my understanding of the intricacies within the field of Pre-Engineering. These experiences further solidified my academic foundation and set the stage for my future endeavors in the engineering domain.`,
  },
  {
    year: "2022 - 2026 ",
    title: "BS Software Engineering",
    grade: "A",
    duration: "4 Years",
    details: `Currently, I am enrolled in the Department of Software Engineering at the University of Azad Jammu and Kashmir, currently in my 3rd semester. Throughout my academic journey, I have consistently maintained a CGPA of 3.55 in the first two semesters. My coursework has encompassed various software development courses, including in-depth studies of C++, Object-Oriented Programming (OOP), and Data Structures and Algorithms (DSA). In addition to mastering these fundamental aspects, I have delved into the realm of front-end web development, acquiring proficiency in JavaScript and exploring frameworks such as ReactJS. Furthermore, my current focus lies in back-end development, where I am actively engaged in mastering the MERN (MongoDB, Express.js, ReactJS, Node.js) stack. This comprehensive exposure to both front-end and back-end technologies positions me to contribute effectively to the dynamic and evolving field of software engineering.`,
  },
];
const Education = () => {
  return (
    <div
      id="education"
      className="max-w-screen-xl py-16  md:pl-16 lg:max-w-screen-xl pb-0 mx-auto p-4"
    >
      <h1 className="text-4xl font-bold text-center text-blue-600  mb-8">
        Educational Pathway
      </h1>
      {data.map((item, index) => (
        <EducationItem
          key={index}
          title={item.title}
          year={item.year}
          duration={item.duration}
          grade={item.grade}
        >
          {/* Pass the item's details to ShowMoreContent */}
          <ShowMoreContent
            initialContent={item.details.substring(0, 200) + "..."}
            fullContent={item.details}
          />
        </EducationItem>
      ))}
    </div>
  );
};

export default Education;
