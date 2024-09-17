import React, { useState } from 'react';
import '../pages/StyleSheet/BillPayments.css';

const AddBillerForm = ({ onAddBiller }) => {
  const [billerName, setBillerName] = useState('');
  const [amountDue, setAmountDue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBiller({ name: billerName, amountDue });
    setBillerName('');
    setAmountDue('');
  };

  return (
    <form className="add-biller-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Biller Name" 
        value={billerName}
        onChange={(e) => setBillerName(e.target.value)}
        required 
      />
      <input 
        type="text" 
        placeholder="Amount Due" 
        value={amountDue}
        onChange={(e) => setAmountDue(e.target.value)}
        required 
      />
      <button type="submit" className="save-biller-btn">Save Biller</button>
    </form>
  );
};

export default AddBillerForm;
