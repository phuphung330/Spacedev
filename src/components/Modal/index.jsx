import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ visible, onCancel, isMaskClose, children }) => {
    if (!visible) return null;
    const onMaskClose = () => {
        if (isMaskClose) onCancel?.();
    };
    return createPortal(
        <div className='popup-video' id='popup-video' onClick={onMaskClose}>
            <div className='wrap'>{children}</div>
            <div className='close' onClick={onCancel} />
        </div>,
        document.body
    );
};

export default Modal;
