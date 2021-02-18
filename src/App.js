import React from "react";
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
import Theme from './components/Theme';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Tasks from './components/Projects/TaskTracker/Tasks';
import Calculator from './components/Projects/Calculator/calculator';
import Chat from './components/Projects/Messanger/Chat';

function App() {
  return (
    <div className="app">
      <Router>
        <Wrapper image={logo}>
         <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/about">
              <Theme resume={resume}/>
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
            <Route path="/chat">
              <Chat
                image={email}
                title={"Chat Up"}
                subtitle={"Multy channels messenger"}
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

export default App;
