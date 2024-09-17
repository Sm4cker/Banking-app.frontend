import React from 'react';
import NotificationItem from './NotificationItem';
import '../pages/StyleSheet/Notifications.css';

const NotificationsList = ({ notifications, onDismiss }) => {
  if (notifications.length === 0) {
    return <p className="no-notifications">You have no new notifications.</p>;
  }

  return (
    <div className="notifications-list">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onDismiss={onDismiss}
        />
      ))}
    </div>
  );
};

export default NotificationsList;