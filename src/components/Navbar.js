import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/bank-logo.png'
import notifi from '../images/notifications-1.png'
import setting from '../images/setting.png'

const Navbar = () => {
  return (
    <header className="header">
        <div className="logo">
          <h1><Link to="/"><img className='logo-img' src={logo} alt='logo'/></Link></h1>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/accounts">Accounts</Link></li>
            <li><Link to="/loan">Loans</Link></li>
            <li><Link to="/credit-card">Credit Cards</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>  
          </ul>
        </nav>
        <div className="auth-buttons">
          <div className='sl-btn'>
            <button className='login-btn'><Link to="/login" className='l-btn'>Login</Link></button>
            <button className='sign-btn'><Link to="/signup" className="s-btn">Signup</Link></button>
          </div>
          <div className='nav-icons'>
            <Link to="/notifications"><img src={notifi} alt='notifi'/></Link>
            <Link to="/profile-settings" className='setting-icon'><img src={setting} alt='profile-setting'/></Link>
          </div>
        </div>
    </header>
  );
};

export default Navbar;