import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    const cssStyle = {
      backgroundImage: 'url("' + this.props.image + '")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: "200px"
    }
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="shopping-card">
        <a className="portfolio-link" target="_blank" rel="noreferrer" href={this.props.link}>
          <div style={cssStyle}></div>
        </a>
        <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default ShopItem;
