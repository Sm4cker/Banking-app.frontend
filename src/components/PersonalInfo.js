// PersonalInfo.js
import React, { useState } from 'react';
import '../pages/StyleSheet/ProfileSettings.css';

const PersonalInfo = ({ user, onUpdateUser }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onUpdateUser(formData);
    setEditing(false);
  };

  return (
    <div className="personal-info">
      <h3>Personal Information</h3>
      {editing ? (
        <div className="personal-info-form">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="personal-info-display">
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
