import React, { useState } from 'react';
import '../styles/announcementcards.css'; // Make sure to import your CSS file

const MyCardComponent = () => {
  const [isCardClicked, setIsCardClicked] = useState(false);

  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked); // Toggle the state
  };

  const handleClose = () => {
    setIsCardClicked(false);
  };

  return (
    <div>
      <div className="cards" onClick={handleCardClick}>
      
        <p>Announcements Card</p>
      </div>

      {isCardClicked && (
        <>
          {window.innerWidth <= 768 ? (
            // Mobile view - Display information in a new page
            window.location.replace("/Test2")
          ) : (
            // Desktop view - Display information in a popup
            <PopupViewComponent onClose={handleClose} />
          )}
        </>
      )}
    </div>
  );
};

const PopupViewComponent = ({ onClose }) => {
  return (
    <div className="popup">
      Web announcement Detail
      <p>Popup Content</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};



export default MyCardComponent;
