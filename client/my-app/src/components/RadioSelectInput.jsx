import React from "react";

function RadioSelectInput ({onChange}) {
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };
  return (
    // TODO: dynamically render options instead of hardcoding
    <div className="radio-select-input">
        <label htmlFor="multiple-choice">I am feeling:</label><br></br>
        <input type="radio" id="option1" name="multiple-choice" value="Happy" onChange={handleRadioChange}></input>
        <label htmlFor="option1">Happy</label><br></br>
        <input type="radio" id="option2" name="multiple-choice" value="Neutral" onChange={handleRadioChange}></input>
        <label htmlFor="option2">Neutral</label><br></br>
        <input type="radio" id="option3" name="multiple-choice" value="Sad" onChange={handleRadioChange}></input>
        <label htmlFor="option3">Sad</label><br></br>
        <input type="radio" id="option4" name="multiple-choice" value="Mad" onChange={handleRadioChange}></input>
        <label htmlFor="option4">Mad</label><br></br>
    </div>
  )
}

export default RadioSelectInput;
