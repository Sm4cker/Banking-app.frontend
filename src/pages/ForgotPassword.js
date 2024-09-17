import React, { useState } from 'react';
import './StyleSheet/AuthPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Password reset link has been sent to your email.');
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <h2>Forgot Password</h2>
        <p>Enter your registered email to reset your password.</p>
        <form onSubmit={handleForgotPassword}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth__btn">Send Reset Link</button>
          <p>
            Remembered your password? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;