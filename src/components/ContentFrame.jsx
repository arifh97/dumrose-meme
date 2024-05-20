import React, { useState, useEffect } from 'react';
import minimizeIcon from "../assets/img/minimizeIcon.png";
import zoomIcon from "../assets/img/zoomIcon.png";
import closeIcon from "../assets/img/closeIcon.png";
import Windowsxpstartupsoundanderror from "../assets/audio/Windowsxpstartupsoundanderror.mp3";

const soundFilePath = Windowsxpstartupsoundanderror;

export default function ContentFrame({ icon, name, children }) {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const playSound = () => {
        const audio = new Audio(soundFilePath);
        console.log('Attempting to play sound:', audio);  // Log audio object
        audio.play().catch(error => console.error('Error playing sound:', error));
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
