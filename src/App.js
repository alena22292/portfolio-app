import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// images:
import logo from './images/logo.svg';
import contact from './images/pic_1.jpeg';

// components:
import Home from './components/Home';
import Wrapper from './components/Wrapper';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="container">
      <Router>
        <Wrapper image={logo}>
         <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact image={contact}/>
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
