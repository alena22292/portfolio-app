import React, { Component } from 'react';
import Header from './Header';
import Theme from './Theme';

// images:
import header from '../images/pic_3.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header image={header} title={"Hello, nice to meet you!"} subtitle={"this is portfolio for a web developer..."} link={"#"} buttonText={"Show more"} />
        <Theme />
      </div>
    );
  }
}

export default Home;
