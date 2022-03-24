import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "adam",
        tel: "0634862161",
        email: "adamborhim@gmail.com",
      },
      { id: 2, name: "salma", tel: "0634862162", email: "salma@gmail.com" },
      { id: 3, name: "hamza", tel: "0634862163", email: "hamza@gmail.com" },
      { id: 4, name: "inssaf", tel: "0634862164", email: "inssaf@gmail.com" },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact data={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
