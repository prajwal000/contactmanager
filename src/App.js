import React, { useState } from "react";
import "./styles/styles.css";
import Contactadder from "./components/Contactadder";
import Contact from "./components/Contact";

const App = () => {
  const getContact = JSON.parse(localStorage.getItem("contacts"));
  //setting up local storage

  const [contacts, setContacts] = useState(getContact ? getContact : []);

  const addContactdata = (contactData) => {
    // here we took the props sent from the contact adder
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <div className="contact_adder">
        <Contactadder onContactdata={addContactdata} />
        {}
      </div>
      <div className="contact_list">
        <h2> Conatct list:</h2>
        {
          // here we loop the data using map
        }
        {contacts.map((data) => (
          <Contact data={data} key={data.id}></Contact>
        ))}

        <button
          style={{ margin: "50px 0px 0px 0px" }}
          onClick={clearAllContacts}
        >
          clear all contacts
        </button>
      </div>
    </>
  );
};
export default App;
