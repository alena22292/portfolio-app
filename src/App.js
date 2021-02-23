import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// images:
import logo from './images/logo.png';
import contact from './images/pic_1.jpeg';
import portfolio from './images/pic_4.jpg';
import email from './images/Portofolio/project_5_1.jpg';
import pic_1 from './images/Portofolio/project_5_2.png';
import pic_2 from './images/Portofolio/project_5_3.png';

//Links:
import resume from './Alena_Gritsiuk_Resume.pdf';

// components:
import Home from './components/Home';
import Wrapper from './components/Wrapper';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Tasks from './components/Projects/TaskTracker/Tasks';
import Calculator from './components/Projects/Calculator/calculator';
import Chat from './components/Projects/Messanger/Chat';
import Shop from './components/Projects/Shop/shop';
import Order from './components/Projects/Shop/order';

// DB:
import items from './components/Projects/Shop/shop_list';

class App extends Component {
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

  addQ = (id) => {
    const product = this.state.order.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item);
    this.setState({
      order: product,
    })
  }
  desQ = (id) => {
    const product = this.state.order.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item);
    this.setState({
      order: product,
    })
  }
  render() {
  return (
    <div className="app">
      <Router>
        <Wrapper image={logo}>
         <Switch>
            <Route path="/" exact={true}>
              <Home resume={resume}/>
            </Route>
            <Route path="/contact">
              <Contact image={contact}/>
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/tasks">
              <Tasks image={portfolio} />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/shop">
              <Shop items={this.state.items} order={this.state.order} addInCart={this.addInCart} />
            </Route>
            <Route path="/order">
              <Order order={this.state.order} addQ={this.addQ} desQ={this.desQ} />
            </Route>
            <Route path="/chat">
              <Chat
                image={email}
                title={"Chat Up"}
                subtitle={"Multi-channel messaging application"}
                pic_1={pic_1}
                pic_2={pic_2}
              />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </div>
   );
  }
}

export default App;
