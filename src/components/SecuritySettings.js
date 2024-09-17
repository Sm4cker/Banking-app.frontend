import React, { useState } from 'react';
import '../pages/StyleSheet/ProfileSettings.css';

const SecuritySettings = ({ user, onUpdateSecurity }) => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(user.twoFactorEnabled);
  const [securityQuestion, setSecurityQuestion] = useState(user.securityQuestion || '');
  const [securityAnswer, setSecurityAnswer] = useState('');

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    onUpdateSecurity({ twoFactorEnabled: !twoFactorEnabled });
  };

  const handleSecurityQuestionSave = () => {
    onUpdateSecurity({ securityQuestion, securityAnswer });
    setSecurityAnswer('');
  };

  return (
    <div className="security-settings">
      <h3>Security Settings</h3>
      <div className="two-factor-auth">
        <label>
          <input
            type="checkbox"
            checked={twoFactorEnabled}
            onChange={handleTwoFactorToggle}
          />
          Enable Two-Factor Authentication (2FA)
        </label>
      </div>
      <div className="security-questions">
        <h4>Security Question</h4>
        <input
          type="text"
          value={securityQuestion}
          onChange={(e) => setSecurityQuestion(e.target.value)}
          placeholder="Your security question"
        />
        <input
          type="password"
          value={securityAnswer}
          onChange={(e) => setSecurityAnswer(e.target.value)}
          placeholder="Your answer"
        />
        <button className="save-security-question-btn" onClick={handleSecurityQuestionSave}>
          Save Security Question
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;
