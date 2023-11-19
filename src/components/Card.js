import React, { useState } from 'react';
import '../styles/Card.css'; // Import the CSS file for styling

const CardFlip = ({ fullName, occupation, company, businessEmail, businessContact }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <h2>{fullName}</h2>
          <p>{occupation}</p>
        </div>
        <div className="card-back">
          <h2>{company}</h2>
          <br/>
          <p>Email: {businessEmail}</p>
          <br/>
          <p>Contact: 
            {businessContact}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;