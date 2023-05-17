import React from "react";

function TextInput({ value, onChange }) {
  return (
    <div className="text-input">
      <label htmlFor="textInput">Your Typed Response:</label>
      <br />
      <input
        type="text"
        id="textInput"
        value={value}
        onChange={onChange}
      />
      <br />
    </div>
  );
}

export default TextInput;
