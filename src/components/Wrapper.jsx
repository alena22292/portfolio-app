import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responsive: false,
    };
  }

  myFunction = () => {
    this.setState({ responsive: !this.state.responsive });
  }

  render() {
    return (
      <div>
        <div className={this.state.responsive ? 'topnav responsive' : 'topnav'} id="myTopnav">
          <Link to="/" className="active">
            <img className="portfolio-pic" src={this.props.image} alt="" />
          </Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="#" className="icon" onClick={(e) => {
            e.preventDefault();
            this.myFunction();
          }}>
            <i className="fa fa-bars"></i>
          </Link>
       </div>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
