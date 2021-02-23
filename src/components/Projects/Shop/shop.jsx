import React, { Component } from 'react';
import ShopItem from './shop_item';
import items from './shop_list';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: items,
      order: [],
    }
  }

  addInCart = (id) => {
    const product = this.state.items.filter(item => item.id === id)[0];
    this.setState({
      order: this.state.order.concat(product),
    })
  }

  render() {
    return (
      <section className="container">
        <div style={{margin: '30px'}}className="flex-box-between">
          <h1 style={{opacity: 0.6, margin: '30px'}}>Online baby shop</h1>
          <div>
            <i className="fas fa-cart-arrow-down"></i>
            <span>{this.state.order.length}</span>
          </div>
        </div>
        <div className="row">
        {this.state.items.map(item => {
          return <ShopItem key={item.id} {...item} function={this.addInCart}/>
         })
        }
        </div>

      </section>
    );
  }
}

export default Shop;
