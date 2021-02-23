import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    const cssStyle = {
      backgroundImage: 'url("' + this.props.image + '")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: "200px",
      width: "330px",
    }
    return (
      <div className="col-sm-12">
        <div className="shopping-card">
          <div style={cssStyle}></div>
          <div className="shopping-caption">
            <div className="flex-box-between">
              <div className="flex-box">
                <h3 className="mr-3">{this.props.name}</h3>
                <span>{this.props.rating}</span><i style={{color: 'gold', fontSize: '16px', marginLeft: '4px',
    marginTop: '-3px'}} className="fas fa-baby-carriage"></i>
              </div>
              <span>EUR {this.props.price}</span>
            </div>
            <p>{this.props.description}</p>
            <a href="#">Read more</a>
            <div className="cart-position">
              <i onClick={e => this.props.function(this.props.id)} className="fas fa-cart-arrow-down"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItem;
