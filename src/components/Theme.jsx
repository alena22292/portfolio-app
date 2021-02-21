import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
// Images:
import my_pic from '../images/image_myself.jpg';

function Theme(props) {
    // state
    const [colorTheme, setColorTheme] = useState('light-mode');

    // effect
    useEffect(() => {
      // check for selected team, localstorage value
      const currentThemeColor = localStorage.getItem('theme-color');
      // if found set selected theme value in state
      if (currentThemeColor) {
        setColorTheme(currentThemeColor);
      }
    }, []);

    // set theme
    const handleClick = (theme) => {
      setColorTheme(theme);
      localStorage.setItem('theme-color', theme);
    };

    return (
        <section>
            <div className="greeting-wrapper">
              <h1>Hi, I am Alena</h1>
            </div>
          <div className="container">
            <div className={`intro-wrapper ${colorTheme}`}>
              <div className="nav-wrapper">
                <div className="dots-wrapper">
                  <div id="dot-1" className="nav-dots"></div>
                  <div id="dot-2" className="nav-dots"></div>
                  <div id="dot-3" className="nav-dots"></div>
                </div>
                <div id="navigation">
                  <ul>
                    <li>
                      <a target="_blank" rel="noreferrer" href={`${props.resume}`}><i class="far fa-arrow-alt-circle-down"></i> Resume</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>

              </div>

              <div className="row">
              <div className="col-sm-12 col-md-4 left-wrapper">
                <img className="img-fluid my-picture" src={my_pic} alt="" />
                <h5 style={{ textAlign: 'center' }}>Personalize Theme</h5>
                <div className="theme-options">
                   <div id="light-mode" className={`${colorTheme === 'light-mode' ? 'theme-dots active' : 'theme-dots'}`} onClick={() => handleClick("light-mode")}></div>
                   <div id="green-mode" className={`${colorTheme === 'green-mode' ? 'theme-dots active' : 'theme-dots'}`} onClick={() => handleClick("green-mode")}></div>
                   <div id="blue-mode" className={`${colorTheme === 'blue-mode' ? 'theme-dots active' : 'theme-dots'}`} onClick={() => handleClick("blue-mode")}></div>
                   <div id="purple-mode" className={`${colorTheme === 'purple-mode' ? 'theme-dots active' : 'theme-dots'}`} onClick={() => handleClick("purple-mode")}></div>
                </div>
                <p className="light-text">*Theme settings will be saved for<br />your next visit</p>
              </div>
              <div className="col-sm-12 col-md-8 right-wrapper">
                <div id="preview-shadow">
                  <div id="preview">
                    <div id="corner-tl" className="corner"></div>
                    <div id="corner-tr" className="corner"></div>
                    <h3>About me...</h3>
                    <p>Curious about coding and cutting age technlogies. Good teamworker and responsible person.</p>
                    <div id="corner-bl" className="corner"></div>
                    <div id="corner-br" className="corner"></div>
                  </div>
                </div>
              </div>
              </div>

              <About />
            </div>
          </div>
        </section>
    );
}

export default Theme;
