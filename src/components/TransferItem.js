import React, { useState } from 'react';
import './TransferItem.css';

const TransferItem = ({ date, amount, type, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="transfer-item">
      <div className="transfer-summary">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Amount:</strong> {amount}</p>
        <p><strong>Type:</strong> {type}</p>
        <button className="view-details-btn" onClick={toggleDetails}>
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {isExpanded && (
        <div className="transfer-details">
          <p><strong>Details:</strong> {details}</p>
        </div>
      )}
    </div>
  );
};

export default TransferItem;
