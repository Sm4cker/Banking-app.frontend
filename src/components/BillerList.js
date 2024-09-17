import React from 'react';
import '../pages/StyleSheet/BillPayments.css';

const BillerList = ({ billers }) => {
  return (
    <div className="biller-list">
      {billers.length === 0 ? (
        <p>No billers added yet.</p>
      ) : (
        billers.map(biller => (
          <div key={biller.name} className="biller-item">
            <div className="biller-info">
              <span className="biller-name">{biller.name}</span>
              <span className="biller-amount">{biller.amountDue}</span>
            </div>
            <button className="pay-now-btn">Pay Now</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BillerList;
