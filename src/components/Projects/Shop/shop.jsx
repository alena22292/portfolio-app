import React, { Component } from 'react';
import ShopItem from './shop_item';
import items from './shop_list';

class Shop extends Component {
  render() {
    return (
      <section className="container">
        <div className="row">
        {items.map(item => {
          return <ShopItem key={item.id} {...item}/>
         })
        }
        </div>

      </section>
    );
  }
}

export default Shop;
