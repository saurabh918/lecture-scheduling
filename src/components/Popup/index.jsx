// Popup.js
import React from 'react';
import './Popup.scss'; // You'll need to create the corresponding CSS file for styling

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;