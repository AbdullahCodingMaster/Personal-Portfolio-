// EducationItem.js

import PropTypes from "prop-types";

const EducationItem = ({ year, title, duration, children, grade }) => {
  return (
    <div className="border-2 border-blue-700 p-5">
      <h2 className="text-2xl font-bold text-blue-300">{title}</h2>
      <p className="text-gray-200">{year}</p>
      <p className="text-gray-400">{duration}</p>
      <h2 className="text-1xl font-bold text-blue-300">Grade : {grade}</h2>
      {children}
    </div>
  );
};

EducationItem.propTypes = {
  year: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default EducationItem;
