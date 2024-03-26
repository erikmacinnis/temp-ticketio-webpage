import React from 'react';
import ticketioLogo from '../assets/ticketio_logo.png'
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ticketioLogo} alt='TicketIO'></img>
      </div>
    </nav>  
  );
};

export default NavBar;
