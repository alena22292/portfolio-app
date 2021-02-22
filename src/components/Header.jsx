import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    const cssStyle = {
      backgroundImage: 'linear-gradient(rgba(155,200,205,.1), rgba(255,255,255,.2)), url("' + this.props.image + '")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      zIndex: -1,
    }
    return (
      <header className="page-top" style={cssStyle}>

        <div className="hero-text">
            <h1 style={{ color: '#f7f6e7' }} className="">{this.props.title}</h1>
            <h3 style={{ color: '#f7f6e7' }} className="text-uppercase">{this.props.subtitle}</h3>
            <div className="section-btn" id="section06" class="demo">
              <a href="#section07"><span></span></a>
            </div>
        </div>

      </header>
    );
  }
}

export default Header;
