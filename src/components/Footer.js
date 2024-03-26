import React from 'react';
import './Footer.css'; // Adjust the path according to your file structure
import ticketioLogo from '../assets/ticketio_logo.png'

const Footer = () => {
 return (
    <footer>
      <img src={ticketioLogo} alt='TicketIO'></img>
      <p>&copy; 2024 13213854 Canada Inc. All rights reserved.</p>
      <p>Contact: <a href="mailto:your-email@example.com">erikmacinnis@ticketio.ca</a></p>
    </footer>
 );
};

export default Footer;
