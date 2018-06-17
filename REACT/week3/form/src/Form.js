import React from "react";

const Form = ({ handler }) => {
  return (
    <div>
      <form
        style={{
          position: "absolute",
          top: "39%",
          left: "39%"
        }}
        onSubmit={handler}
      >
        First name:
        <input type="text" name="firstname" placeholder="type name" />
        <br />
        Last name:
        <input type="text" name="lastname" placeholder="type surname" />
        <br />
        Submit
        <input type="submit" name="submit" value="submit" />
      </form>
    </div>
  );
};
export default Form;
