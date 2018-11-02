import React, { Component } from 'react';
import { Row, Col, CustomInput } from 'reactstrap';
import './App.css';

class App extends Component {
    state = {
        typedWord:''
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
      this.setState({typedWord: e.target.value})
  };
  render() {
    return (
        <div>
            <div className="logoImage">
            <img src="./logo2a.png" alt=""style={{maxWidth:'400px'}}/>
            <img src="./logo4b.png" alt=""style={{maxWidth:'400px'}}/>
            </div>

            {/* <h1><b>Space Battleship Dvorak</b></h1> */}
            <Row>
                <Col>
                    <h1 id="typedWord" >{this.state.typedWord}&nbsp;</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CustomInput onChange={(e)=> this.setWord(e)} type="text" id="textTypedWord" placeholder="Start typing..." />
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <CustomInput type="checkbox" id="soundCheckbox" label="Sound On-Off" />
                </Col>
            </Row> */}
            <hr/>
        </div>
        
    );
  }
}
  

export default App;