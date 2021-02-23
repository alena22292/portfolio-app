import React, { Component } from 'react';

class OrderItem extends Component {
  render() {
    const cssStyle = {
      backgroundImage: 'url("' + this.props.image + '")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: "200px",
    }
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="shopping-order">
          <div style={cssStyle}></div>
          <div className="flex-box">
            <h3 className="mr-3">{this.props.name}</h3>
            <div>
              <span>{this.props.rating}</span>
              <i style={{color: 'gold', fontSize: '16px', marginLeft: '4px',
              marginTop: '-3px'}} className="fas fa-baby-carriage"></i>
            </div>
          </div>
          <div className="flex-box">
            <div className="quantity">
              <i onClick={e => this.props.functionMinus(this.props.id)} className="fas fa-minus-circle"></i>
              <span>{this.props.quantity}</span>
              <i onClick={e => this.props.functionPlus(this.props.id)} className="fas fa-plus-circle"></i>
            </div>
            <span>Price: EUR {this.props.price * this.props.quantity}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;
