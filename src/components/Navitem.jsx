import React from 'react';
import { NavLink } from 'react-router-dom';
import icon1 from '../assets/img/icon1.png';
import icon2 from '../assets/img/icon2.png';
import icon3 from '../assets/img/icon3.png';
import icon4 from '../assets/img/icon4.png';
import icon5 from '../assets/img/icon5.png';
import icon6 from '../assets/img/icon6.png';
import icon7 from '../assets/img/icon7.png';

// Define your sound file path
const soundFilePath = '/WindowsXPErrorSound.mp3';

const Navitem = () => {
  // Function to play the sound
  const playSound = () => {
    const audio = new Audio(soundFilePath);
    audio.play();
  };

  const navitem = [
    { title: 'Home', url: '/', img: icon1 },
    { title: 'About', url: '/about', img: icon2 },
    { title: 'How to Buy', url: '/howtobuy', img: icon3 },
    { title: 'tokenomics', url: '/tokenomics', img: icon4 },
    { title: 'Chart', url: '/chart', img: icon5 },
    { title: 'FAQ', url: '/faq', img: icon6 },
    { title: 'Contact', url: '/contact', img: icon7 },
  ];

  return (
    <div className="navitem">
      <ul className="text-center">
        {navitem.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.url}
              onClick={playSound} // Add onClick event to play sound
            >
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navitem;
