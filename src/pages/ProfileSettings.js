// ProfileSettingsPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PersonalInfo from '../components/PersonalInfo';
import ChangePasswordForm from '../components/ChangePasswordForm';
import SecuritySettings from '../components/SecuritySettings';
import './StyleSheet/ProfileSettings.css';

const ProfileSettingsPage = () => {
  const [user, setUser] = useState({
    fullName: 'Muhammad Umer',
    email: 'mu31151@gmail.com',
    phoneNumber: '+92 3112345678',
    twoFactorEnabled: false,
    securityQuestion: '',
  });

  const handleUpdateUser = (updatedInfo) => {
    setUser({ ...user, ...updatedInfo });
  };

  const handleChangePassword = (passwordData) => {
    console.log('Password change requested:', passwordData);
  };

  const handleUpdateSecurity = (securityData) => {
    setUser({ ...user, ...securityData });
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div>
      <Navbar/>
      <div className="profile-settings-page">
        <h2>Profile Settings</h2>
        <PersonalInfo user={user} onUpdateUser={handleUpdateUser} />
        <ChangePasswordForm onChangePassword={handleChangePassword} />
        <SecuritySettings user={user} onUpdateSecurity={handleUpdateSecurity} />
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfileSettingsPage;
