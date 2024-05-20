import React, { useState, useEffect } from 'react';
import minimizeIcon from "../assets/img/minimizeIcon.png";
import zoomIcon from "../assets/img/zoomIcon.png";
import closeIcon from "../assets/img/closeIcon.png";
import WindowsXPErrorSound from '../assets/audio/WindowsXPErrorSound.mp3';

// Define sound file path
const soundFilePath = WindowsXPErrorSound;

export default function ContentFrame({ icon, name, children }) {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    // Function to play the sound
    const playSound = () => {
        const audio = new Audio(soundFilePath);
        audio.play();
    };

    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    const handleClose = () => {
        setIsClosing(true);
    };

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                setIsClosed(true);
            }, 300); // Match this duration with the CSS transition time
            return () => clearTimeout(timer);
        }
    }, [isClosing]);

    if (isClosed) return null;

    return (
        <div className={`contentFrame ${isZoomed ? 'zoomed' : ''} ${isClosing ? 'closing' : ''}`}>
            <div className="contentFrame-topBar d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <div className="topLeft d-flex align-items-center gap-2">
                    <figure className='tmIcon'>
                        <img src={icon} alt="" />
                    </figure>
                    <span>{name}</span>
                </div>
                <div className="topRight">
                    <button onClick={() => { handleClose(); playSound(); }}><img src={minimizeIcon} alt="" /></button>
                    <button onClick={() => { handleZoom(); playSound(); }}><img src={zoomIcon} alt="" /></button>
                    <button onClick={() => { handleClose(); playSound(); }}><img src={closeIcon} alt="" /></button>
                </div>
            </div>
            <div className="contentFrame-details">
                {children}
            </div>
        </div>
    );
}
