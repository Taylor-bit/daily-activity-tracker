import React, { useState } from "react";
import TextInput from "../components/TextInput";
import AudioInput from "../components/AudioInput";
import VideoInput from "../components/VideoInput";
import RadioSelectInput from "../components/RadioSelectInput";

function RandomActivity() {
  const activities = [
    { value: "text", label: "Tell me a short story" },
    { value: "audio", label: "Sing me a song" },
    { value: "video", label: "Do a science experiment" },
    { value: "quiz", label: "How are you feeling today?" },
  ];

  const [randomActivityIdx, setRandomActivityIdx] = useState(
    Math.floor(Math.random() * activities.length)
  );
  const [radioSelected, setRadioSelected] = useState("");
  const [audioUploaded, setAudioUploaded] = useState(false);
  const [videoUploaded, setVideoUploaded] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnotherActivity, setShowAnotherActivity] = useState(false);

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

  // Get value of randomActivity
  let randomActivity = activities[randomActivityIdx];
  let randomActivityValue = randomActivity.value;

  // Dynamic rendering of different input forms based on randomly generated activity
  const renderRandomActivityComponent = () => {
    if (!isSubmitted) {
      switch (randomActivityValue) {
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
    }
    return null;
  };

  // TODO: Make form validation more robust
  const isSubmitDisabled = () => {
    if (randomActivityValue === "quiz" && !radioSelected) {
      return true;
    }
    if (randomActivityValue === "audio" && !audioUploaded) {
      return true;
    }
    if (randomActivityValue === "video" && !videoUploaded) {
      return true;
    }
    if (randomActivityValue === "text" && textInput.trim().length === 0) {
      return true;
    }
    return false;
  };

  /*
    If the form is submitted:
      - reset the form
      - update the title
      - setShowAnotherActivity to true to
      allow for another activity form to be rendered
      if the user wants to complete another randomly
      generated activity
  */
  const handleFormSubmit = () => {
    setIsSubmitted(true);
    resetForm();
    document.getElementById("title").textContent = "Would you like to complete another activity?";
    setShowAnotherActivity(true);
  };

  const resetForm = () => {
    setRadioSelected("");
    setAudioUploaded(false);
    setVideoUploaded(false);
    setTextInput("");
  };

  // Get randomActivityName
  let randomActivityName = randomActivity.label;

  return (
    <div className="profile-page">
      <h3>{randomActivityName}</h3>
      {renderRandomActivityComponent()}
      {!isSubmitted && (
        <div className="submit-button-container">
          <button
            className="submit-button"
            disabled={isSubmitDisabled()}
            onClick={handleFormSubmit}
          >
            <span className="submit-button-icon">▶</span>
            Submit
          </button>
        </div>
      )}
      {isSubmitted && (
        <div className="message">
          Great job completing your daily activity!
        </div>
      )}
      {showAnotherActivity && (
        <div className="generate-activity-button-container">
          <button
            className="generate-activity-button"
            onClick={() => {
              setRandomActivityIdx(
                Math.floor(Math.random() * activities.length)
              );
              setIsSubmitted(false);
              setShowAnotherActivity(false);
            }}
          >
            Generate Random Activity
          </button>
        </div>
      )}
    </div>
  );
}

export default RandomActivity;
