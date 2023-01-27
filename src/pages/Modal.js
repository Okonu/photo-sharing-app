import React from 'react';
import {motion} from "framer-motion"
import './Modal.css';

const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

const modal ={
    hidden:{y:"-100vh", opacity: 0},
    visible:{y:"200px", opacity: 1, transition: {delay:0.1}}
}
const Modal = ({ children, setIsModalOpen }) => {
    return (
        <>
        <motion.div className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={()=>setIsModalOpen(false)}
        />
        <motion.div className="modal"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="hidden"
        >
            {children}</motion.div>
        {/* // <div className="modal-background">
        //     <div className="modal-content">
        //         {children}
        //         <button onClick={()=>setIsModalOpen(false)}>Close</button>
        //     </div>
        // </div> */}
        </>
    );
};

export default Modal;