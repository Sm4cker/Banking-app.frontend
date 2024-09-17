import React from 'react';
import AccountItem from '../components/AccountItem';
import QuickActionButton from '../components/QuickActionButton';
import RecentTransactions from '../components/RecentTransactions';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './StyleSheet/Accounts.css';

const accounts = [
  { accountName: 'Checking Account', balance: '1500' },
  { accountName: 'Savings Account', balance: '5000' },
  { accountName: 'Credit Card Account', balance: '1000' }
];

const accountTransactions = [
  { date: '2024-09-10', amount: '$100', type: 'Deposit' },
  { date: '2024-09-09', amount: '$50', type: 'Withdrawal' }
];

const AccountsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="accounts-page">
        <h2 className="page-title">Accounts Summary</h2>
        <div className="accounts-list">
          {accounts.map((account, index) => (
            <AccountItem
              key={index}
              accountName={account.accountName}
              balance={account.balance}
            />
          ))}
        </div>
        <div className="account-actions">
          <QuickActionButton label="Add New Account" path="/add-account" />
          <QuickActionButton label="View Statements" path="/statements" />
        </div>
        <RecentTransactions transactions={accountTransactions} />
      </div>
      <Footer />
    </div>
  );
};

export default AccountsPage;
