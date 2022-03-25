import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contact.css";
class Contact extends Component {
  state = {
    showContactToggle: true,
  };

  showContact() {
    this.setState({
      showContactToggle: !this.state.showContactToggle,
    });
  }
  deleteContact = () => {
    console.log("delete contact");
    this.props.deleteContactFromChild();
  };
  render() {
    const { name, tel, email } = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {name}
            <i
              style={{ color: "green", marginLeft: "10px", cursor: "pointer" }}
              onClick={this.showContact.bind(this)}
              className="fa fa-sort-down"
            ></i>
            <i
              style={{ color: "red", cursor: "pointer", float: "right" }}
              className="fa fa-times"
              onClick={this.deleteContact}
            ></i>
          </h4>

          {this.state.showContactToggle ? (
            <ul className="list-group">
              <li className="list-group-item">{tel}</li>
              <li className="list-group-item">{email}</li>
            </ul>
          ) : null}
        </div>
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
  data: PropTypes.object.isRequired,
  deleteContactFromChild: PropTypes.func.isRequired,
};
export default Contact;
