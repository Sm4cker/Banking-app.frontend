import React from 'react';
import TransactionItem from './TransactionItem';
import './RecentTransactions.css'; 
import QuickActionButton from './QuickActionButton';

const recentTransactions = [
  { date: '2024-09-14', amount: '$200', type: 'Deposit' },
  { date: '2024-09-13', amount: '$150', type: 'Withdrawal' },
  { date: '2024-09-12', amount: '$300', type: 'Transfer' },
  { date: '2024-09-11', amount: '$100', type: 'Deposit' },
  { date: '2024-09-10', amount: '$250', type: 'Withdrawal' }
];

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <div className="transaction-list">
        {recentTransactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            date={transaction.date}
            amount={transaction.amount}
            type={transaction.type}
          />
        ))}
      </div >
      <div className="quick-actions">
        <QuickActionButton label="View All Transactions" path="" />
      </div>
    </div>
  );
};

export default RecentTransactions;