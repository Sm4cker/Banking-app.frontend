import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './StyleSheet/TransferFunds.css';

const TransferFundsPage = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [transferHistory, setTransferHistory] = useState([]);

  const handleTransfer = () => {
    const newTransfer = {
      fromAccount,
      toAccount,
      amount,
      date: new Date().toLocaleDateString(),
    };
    setTransferHistory([...transferHistory, newTransfer]);
    setFromAccount('');
    setToAccount('');
    setAmount('');
  };
  

  return (
    <div>
        <Navbar />
        <div className="transfer-funds-page">
            <h2>Transfer Funds</h2>
            <div className="transfer-form">
                <label>From Account:</label>
                <select
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
                >
                <option value="">Select Account</option>
                <option value="Checking Account">Checking Account</option>
                <option value="Savings Account">Savings Account</option>
                </select>

                <label>To Account:</label>
                <select
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                >
                <option value="">Select Account</option>
                <option value="External Account">External Account</option>
                <option value="Savings Account">Savings Account</option>
                </select>

                <label>Amount:</label>
                <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />

                <button className='btn-TF' onClick={handleTransfer}>Submit Transfer</button>
            </div>

            <h3>Transfer History</h3>
            <div className="transfer-history">
                {transferHistory.length === 0 ? (
                <p>No transfers made yet.</p>
                ) : (
                transferHistory.map((transfer, index) => (
                    <div key={index} className="transfer-item">
                    <p><strong>From:</strong> {transfer.fromAccount}</p>
                    <p><strong>To:</strong> {transfer.toAccount}</p>
                    <p><strong>Amount:</strong> ${transfer.amount}</p>
                    <p><strong>Date:</strong> {transfer.date}</p>
                    </div>
                ))
                )}
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default TransferFundsPage;
