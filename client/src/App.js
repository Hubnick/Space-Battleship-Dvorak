import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
//added import background video
import BackgroundVideo from './BackgroundVideo.jsx';
// added import Game.jsx
import Game from './Game.jsx';
// added button from reactstrap
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={BackgroundVideo} />
        <Route exact path="/game" component={Game} />
        <Route component={BackgroundVideo} />
      </Switch>
    </div>
  </Router>
);


export default App;
