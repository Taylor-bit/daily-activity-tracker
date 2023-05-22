import React, { useState } from "react";
import TextInput from "./TextInput";
import AudioInput from "./AudioInput";
import VideoInput from "./VideoInput";
import RadioSelectInput from "./RadioSelectInput";

/* Define state that will be used to handle selection
& submission of forms from Dropdown Menu */
function Dropdown() {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [radioSelected, setRadioSelected] = useState("");
  const [audioUploaded, setAudioUploaded] = useState(false);
  const [videoUploaded, setVideoUploaded] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* Options available for selection in Dropdown Menu 
  & their corresponding value that determines which type
  of form is rendered */
  const options = [
    { value: "text", label: "Tell me a short story" },
    { value: "audio", label: "Sing me a song" },
    { value: "video", label: "Do a science experiment" },
    { value: "quiz", label: "How are you feeling today?" },
  ];

  const handleOptionClick = (option) => {
    setSelected(option.value);
    setIsActive(false);
    setIsSubmitted(false);
  };

  // Use state to set value of radio selected option
  const handleRadioSelect = (value) => {
    setRadioSelected(value);
  };

  // Use state to verify that an audio file was uploaded
  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    setAudioUploaded(!!file);
  };

  // Use state to verify that a video file was uploaded
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideoUploaded(!!file);
  };

  // Use state to set entered text as input value
  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  // Use state to get the selected option label from Dropdown menu
  const getSelectedOptionLabel = () => {
    const selectedOption = options.find((option) => option.value === selected);
    return selectedOption ? selectedOption.label : "Select an option";
  };

  // Dynamic rendering of different input forms based on selected activity
  const renderActivityComponent = () => {
    switch (selected) {
      case "text":
        return (
          <div key="text-activity">
            <TextInput value={textInput} onChange={handleTextInputChange} />
          </div>
        );
      case "audio":
        return (
          <div key="audio-activity">
            <AudioInput onChange={handleAudioUpload} />
          </div>
        );
      case "video":
        return (
          <div key="video-activity">
            <VideoInput onChange={handleVideoUpload} />
          </div>
        );
      case "quiz":
        return (
          <div key="quiz-activity">
            <RadioSelectInput onChange={handleRadioSelect} />
          </div>
        );
      default:
        return null;
    }
  };
  

  const isSubmitDisabled = () => {
    if (selected === "" || selected === "Choose One") {
      return true;
    }
    if (selected === "quiz" && !radioSelected) {
      return true;
    }
    if (selected === "audio" && !audioUploaded) {
      return true;
    }
    if (selected === "video" && !videoUploaded) {
      return true;
    }
    if (selected === "text" && textInput.trim().length === 0) {
      return true;
    }
    return false;
  };

  // If the form is submitted reset the form and update the title
  const handleFormSubmit = () => {
    setIsSubmitted(true);
    resetForm();
    document.getElementById("title").textContent = "Would you like to complete another activity?";
  };

  // Reset useState values
  const resetForm = () => {
    setSelected("");
    setRadioSelected("");
    setAudioUploaded(false);
    setVideoUploaded(false);
    setTextInput("");
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {getSelectedOptionLabel()}
        <span className="fas fa-caret-down">&#9660;</span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="dropdown-item"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {renderActivityComponent()}
      <div className="submit-button-container">
        {selected && (
          <button
            className="submit-button"
            disabled={isSubmitDisabled()}
            onClick={handleFormSubmit}
          >
            <span className="submit-button-icon">▶</span>
            Submit
          </button>
        )}
      </div>
      {isSubmitted && (
        <div className="message">
          Great job completing your daily activity!
        </div>
      )}
    </div>
  );
}
export default Dropdown;