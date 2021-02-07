import React, { Component } from 'react';
import Header from './Header';
import header from '../images/pic_2.jpeg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header image={header} title={"Hello, nice to meet you!"} subtitle={"this is portfolio for a web developer..."} link={"#"} buttonText={"Show more"} />

      </div>
    );
  }
}

export default Home;
