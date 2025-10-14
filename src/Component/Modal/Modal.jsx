import React from "react";
import "./Style.css";
import ButtonComponent from "../Button/ButtonComponet";
import { FaTimes } from "react-icons/fa";


function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="close-wrapper">
                    <ButtonComponent
                        title={<FaTimes/>}
                        color="#2d2d2d"
                        backgroundColor="#000"
                        height="30px"
                        width="30px"
                        onClick={onClose}
                    />
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
