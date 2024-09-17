import React, { useState } from 'react';
import NotificationsList from '../components/NotificationsList';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './StyleSheet/Notifications.css';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'transaction',
      message: 'You have a new transaction of $500.',
      date: '2023-10-01',
    },
    {
      id: 2,
      type: 'reminder',
      message: 'Your electricity bill is due tomorrow.',
      date: '2023-10-02',
    },
    {
      id: 3,
      type: 'security',
      message: 'New login from a new device.',
      date: '2023-10-03',
    },
  ]);

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <Navbar/>
      <div className="notifications-page">
        <h2>Notifications</h2>
        <NotificationsList notifications={notifications} />
        <button className="clear-all-btn" onClick={clearAllNotifications}>
          Clear All
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default NotificationsPage;
