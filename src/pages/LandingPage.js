import { BrowserRouter  } from 'react-router-dom';
import React, {useState, useEffect } from 'react';
import './landingPage.css';
import {motion, AnimatePresence } from "framer-motion"
import Modal from './Modal';


function LandingPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(()=> {
            setIsModalOpen(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);
    return(
        <div>
            <h1>Photo Sharing App</h1>
            <p>This App Allows users to create and share albums of their photos. Sign Up or Login to get started!</p>
            <motion.a href="./login"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            className="cta-button">Login</motion.a>
            <motion.a href="/signup"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            className="cta-button">Sign Up</motion.a>
        {/* <im src={require('./images/image.png')} alt="App Demo" className="img-responsive"/> */}
        <AnimatePresence>
            {isModalOpen && (<Modal setIsModalOpen={setIsModalOpen}>
                <p>Sign Up Now to start creating albums and sharing your photos with the world.</p>
                <button onClick={()=> setIsModalOpen(false)}>Close </button>
                <a href="/signup" className="signup-button">Sign Up</a>
            </Modal>)}
        </AnimatePresence>
        </div>
    );
}

export default function App(){
    return(
        <BrowserRouter>
            <LandingPage/>
        </BrowserRouter>
    )
};