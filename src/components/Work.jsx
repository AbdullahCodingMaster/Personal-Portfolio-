import React from "react";
import WorkItems from "./WorkItems";

const data = [
  {
    year: 2020,
    title: "Student",
    duration: "2 Years",
    detials:
      "The Quick brown fox jumps upon right over a lazy dog the quick brown fo xjumps upn right over a lazy dog",
  },
  {
    year: 2020,
    title: "Student",
    duration: "2 Years",
    detials:
      "The Quick brown fox jumps upon right over a lazy dog the quick brown fo xjumps upn right over a lazy dog",
  },
  {
    year: 2020,
    title: "Student",
    duration: "2 Years",
    detials:
      "The Quick brown fox jumps upon right over a lazy dog the quick brown fo xjumps upn right over a lazy dog",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e">Work</h1>
      {data.map((item, index) => (
        <WorkItems
          key={index}
          year={item.year}
          title={item.title}
          duration={item.duration}
          detials={item.detials}
        />
      ))}
    </div>
  );
};

export default Work;
