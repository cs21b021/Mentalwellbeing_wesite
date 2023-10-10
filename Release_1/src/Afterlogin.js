import React, { useState } from 'react';
import { BrowserRouter , Route,Routes ,Link} from 'react-router-dom';
import './App.css'; // Import your CSS file
import image from './webperson.jpg'
import logo from './weblogo.jpg'
import chat from './webchat4.jpg'
import prof from './webprof.jpg'
import Login from './components/Login';
import Community from './components/Community';



const Afterlogin = () => {
    const [context, setContext] = useState('');

    const [showExpertOptions, setShowExpertOptions] = useState(false);

    const toggleExpertOptions = () => {
      setShowExpertOptions(!showExpertOptions);
    };


  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="App Logo" className="navbar-logo" />
        <div className="left-options">
        <a href="/community">Community</a>
        <div class="dropdown">
            <button class="dropbtn">Consult Experts</button>
            <div class="dropdown-content">
              <a href="/booking slot">Booking Slot</a>
              <a href="/expert">Become an Expert</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">For Business</button>
            <div class="dropdown-content">
              <a href="/parental">Parental access</a>
              <a href="/educationa">Educational institutions</a>
            </div>
        </div>
          <a href="/about">About</a>
        </div>
        <a href="/prof" className="right-options">
              <img src={prof} alt="Button" className="profile"/>
            </a>

      </nav>




      <main className="main-content">
      <div className="center-content">
  <div className="image-container">
    <img src={image} alt="Main_Image" className="image" />

    <div className="overlay-top">
      <div className="emotional-analysis">
        <h1 className="emotional-analysis-title">
          Emotional Analysis using text
        </h1>
        <input
          type="password"
          placeholder="context"
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />
        <a href="/person">
          <button className="emo-analysis-top">
            Emotional Analysis
          </button>
        </a>
      </div>
      </div>
      
      <div className="overlay-bottom">
      <div className="emotional-analysis">
        <h1 className="emotional-analysis-title">
          Emotional Analysis using Social Media
        </h1>
        <input
          type="password"
          placeholder="context"
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />
        <a href="/person">
          <button className="emo-analysis-bottom">
            Emotional Analysis
          </button>
        </a>
      </div>
    </div>
  </div>
  </div>

      </main>
    </div>
  );
} ;

export default Afterlogin;