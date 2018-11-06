import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GameMenu from './GameMenu.jsx';
import GameScore from './GameScore.jsx';
import GameLives from './GameLives.jsx';
import DvorakKeyboard from './DvorakKeyboard.jsx';
import Spaceship from './spaceship'
import './App.css';



class Game extends Component {
    constructor(props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
        this.state = {
            leftScreenCommand: 'upon page load'
        };

    }

    changeCommand(something) {
        this.setState({leftScreenCommand: something})
    
    }    
    getCommand(){
         this.setState({leftScreenCommand : this.state.leftScreenCommand});
    }




    render() {
        return (
            <Container>
                <Row className='h100'>
                    <Col className='leftSide h100' style={{ paddingTop: '16px', marginRight: '40px', }}>
                        <Spaceship 
                        leftScreenCommand = {this.getCommand}/>
                    </Col>
                    <Col className='rightSide'>
                        <Row>
                            <Col><GameMenu 
                            command={this.changeCommand.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col><GameScore /></Col>
                            <Col><GameLives /></Col>
                        </Row>
                        {/* <Row className=''>
                            <Col><hr/></Col>
                        </Row> */}
                        <Row className=''>
                            <Col><DvorakKeyboard /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Game;
