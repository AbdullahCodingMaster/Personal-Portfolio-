// ShowMoreContent.js
import { useState } from "react";
import PropTypes from "prop-types";

const ShowMoreContent = ({ initialContent, fullContent }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="text-base md:text-lg text-start md:text-justify mb-4">
      {showMore ? fullContent : initialContent}
      <div className="mt-2">
        <button
          onClick={toggleShowMore}
          className="btn-outline-primary text-blue-500 font-semibold cursor-pointer"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

ShowMoreContent.propTypes = {
  initialContent: PropTypes.node.isRequired,
  fullContent: PropTypes.node.isRequired,
};

export default ShowMoreContent;
