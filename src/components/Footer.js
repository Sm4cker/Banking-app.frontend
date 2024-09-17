import React from 'react';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-links">
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-info">
          <p>Bank Address: 123 Bank St, City, Country</p>
          <p>Email: support@bank.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  