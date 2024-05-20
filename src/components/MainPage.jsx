import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navitem from './Navitem';

export default function Mainpage() {
  useEffect(() => {
    const playAudio = async () => {
      try {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const response = await fetch('/public/Windowsxpstartupsoundanderror.mp3'); // Update the path if necessary
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);

        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);

        // Resume the context to ensure it plays
        await context.resume();
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
