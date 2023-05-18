import React, { useState } from "react";
import TextInput from "./TextInput";
import AudioInput from "./AudioInput";
import VideoInput from "./VideoInput";
import RadioSelectInput from "./RadioSelectInput";

function Dropdown() {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [radioSelected, setRadioSelected] = useState("");
  const [audioUploaded, setAudioUploaded] = useState(false);
  const [videoUploaded, setVideoUploaded] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const options = [
    { value: "text", label: "Tell me a short story" },
    { value: "audio", label: "Sing me a song" },
    { value: "video", label: "Do a science experiment" },
    { value: "quiz", label: "How are you feeling today?" },
  ];

  const handleOptionClick = (option) => {
    setSelected(option.value);
    setIsActive(false);
    setIsSubmitted(false); // Reset isSubmitted state
  };
  

  const handleRadioSelect = (value) => {
    setRadioSelected(value);
  };

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    setAudioUploaded(!!file);
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideoUploaded(!!file);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const getSelectedOptionLabel = () => {
    const selectedOption = options.find((option) => option.value === selected);
    return selectedOption ? selectedOption.label : "Select an option";
  };

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

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    resetForm();
    document.getElementById("title").textContent = "Would you like to complete another activity?";
  };

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