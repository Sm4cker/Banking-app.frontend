import React, { useState } from 'react';
import LoanOverview from '../components/LoanOverview';
import ApplyLoanForm from '../components/ApplyLoanForm';
import MakePaymentForm from '../components/MakePaymentForm';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './StyleSheet/LoanManagement.css';

const LoanManagementPage = () => {
  const [loans, setLoans] = useState([]);

  const handleApplyLoan = (loan) => {
    setLoans([...loans, { ...loan, id: loans.length + 1 }]);
  };

  const handleMakePayment = (payment) => {
    console.log('Payment made:', payment);
  };

  return (
    <div>
      <Navbar/>
      <div className="loan-management-page">
        <h2>Loan Management</h2>
        <ApplyLoanForm onApplyLoan={handleApplyLoan} />
        <MakePaymentForm onMakePayment={handleMakePayment} />
        <LoanOverview loans={loans} />
      </div>
      <Footer/>
    </div>
  );
};

export default LoanManagementPage;
