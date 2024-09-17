import React from 'react';
import '../pages/StyleSheet/LoanManagement.css';

const LoanOverview = ({ loans }) => {
  return (
    <div className="loan-overview">
      <h3>Loan Overview</h3>
      {loans.length === 0 ? (
        <p>No loans available.</p>
      ) : (
        loans.map(loan => (
          <div key={loan.id} className="loan-item">
            <div className="loan-info">
              <span className="loan-type">{loan.type}</span>
              <span className="loan-balance">Balance: {loan.balance}</span>
              <span className="loan-due">Next Payment Due: {loan.nextPaymentDue}</span>
            </div>
            <div className="loan-actions">
              <button className="apply-loan-btn">Apply for Loan</button>
              <button className="make-payment-btn">Make Payment</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default LoanOverview;
