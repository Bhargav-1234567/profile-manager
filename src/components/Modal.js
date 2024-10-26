// src/components/Modal.js
import React from "react";

const Modal = ({ show, children, onClose }) => {
  return (
    <>
      {show && (
        <div className="backdrop" onClick={onClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
