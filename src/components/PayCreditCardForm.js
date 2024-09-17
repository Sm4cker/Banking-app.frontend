import React, { useState } from 'react';
import '../pages/StyleSheet/CreditCard.css';

const PayCreditCardForm = ({ onPayBill }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPayBill({ amount });
    setAmount('');
  };

  return (
    <form className="pay-credit-card-form" onSubmit={handleSubmit}>
      <input 
        type="number" 
        placeholder="Payment Amount" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required 
      />
      <button type="submit" className="submit-payment-btn">Submit Payment</button>
    </form>
  );
};

export default PayCreditCardForm;
