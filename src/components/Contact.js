const Contact = (props) => {
  /** We have sent the props to the contact adder by taking the input from the user
   * this is the start of the code
   */
  return (
    <>
      <div className="contact">
        <div>{props.data.name}</div>
        <br />
        <div>{props.data.number}</div>
        <br />
        <div>{props.data.address}</div>
      </div>
      <hr />
    </>
  );
};
export default Contact;
