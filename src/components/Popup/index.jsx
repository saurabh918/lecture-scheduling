import React from 'react';

// import css
import './style.scss'; 

const Popup = ({ message, onClose }) => {
  return (
    <>
    <div className="overlay"></div>
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
    </>
  );
};  

export default Popup;