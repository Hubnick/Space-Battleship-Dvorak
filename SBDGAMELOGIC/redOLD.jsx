import React, { Component } from 'react';
import { Row, Col, CustomInput } from 'reactstrap';
import './App.css';

class App extends Component {
    state = {
        typedWord: '',
        isPlaying: false
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            dropdownOpen: false

        };
        //create audio object
       this.audio = new Audio();
       this.audio.src = "/introAudio.mp3";
   }
   toggle() {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
}

setWord = (e) => {
    this.setState({ typedWord: e.target.value })
};

//play/pause background music
toggleSound = (e) => {
    if (this.state.isPlaying) {
        this.setState({ isPlaying: false })
        this.audio.pause();
    } else {
        this.setState({ isPlaying: true })
        this.audio.play()
    }
};
render() {
    return (
        <div>
            <div className="logoImage">
                <img src="./logo2a.png" alt="" style={{ maxWidth: '400px' }} />
                <img src="./logo4b.png" alt="" style={{ maxWidth: '400px' }} />
            </div>
            <Row>
                    <Col>
                        <CustomInput onClick={(e) => this.toggleSound(e)} type="checkbox" id="soundCheckbox" label="Sound On-Off" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 id="typedWord" >{this.state.typedWord}&nbsp;</h1>
                        </Col>
                </Row>
                <Row>
                    <Col>
                        <CustomInput onChange={(e) => this.setWord(e)} type="text" id="textTypedWord" placeholder="Start typing..." />
                        </Col>
                </Row>
                <hr />
            </div>
         );
    }
}
 export default App; 