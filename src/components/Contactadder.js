import React, { useState } from "react";

const Contactadder = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, number, address };
    if (name.length === 0 || number.length === 0 || address.length === 0) {
      alert("Please fill out all the fields.");
    } else {
      props.onContactdata(contactData);
      setAddress("");
      setName("");
      setNumber("");
    }
  };

  return (
    <>
      <div className="simpleadder">
        <h2 style={{ color: "white" }}>Contact adder:</h2>
        <p></p>
        <form onSubmit={onClickHandler}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            className="input"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p style={{ color: "white", fontSize: "19px", fontWeight: "bolder" }}>
            {name}
          </p>
          <input
            type="number"
            placeholder="Number"
            value={number}
            className="input"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <p style={{ color: "white", fontSize: "19px", fontWeight: "bolder" }}>
            {number}
          </p>
          <input
            type="text"
            placeholder="Location"
            value={address}
            className="input"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <p style={{ color: "white", fontSize: "19px", fontWeight: "bolder" }}>
            {address}
          </p>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default Contactadder;
