import React, { useRef } from 'react';



const CopyToClipboardButton = ({ text }) => {
  const textRef = useRef(null);

  const handleCopyClick = () => {
    // Select the text inside the input field
    textRef.current.select();
    // Execute copy command
    document.execCommand('copy');
    // Deselect the text
    window.getSelection().removeAllRanges();
  };

  return (
    <div>
      <input type="text" value={text} ref={textRef} readOnly style={{ position: 'absolute', left: '-9999px' }} />
      <button onClick={handleCopyClick}>Copy</button>
    </div>
  );
};

const Copy = () => {
  const textToCopy = 'This is the text to copy';

  return (
    <div>
      <p>{textToCopy}</p>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
};



export default Copy