import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
// import { Button } from 'reactstrap';
>>>>>>> master


class App extends Component {
  
  render() {
    return (
<<<<<<< HEAD
      <div id="videoWrapper">
      {/* style={{position: 'fixed', zIndex: '99', width: '100%', height: '100%'}}  */}
        <video id="video_background" src="./introVideo.mp4"  controls="" 
          loop="loop" autoPlay={true} muted={false}>
        </video>
      {/* <iframe height="100%" width="100%"
        src="https://www.youtube.com/embed/w6LFkMniuTk?autoplay=1&mute=1&enablejsapi=1&showinfo=0&controls=0&loop=1&modestbranding=1&rel=0&disablekb=1">
      </iframe> */}
        <Link to={"/game"}>
          <button className='startGameButton'><b>Play</b></button>
        </Link>
        <div className="introLogoContainer">
            <img src="./logo2a.png" alt=""style={{maxWidth:'400px'}}/>
            <img src="./logo4b.png" alt=""style={{maxWidth:'400px'}}/>
        </div>
=======
      <div style={{position: 'fixed', zIndex: '99', width: '100%', height: '100%'}}> 
      <iframe height="100%" width="100%"
        src="https://www.youtube.com/embed/w6LFkMniuTk?autoplay=1&mute=1&enablejsapi=1&showinfo=0&controls=0&loop=1&modestbranding=1&rel=0&disablekb=1">
      </iframe>
      <Link to={"/game"}>
      {/* <Button color="primary" size="lg">PLAY</Button>{''} */}
      <button className='startGameButton'><b>Play</b></button>
      </Link>
>>>>>>> master
      </div>
    );
  }
}
<<<<<<< HEAD
=======
  
>>>>>>> master

export default App;

