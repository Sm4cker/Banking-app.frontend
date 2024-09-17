import React from 'react';
import AccountItem from '../components/AccountItem';
import QuickActionButton from '../components/QuickActionButton';
import RecentTransactions from '../components/RecentTransactions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './StyleSheet/Dashboard.css';

const Dashboard = () => {
  const accounts = [
    { accountName: 'Checking Account', balance: 5000 },
    { accountName: 'Savings Account', balance: 10000 }
  ];

  return (
    <div className="dashboard">
      <Navbar />
      <h1>Account Overview</h1>

      <div className="account-list">
        {accounts.map((account, index) => (
          <AccountItem
            key={index}
            accountName={account.accountName}
            balance={account.balance}
          />
        ))}

        
      </div>
      <h2>Quick Actions</h2>
      <div className="quick-actions">
        <QuickActionButton label="Transfer Funds" path="transfer-funds" />
        <QuickActionButton label="Pay Bills" path="bill-payments" />
        <QuickActionButton label="View Statements" path="" />
      </div>

      <RecentTransactions />
      <Footer />
    </div>
  );
};

export default Dashboard;
