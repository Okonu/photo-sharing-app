import React from 'react';
import './Modal.css';

const Modal = ({ children, setIsModalOpen }) => {
    return (
        <div className="modal-background">
            <div className="modal-content">
                {children}
                <button onClick={()=>setIsModalOpen(false)}>Close</button>
            </div>
        </div>
    );
};

export default Modal;