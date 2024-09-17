import React, { useState } from 'react';
import '../pages/StyleSheet/LoanManagement.css';

const MakePaymentForm = ({ onMakePayment }) => {
  const [loanId, setLoanId] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onMakePayment({ loanId, paymentAmount });
    setLoanId('');
    setPaymentAmount('');
  };

  return (
    <form className="make-payment-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Loan ID" 
        value={loanId}
        onChange={(e) => setLoanId(e.target.value)}
        required 
      />
      <input 
        type="number" 
        placeholder="Payment Amount" 
        value={paymentAmount}
        onChange={(e) => setPaymentAmount(e.target.value)}
        required 
      />
      <button type="submit" className="submit-payment-btn">Submit Payment</button>
    </form>
  );
};

export default MakePaymentForm;
