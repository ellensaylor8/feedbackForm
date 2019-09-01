import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingToday from './FeelingToday/FeelingToday';
import UnderstandingContent from './UnderstandingContent/UnderstandingContent';
import Supported from './Supported/Supported';
import Comments from './Comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <Router>
          <Route exact path="/" component={FeelingToday} />
          <Route exact path="/understandingContent" component={UnderstandingContent} />
          <Route exact path="/supported" component={Supported} />
          <Route exact path="/comments" component={Comments} />
        </Router>
      </div>
    );
  }
}

export default App;
