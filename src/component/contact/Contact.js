import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contact.css";
class Contact extends Component {
  render() {
    const { name, tel, email } = this.props;
    return (
      <div>
        <h3>Contacts : {name}</h3>
        <ul>
          <li>Tel : {tel} </li>
          <li>email : {email}</li>
        </ul>
      </div>
    );
  }
}
Contact.defaultProps = {
  name: "My Name",
  tel: "00000",
  email: "my@email.com",
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default Contact;
