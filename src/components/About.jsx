import React, { Component } from 'react';
import AboutItem from './aboutItem';

class About extends Component {
  render() {
    const languages = [
    {name: "Python", level: "70%"},
    {name: "Django", level: "30%"},
    {name: "JavaScript", level: "85%"},
    {name: "React", level: "80%"},
    {name: "HTML/CSS", level: "95%"},
    {name: "Ruby on Rails", level: "90%"},
    {name: "Heroku", level: "70%"},
    ]
    return (
      <section className="about" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-me">
              <div className="about-me-text">
                <h2>EXPERTISE</h2>
                <h4>Fullstack developer with primary focus on Ruby on Rails and React: </h4>
              </div>
              <div className="language-container">
                <ul>
                 {languages.map((item, i) => {
                  return <AboutItem {...item} key={i} />
                 })}
                </ul>
              </div>
            </div>
            <div className="social-links">
              <div className="about-me-text">
               <h2>Useful links</h2>
               <p>It is just for practice purporse</p>
             </div>
             <ul>
                <li><a href="https://github.com/alena22292" target="_blank"><i id="social-icon" className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/alena-gritsiuk-62667317b/" target="_blank"><i id="social-icon" className="fab fa-linkedin-in"></i></a></li>
                <li><i id="social-icon" className="fab fa-instagram"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

