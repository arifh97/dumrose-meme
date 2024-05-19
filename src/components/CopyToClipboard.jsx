import {React, useState} from 'react';
import checked from "../assets/img/checked.svg";

export default function CopyToClipboard() {
    const [textToCopy, setTextToCopy] = useState('RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a');
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setIsCopied(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };
  return (
    <div className="copytoclipboard-inner">
        <div className="copytoclipboard">
                <p>
                    {textToCopy}
                </p>
            <button onClick={handleCopyToClipboard}>
                {!isCopied && (
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                    <g clip-path="url(#clip0_45_667)">
                        <path d="M17.2915 7.60425H8.80192C7.86419 7.60425 7.104 8.36443 7.104 9.30216V17.7917C7.104 18.7295 7.86419 19.4897 8.80192 19.4897H17.2915C18.2292 19.4897 18.9894 18.7295 18.9894 17.7917V9.30216C18.9894 8.36443 18.2292 7.60425 17.2915 7.60425Z" stroke="#262626" stroke-width="2.54688" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.70817 14.3959C2.77432 14.3959 2.01025 13.6319 2.01025 12.698V4.20841C2.01025 3.27456 2.77432 2.5105 3.70817 2.5105H12.1978C13.1316 2.5105 13.8957 3.27456 13.8957 4.20841" stroke="#262626" stroke-width="2.54688" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_45_667">
                        <rect width="20.375" height="20.375" fill="white" transform="translate(0.3125 0.8125)"/>
                        </clipPath>
                    </defs>
                    </svg>
                </span>
                )}
                {isCopied && (
                <span className='copyed'>
                    <img src={checked} alt="" />
                </span>
                )}
            </button>
        </div>
    </div>
    
  )
}