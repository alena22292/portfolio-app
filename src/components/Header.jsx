import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <header className="masthead page-top" style={{ backgroundImage: 'linear-gradient(rgba(155,200,205,.1), rgba(255,255,255,.2)), url("' + this.props.image + '")' }}>

        <div className="hero-text">
            <h1 style={{ color: '#276678' }} className="">{this.props.title}</h1>
            <h3 style={{ color: '#1687a7' }} className="text-uppercase">{this.props.subtitle}</h3>
            {this.props.showButton &&
                <Link className="btn btn-primary btn-xl text-uppercase " to={this.props.link}>{this.props.buttonText}</Link>
            }
        </div>

      </header>
    );
  }
}

export default Header;
