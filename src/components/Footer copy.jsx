// Footer.js
import React, { useEffect, useState } from 'react';
import menuIcon from '../assets/img/menuIcon.png';
import { useLocation } from 'react-router-dom';

import icon1 from '../assets/img/icon1.png'
import icon2 from '../assets/img/icon2.png'
import icon3 from '../assets/img/icon3.png'
import icon4 from '../assets/img/icon4.png'
import icon5 from '../assets/img/icon5.png'
import icon6 from '../assets/img/icon6.png'
import icon7 from '../assets/img/icon7.png'

const Footer = ({ pageName }) => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const name = location.pathname.split('/').join('');
  return (
    <footer className="footer d-flex justify-content-between align-items-center">
      <div className="footer-left d-flex align-item-center gap-2">
        <button className="menu">
          <img src={menuIcon} alt="Menu Icon" /> Menu
        </button>
        <button className="pageName d-inline-flex align-items-center flex-wrap gap-2">
          {name==''?(<img src={icon1} alt=''/>):''}
          {name=='about'?(<img src={icon2} alt=''/>):''}
          {name=='howtobuy'?(<img src={icon3} alt=''/>):''}
          {name=='tokenomics'?(<img src={icon4} alt=''/>):''}
          {name=='chart'?(<img src={icon5} alt=''/>):''}
          {name=='faq'?(<img src={icon6} alt=''/>):''}
          {name=='contact'?(<img src={icon7} alt=''/>):''}

          {name==''?'Home':name}
          </button>
      </div>
      <div className="footer-right">
        <p className="copyright">COPYRIGHT © {currentYear} $DumRose.</p>
      </div>
    </footer>
  );
};

export default Footer;
