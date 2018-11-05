import React, { Component } from 'react';
import { Row, Col, CustomInput } from 'reactstrap';
import './App.css';

let i = 0;
let i2 = 1;
let keyPressed;

let levelsArray = [
    ["Level 1", "a", "o", "e", "u", "i"],
    ["Level 2", "d", "h", "t", "n", "s"],
    ["Level 3", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s"]
]

class App extends Component {

    state = {
        typedWord: "",
        i: 0,
        i2: 1,
        keyPressed
    };

    componentDidMount() {
        this.setState({ typedWord: levelsArray[i][i2] });
    };

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
        if (e.target.value[e.target.value.length - 1] === this.state.typedWord) {

            if (i2 < levelsArray[i].length-1) {
                i2++;
                this.setState({ typedWord: levelsArray[i][i2] })
            } else if (i < levelsArray[i].length - 1) {
                i2=1;
                console.log("new i: ", i);
                this.setState({ typedWord: levelsArray[i][i2] })
                i++;
            } else {{alert("You Won!!!")}}
            
        }
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
                        <h1 id="typedWord" >{this.state.typedWord}&nbsp;</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
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