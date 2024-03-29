import React from 'react';
import './Footer.css'; // Adjust the path according to your file structure
import ticketioLogo from '../assets/ticketio_logo.png'

const Footer = () => {
 return (
    <footer>
      <img src={ticketioLogo} alt='TicketIO'></img>
      <p>&copy; 2024 13213854 Canada Inc. All rights reserved.</p>
      <p>Contact: <a href="mailto:erikmacinnis@ticketio.ca">erikmacinnis@ticketio.ca</a></p>
      <a href="/PrivacyPolicy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
    </footer>
 );
};

export default Footer;
