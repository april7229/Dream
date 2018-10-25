import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
