import React, { Component } from 'react';
import { Row, Col, CustomInput } from 'reactstrap';
import './App.css';

class App extends Component {
    levelsArray = [
        ["Level 1", "a", "o", "e", "u", "i"],
        ["Level 2", "d", "h", "t", "n", "s"],
        ["Level 3", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s"]
    ]
    levelsArrayCount = 0

    wordArray = []

    wordArrayCount = 1

    word = null

    time = 5

    isPlaying

    statusinterval
    timeInterval


    state = {
        typedWord: '',
        levelsArray : [
            ["Level 1", "a", "o", "e", "u", "i"],
            ["Level 2", "d", "h", "t", "n", "s"],
            ["Level 3", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s"]
        ],


    firstLevel: levelsArray
    }
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    setWord = (e) => {
        this.setState({ typedWord: e.target.value })
    };
    render() {
        return (
            <div>
                <div className="logoImage">
                    <img src="./logo2a.png" alt="" style={{ maxWidth: '400px' }} />
                    <img src="./logo4b.png" alt="" style={{ maxWidth: '400px' }} />
                </div>

                {/* <h1><b>Space Battleship Dvorak</b></h1> */}
                <Row>
                    <Col>
                        {/* ================================================================= */}
                        {/* THIS IS WHERE THE CURRENT WORD NEEDS TO APPEAR */}
                        <h1 id="typedWord" >{this.state.typedWord}&nbsp;</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* ==================================================================== */}
                        {/* WHEN THIS INPUT STRING MATCHES THE STRING IN CURRENT WORD (ABOVE), RESET TIMER AND LOAD NEXT WORD */}
                        <CustomInput onChange={(e) => this.setWord(e)} type="text" id="textTypedWord" placeholder="Start typing..." />
                    </Col>
                </Row>
                {/* <Row>
                <Col>
                    <CustomInput type="checkbox" id="soundCheckbox" label="Sound On-Off" />
                </Col>
            </Row> */}
                <hr />
            </div>

        );
    }
}


export default App;