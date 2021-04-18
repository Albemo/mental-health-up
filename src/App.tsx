import React from 'react';
import './App.css';
import Home from './main/pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './main/components/Nav';
import Contact from './main/pages/Contact';
import Course from './main/components/Course';
import Footer from './main/components/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/mental-health-up/">
            <Home />
          </Route>
          <Route path="/mental-health-up/contact">
            <Contact />
          </Route>
          <Route path="/mental-health-up/course/:id">
            <Course />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
