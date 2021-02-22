import React, { Component } from 'react';
import items from './shop_list';

class Shop extends Component {
  render() {
    return (
      <div>
        <ul>
        {items.map(item => {
          return <li>{item.name}</li>
         })
        }
        </ul>
      </div>
    );
  }
}

export default Shop;
