import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './StyleSheet/Home.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h2>Your Digital Banking Starts Here</h2>
        <p>Experience modern banking with ease.</p>
        <button className="service-btn">
        <Link to="/signup">Get Started</Link>
        </button>
      </section>

      <section className="services">
        <h3>Our Core Services</h3>
        <div className="service-cards">
          <div className="service-card scl">
            <h4>Savings Accounts</h4>
            <p>Secure and flexible savings solutions.</p>
            <button className="service-btn">
            <Link to="/accounts">Explore More</Link>
            </button>
          </div>
          <div className="service-card scm">
            <h4>Loans</h4>
            <p>Easy loans to fulfill all your dreams.</p>
            <button className="service-btn">
              <Link to="/loan">Explore More</Link>
            </button>
          </div>
          <div className="service-card scr">
            <h4>Credit Cards</h4>
            <p>Credit options to suit your lifestyle.</p>
            <button className="service-btn">
            <Link to="/credit-card">Explore More</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h3>What Our Customers Say</h3>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <p>"This bank has changed the way I handle my finances. Amazing services!"</p>
            <h4>– John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"Efficient and fast, I love the simplicity of online banking here."</p>
            <h4>– Sarah Williams</h4>
          </div>
          <div className="testimonial-card">
            <p>"Customer support is excellent and the loan process was so smooth!"</p>
            <h4>– Michael Brown</h4>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};



export default HomePage;
