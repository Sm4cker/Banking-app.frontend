import React, { useState } from 'react';
import '../pages/StyleSheet/CreditCard.css';

const AddNewCardForm = ({ onAddCard }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard({ cardNumber, expiryDate, cvv });
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <form className="add-card-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Card Number" 
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required 
      />
      <input 
        type="text" 
        placeholder="Expiry Date (MM/YY)" 
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required 
      />
      <input 
        type="text" 
        placeholder="CVV" 
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required 
      />
      <button type="submit" className="submit-add-card-btn">Save Card</button>
    </form>
  );
};

export default AddNewCardForm;
