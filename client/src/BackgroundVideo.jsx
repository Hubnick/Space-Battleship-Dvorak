import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
// import { Button } from 'reactstrap';


class App extends Component {
  
  render() {
    return (
      <div style={{position: 'fixed', zIndex: '99', width: '100%', height: '100%'}}> 
      <iframe height="100%" width="100%"
        src="https://www.youtube.com/embed/w6LFkMniuTk?autoplay=1&mute=1&enablejsapi=1&showinfo=0&controls=0&loop=1&modestbranding=1&rel=0&disablekb=1">
      </iframe>
      <Link to={"/game"}>
      {/* <Button color="primary" size="lg">PLAY</Button>{''} */}
      <button className='startGameButton'><b>Play</b></button>
      </Link>
      </div>
    );
  }
}
  

export default App;

