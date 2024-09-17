import React from 'react';
import '../pages/StyleSheet/Notifications.css';

const NotificationItem = ({ notification, onDismiss }) => {
  const { id, type, message, date } = notification;

  return (
    <div className={`notification-item ${type}`}>
      <div className="notification-icon">
        <i className={`icon-${type}`}></i>
      </div>
      <div className="notification-content">
        <p className="notification-message">{message}</p>
        <span className="notification-date">{date}</span>
      </div>
      <button className="dismiss-btn" onClick={() => onDismiss(id)}>
        ✕
      </button>
    </div>
  );
};

export default NotificationItem;
