import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="s2 page-top" id="about">
      <div className="container">
        <div className="main-container">
          <div className="about-wrapper">
            <div className="about-me">
              <h4>More about me</h4>
              <p>Lorem, elitrporis inventore blanditiis tempore, nemo dolorum ad quia. Ab, fuga illum quidem dicta molestias placeat adipisci nulla consequatur.</p>
              <p>Lorem, elitrporis inventore blanditiis tempore, nemo dolorum ad quia. Ab, fuga illum quidem dicta molestias placeat adipisci nulla consequatur.</p>
              <hr />
              <h4>EXPERTISE</h4>
              <p>Fullstack developer with primary focus on Ruby on Rails and React: <br /> <a className="link-color" href="../../../Alena_Gritsiuk_Resume.pdf">Download Resume</a></p>
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
                  <li>GitHub</li>
                  <li>linkedIn</li>
                  <li>Instagram</li>
                </ul>
            </div>

          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default About;

