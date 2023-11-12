
import React from "react"
import "./Confirmed.css"

const ConfirmedBooking = ({title, description, onClose}) => {
    return (
      <div className="popup-background" onClick={onClose}>
        <div className="popup">
            <h1 className="popup-title">{title}</h1>
            <p className="popup-description">{description}</p>
        </div>

       
        
      </div>
    );
  };
  

export default ConfirmedBooking;