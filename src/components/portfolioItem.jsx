import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


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
      <div className="col-md-6 col-lg-4">
        <div className="portfolio-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div id="dot-1" className="nav-dots"></div>
              <div id="dot-2" className="nav-dots"></div>
              <div id="dot-3" className="nav-dots"></div>
            </div>
            <div id="navigation">
              <ul>
                <li onClick={() => this.props.function(this.props.title)}>
                  {this.props.like ?
                    <i class="fas fa-heart"></i>
                    :
                    <i class="far fa-heart"></i>
                  }

                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio-card" onClick={() => this.props.functionView(this.props.title)}>
            <a className="portfolio-link" target="_blank" rel="noreferrer" href={this.props.link}>
              <div style={cssStyle}></div>
            </a>
            <div className="portfolio-caption">
              <h4>{this.props.title}</h4>
              <span className="span-text">Viewed: {this.props.value} times</span>
              <p className="text-muted">{this.props.subtitle}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default PortofolioItem;

