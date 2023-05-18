import React from "react";

function TextInput({ value, onChange }) {
  return (
    <div className="text-input">
      <label htmlFor="textInput">Your Typed Response:</label>
      <br />
      <textarea
        id="textInput"
        value={value}
        onChange={onChange}
        rows="4"
      ></textarea>
      <br />
    </div>
  );
}

export default TextInput;
