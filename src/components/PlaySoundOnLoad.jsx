import React, { useEffect } from 'react';

const PlaySoundOnLoad = () => {
  useEffect(() => {
    const audio = new Audio('/notification.mp3');
    audio.play();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default PlaySoundOnLoad;
