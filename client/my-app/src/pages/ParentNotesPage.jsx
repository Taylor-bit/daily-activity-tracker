import React, { useState } from "react";

function ParentNotesPage() {
  const [activityName, setActivityName] = useState("");
  const [activitySummary, setActivitySummary] = useState("");
  const [childEngagement, setChildEngagement] = useState("");
  const [childEnjoyment, setChildEnjoyment] = useState("");
  const [parentFeedback, setParentFeedback] = useState("");

  const handleActivityNameChange = (event) => {
    setActivityName(event.target.value);
  };

  const handleActivitySummaryChange = (event) => {
    setActivitySummary(event.target.value);
  };

  const handleChildEngagementChange = (event) => {
    setChildEngagement(event.target.value);
  };

  const handleChildEnjoymentChange = (event) => {
    setChildEnjoyment(event.target.value);
  };

  const handleParentFeedbackChange = (event) => {
    setParentFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="parent-notes-page">
      <h2 style={{ textAlign: "center" }}>Parent Notes</h2>
      <form className="parent-notes-form" onSubmit={handleSubmit}>
        <div className="parent-notes-field">
          <label htmlFor="activityName">Activity Name:</label>
          <input
            type="text"
            id="activityName"
            value={activityName}
            onChange={handleActivityNameChange}
          />
        </div>
        <div className="parent-notes-field">
          <label htmlFor="activitySummary">Activity Summary:</label>
          <input
            type="text"
            id="activitySummary"
            value={activitySummary}
            onChange={handleActivitySummaryChange}
          />
        </div>
        <div className="parent-notes-field">
          <label htmlFor="childEngagement">Child Engagement:</label>
          <input
            type="text"
            id="childEngagement"
            value={childEngagement}
            onChange={handleChildEngagementChange}
          />
        </div>
        <div className="parent-notes-field">
          <label htmlFor="childEnjoyment">Child Enjoyment:</label>
          <input
            type="text"
            id="childEnjoyment"
            value={childEnjoyment}
            onChange={handleChildEnjoymentChange}
          />
        </div>
        <div className="parent-notes-field">
          <label htmlFor="parentFeedback">Parent Feedback:</label>
          <input
            type="text"
            id="parentFeedback"
            value={parentFeedback}
            onChange={handleParentFeedbackChange}
          />
        </div>
        <button className="submit-button" type="submit">
          <span className="submit-button-icon">▶</span>
          Submit
        </button>
      </form>
    </div>
  );  
}

export default ParentNotesPage;
