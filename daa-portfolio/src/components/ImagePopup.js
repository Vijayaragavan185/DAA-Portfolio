import React from 'react';
import './ImagePopup.css';

function ImagePopup({ isOpen, onClose, images }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="popup-images">
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              className="popup-image" 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
