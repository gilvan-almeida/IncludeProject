import React from "react";
import "./Style.css";

function AlertBox({ message }) {
  return (
    <div className="alertOverlay">
      <div className="alertContent">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default AlertBox;