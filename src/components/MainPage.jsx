import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navitem from './Navitem';
import WindowsXPErrorSound from '../assets/audio/Windowsxpstartupsoundanderror.mp3';

export default function Mainpage() {
  useEffect(() => {
    const playAudio = async () => {
      try {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        await context.resume(); // Resume the context first

        const response = await fetch(WindowsXPErrorSound); // Make sure this path is correct
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);

        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);

        source.start(0);
      } catch (error) {
        console.log('Error playing audio:', error);
      }
    };

    playAudio();
  }, []);

  return (
    <div className="main-section h-100">
      <div className="row align-items-center mainRow">
        <div className="col-md-2">
          <Navitem />
        </div>
        <div className="col-md-10">
          <div className="d-flex align-items-center justify-content-center">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
