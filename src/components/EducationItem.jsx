import PropTypes from "prop-types";

const EducationItem = ({ year, title, duration, children, grade }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-[#001b5e]">{title}</h2>
      <p className="text-gray-500">{year}</p>
      <p className="text-gray-600">{duration}</p>
      <h2 className="text-1xl font-bold text-[#001b5e]">Grade : {grade}</h2>
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
