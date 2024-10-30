import PropTypes from "prop-types";

const EducationItem = ({ year, title, duration, children, grade }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-blue-400">{title}</h2>
      <div className="mt-2 flex items-center justify-between text-sm text-gray-300">
        <p>{year}</p>
        <p>{duration}</p>
      </div>
      <p className="mt-2 text-sm text-gray-400">
        Grade: <span className="font-bold">{grade}</span>
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

EducationItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default EducationItem;
