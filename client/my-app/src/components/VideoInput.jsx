import React from "react";

function VideoInput ({ onChange }) {
  return (
    <div className="file-upload-input">
        <label htmlFor="video">Upload Recorded Video:</label>
        <input type="file" id="video" name="video" accept="video/*" onChange={onChange}></input><br></br>
    </div>
  )
}

export default VideoInput;