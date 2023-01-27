import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <LandingPage/>
    </div>
    </BrowserRouter>
  );
}

export default App;
