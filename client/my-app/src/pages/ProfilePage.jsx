import React from 'react';

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <div className="profile-form">
        <div className="profile-field">
          <label>Parent Name:</label>
          <input type="text" value="John Doe" readOnly />
        </div>
        <div className="profile-field">
          <label>Child Name:</label>
          <input type="text" value="Jane Doe" readOnly />
        </div>
        <div className="profile-field">
          <label>Parent Email:</label>
          <input type="email" value="john@example.com" readOnly />
        </div>
        <div className="profile-field">
          <label>Parent Phone Number:</label>
          <input type="tel" value="123-456-7890" readOnly />
        </div>
      </div>
    </div>
  );
}
