import React, { useState } from 'react';
import '../pages/StyleSheet/ProfileSettings.css';

const ChangePasswordForm = ({ onChangePassword }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }
    // Add additional password validation if needed
    onChangePassword(formData);
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
    setError('');
  };

  return (
    <div className="change-password-form">
      <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          placeholder="Current Password"
          required
        />
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="New Password"
          required
        />
        <input
          type="password"
          name="confirmNewPassword"
          value={formData.confirmNewPassword}
          onChange={handleChange}
          placeholder="Confirm New Password"
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="change-password-btn">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
