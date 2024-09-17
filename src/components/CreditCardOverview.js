import React from 'react';
import '../pages/StyleSheet/CreditCard.css';

const CreditCardOverview = ({ cards }) => {
  return (
    <div className="credit-card-overview">
      <h3>Credit Card Overview</h3>
      {cards.length === 0 ? (
        <p>No credit cards linked.</p>
      ) : (
        cards.map(card => (
          <div key={card.id} className="card-item">
            <div className="card-info">
              <span className="card-number">Card Number: **** {card.lastFourDigits}</span>
              <span className="card-type">{card.type}</span>
              <span className="available-credit">Available Credit: {card.availableCredit}</span>
            </div>
            <div className="card-actions">
              <button className="pay-bill-btn">Pay Credit Card Bill</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CreditCardOverview;
