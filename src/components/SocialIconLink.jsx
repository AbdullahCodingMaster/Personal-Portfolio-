import PropTypes from "prop-types";

const SocialIconLink = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" >
    {icon}
  </a>
);

SocialIconLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default SocialIconLink;
