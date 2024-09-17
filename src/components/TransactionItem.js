import React from 'react';

const TransactionItem = ({ date, amount, type }) => {
  return (
    <div className="transaction-item">
      <span className="transaction-date"><strong>Date:</strong> {date}</span><br/>
      <span className="transaction-amount"><strong>Amount:</strong> {amount}</span><br/>
      <span className="transaction-type"><strong>Type:</strong>{type}</span>
    </div>
  );
};

export default TransactionItem;
