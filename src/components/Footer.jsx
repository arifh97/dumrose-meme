// Footer.js
import React from 'react';
import menuIcon from '../assets/img/menuIcon.png';

const Footer = ({ pageName }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer d-flex justify-content-between">
      <div className="footer-left">
        <button className="menu">
          <img src={menuIcon} alt="Menu Icon" /> Menu
        </button>
        <span className="pageName">{pageName}</span>
      </div>
      <div className="footer-right">
        <p className="copyright">COPYRIGHT © {currentYear} $DumRose.</p>
      </div>
    </footer>
  );
};

export default Footer;
