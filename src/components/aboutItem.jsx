import React, { Component } from 'react';

class AboutItem extends Component {
  render(){
    return(
      <li className="row flex-box-bar">
        <span className="col-sm-12 col-lg-4">{this.props.name}</span>
        <div className="col-sm-12 col-lg-8 progressbar-container">
          <div className="progressbar-complete" style={{width: `${this.props.level}`}}>
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">{this.props.level}</span>
        </div>
      </li>
    );
  }
}

export default AboutItem;
