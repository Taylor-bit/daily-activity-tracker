import React from "react";

function RadioSelectInput({ onChange }) {
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="radio-select-input">
      <label htmlFor="multiple-choice">I am feeling:</label><br></br>
      <div className="radio-options">
      <div className="radio-option">
        <input type="radio" id="option1" name="multiple-choice" value="Happy" onChange={handleRadioChange} />
        <label htmlFor="option1">Happy</label>
      </div>
      <div className="radio-option">
        <input type="radio" id="option2" name="multiple-choice" value="Neutral" onChange={handleRadioChange} />
        <label htmlFor="option2">Neutral</label>
      </div>
      <div className="radio-option">
        <input type="radio" id="option3" name="multiple-choice" value="Sad" onChange={handleRadioChange} />
        <label htmlFor="option3">Sad</label>
      </div>
      <div className="radio-option">
        <input type="radio" id="option4" name="multiple-choice" value="Mad" onChange={handleRadioChange} />
        <label htmlFor="option4">Mad</label>
      </div>
      </div>
    </div>
  );
}

export default RadioSelectInput;
