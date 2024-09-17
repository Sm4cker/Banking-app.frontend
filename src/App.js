import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AccountsPage from './pages/Accounts';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import DashboardPage from './pages/Dashboard';
import CreditCardPage from './pages/CreditCard';
import LoanPage from './pages/Loan';
import NotificationsPage from './pages/Notifications';
import ProfileSettingsPage from './pages/ProfileSettings';
import ContactPage from './pages/Contact';
import ForgotPasswordPage from './pages/ForgotPassword';
import TransferFundsPage from './pages/TransferFunds';
import BillPaymentsPage from './pages/BillPayments';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/credit-card" element={<CreditCardPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile-settings" element={<ProfileSettingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/dashboard/transfer-funds" element={<TransferFundsPage />} />
        <Route path="/dashboard/bill-payments" element={<BillPaymentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
