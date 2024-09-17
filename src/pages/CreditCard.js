import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CreditCardOverview from '../components/CreditCardOverview';
import PayCreditCardForm from '../components/PayCreditCardForm';
import AddNewCardForm from '../components/AddNewCardForm';
import './StyleSheet/CreditCard.css';

const CreditCardManagementPage = () => {
  const [cards, setCards] = useState([]);

  const handleAddCard = (card) => {
    setCards([...cards, { ...card, id: cards.length + 1, lastFourDigits: card.cardNumber.slice(-4), availableCredit: 'N/A' }]);
  };

  const handlePayBill = (payment) => {
    // Handle payment logic here
    console.log('Payment made:', payment);
  };

  return (
    <div>
      <Navbar/>
      <div className="credit-card-management-page">
        <h2>Credit Card Management</h2>
        <AddNewCardForm onAddCard={handleAddCard} />
        <PayCreditCardForm onPayBill={handlePayBill} />
        <CreditCardOverview cards={cards} />
      </div>
      <Footer/>
    </div>
  );
};

export default CreditCardManagementPage;
