import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import './App.css';

class GameScore extends Component {
  
  render() {
    
    return (
        <div>
            <Alert color='primary'>Score: </Alert>
        </div>
    );
  }
}
  

export default GameScore;