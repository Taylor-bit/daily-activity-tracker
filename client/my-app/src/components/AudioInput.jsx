import React from "react";

function AudioInput ({ onChange }) {
  return (
    <div className="file-upload-input">
        <label htmlFor="audio">Upload Recorded Audio:</label>
        <input type="file" id="audio" name="audio" accept="audio/*" onChange={onChange}></input><br></br>
    </div>
  )
}

export default AudioInput;