import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrderItem from './order-item';

class Order extends Component {
  render() {
    const result= this.props.order.map(item => item.price * item.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (
      <section className="container">
        <div style={{margin: '30px'}}className="flex-box-between">
          <h1 style={{opacity: 0.6, margin: '30px'}}>Your Order: {this.props.order.length} item(s)</h1>
          <div className="shop-cart-order">
            <Link to="/shop"><i style={{fontSize: '40px', color: '#ef8d32'}} className="fas fa-laptop-house"></i></Link>
          </div>
        </div>

          <div className="row">
            <div className="col-sm-10">
              <div className="row">
              {this.props.order.map(item => {
                return <OrderItem key={item.id} {...item} functionPlus={this.props.addQ} functionMinus={this.props.desQ}/>
               })
              }
              </div>
            </div>
            <div className="col-sm-2 line">
              Total: EUR {result}
            </div>
          </div>

      </section>
    );
  }
}

export default Order;
