import React from 'react';

const AccountItem = ({ accountName, balance }) => {
  return (
    <div className="account-item">
      <h3>{accountName}</h3>
      <p>Balance: ${balance}</p>
      <button>View Details</button>
    </div>
  );
};

export default AccountItem;
