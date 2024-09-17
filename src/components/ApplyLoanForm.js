import React, { useState } from 'react';
import '../pages/StyleSheet/LoanManagement.css';

const ApplyLoanForm = ({ onApplyLoan }) => {
  const [loanType, setLoanType] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyLoan({ type: loanType, amount });
    setLoanType('');
    setAmount('');
  };

  return (
    <form className="apply-loan-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Loan Type" 
        value={loanType}
        onChange={(e) => setLoanType(e.target.value)}
        required 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required 
      />
      <button type="submit" className="submit-loan-btn">Submit Application</button>
    </form>
  );
};

export default ApplyLoanForm;
