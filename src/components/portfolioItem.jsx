import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PortofolioItem extends Component {
  render(){
    const cssStyle = {
      backgroundImage: 'url("' + this.props.image + '")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: "200px"
    }
    return(
      <div className="col-md-4 col-sm-6">
        <div className="portfolio-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div id="dot-1" className="nav-dots"></div>
              <div id="dot-2" className="nav-dots"></div>
              <div id="dot-3" className="nav-dots"></div>
            </div>
            <div id="navigation">
              <ul>
                <li>
                  <Link className="" to={this.props.local}>Read more</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio-card">
            <Link className="portfolio-link" target="_blank" to={this.props.link}>
              <div style={cssStyle}></div>
            </Link>
            <div className="portfolio-caption">
              <h4>{this.props.title}</h4>
              <p className="text-muted">{this.props.subtitle}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default PortofolioItem;

