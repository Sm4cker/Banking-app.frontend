import React, { useState } from 'react';
import BillerList from '../components/BillerList';
import AddBillerForm from '../components/AddBillerForm';
import Navbar from '../components/Navbar'
import './StyleSheet/BillPayments.css';

const BillPaymentsPage = () => {
  const [billers, setBillers] = useState([]);

  const handleAddBiller = (biller) => {
    setBillers([...billers, biller]);
  };

  return (
    <div>
      <Navbar/>
      <div className="bill-payments-page">
        <h2>Bill Payments</h2>
        <AddBillerForm onAddBiller={handleAddBiller} />
        <BillerList billers={billers} />
      </div>
    </div>
  );
};

export default BillPaymentsPage;
