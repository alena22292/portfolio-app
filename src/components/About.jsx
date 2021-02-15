import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-me">
              <h4>EXPERTISE</h4>
              <p>Fullstack developer with primary focus on Ruby on Rails and React: </p>
              <div className="languages">
                <ul>
                  <li>Python</li>
                  <li>Django</li>
                  <li>JavaScript</li>
                </ul>
                <ul>
                  <li>HTML/CSS</li>
                  <li>Ruby on Rails</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
            <div className="social-links">
             <h4>Useful links</h4>
             <p>It is just for practice purporse</p>
             <ul>
                <li><i className="fab fa-github"></i></li>
                <li><i className="fab fa-linkedin-in"></i></li>
                <li><i className="fab fa-instagram"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

