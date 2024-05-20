import {React, useState} from 'react';
import checked from "../assets/img/checked.svg";
import copy from "../assets/img/copy.svg";

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
                   <img src={copy} alt="" />
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