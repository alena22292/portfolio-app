import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <section className="s1">
          <div className="main-container">
            <div className="greeting-wrapper">
              <h1>Hi, I am Alena</h1>
            </div>

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
                      <Link className="" to="/about">About</Link>
                    </li>
                    <li>
                      <Link className="" to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="left-wrapper">
                <img className="img-fluid my-picture" src={props.image} alt="" />
                <h5 style={{ textAlign: 'center' }}>Personalize Theme</h5>
                <div className="theme-options">
                   <div id="light-mode" className={`${colorTheme === 'light-mode' ? 'theme-dots active' : 'theme-dots'}`} onClick={() => handleClick("light-mode")}></div>
                   <div id="green-mode" className={`${colorTheme === 'green-mode' ? 'theme-dots active' : 'theme-dots'}`} onClick={() => handleClick("green-mode")}></div>
                   <div id="blue-mode" className={`${colorTheme === 'blue-mode' ? 'theme-dots active' : 'theme-dots'}`} onClick={() => handleClick("blue-mode")}></div>
                   <div id="purple-mode" className={`${colorTheme === 'purple-mode' ? 'theme-dots active' : 'theme-dots'}`} onClick={() => handleClick("purple-mode")}></div>
                </div>
                <p className="light-text">*Theme settings will be saved for<br />your next visit</p>
              </div>
              <div className="right-wrapper">
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
          </div>
        </section>
      </div>
    );
}

export default Theme;
