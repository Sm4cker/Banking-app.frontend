import React from 'react';
import ContactForm from '../components/ContactForm';
import CompanyInfo from '../components/CompanyInfo';
import MapSection from '../components/MapSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './StyleSheet/Contact.css';

const ContactUsPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact-us-page">
        <h2>Get in Touch</h2>
        <div className="contact-container">
          <ContactForm />
          <CompanyInfo />
        </div>
        <MapSection />
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUsPage;
