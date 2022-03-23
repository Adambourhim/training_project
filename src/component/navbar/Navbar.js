import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
const Navbar = (props) => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Contact list",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
