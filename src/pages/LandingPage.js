import React from 'react';
import './landingPage.css';

function LandingPage(){
    return(
        <div>
            <h1>Photo Sharing App</h1>
            <p>This App Allows users to create and share albums of their photos. Sign Up or Login to get started!</p>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        {/* <im src={require('./images/image.png')} alt="App Demo" className="img-responsive"/> */}
        </div>
    );
}

export default LandingPage;