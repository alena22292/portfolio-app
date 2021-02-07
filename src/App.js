import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// images:
import logo from './images/logo.svg';
// components:
import Home from './components/Home';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="container">
      <Router>
        <Wrapper image={logo}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
