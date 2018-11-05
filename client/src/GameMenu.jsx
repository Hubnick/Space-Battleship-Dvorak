import React, { Component } from 'react';


//=====================audio======================
// import { Row, Col, CustomInput } from 'reactstrap';
// import './App.css';

// class App extends Component {
    // state = {
    //     typedWord: '',
    //     //WE USED ISPLAYING======
    //     isPlaying: false
    // }

    // constructor(props) {
    //     super(props);
    //     this.toggle = this.toggle.bind(this);
    //     this.state = {
    //         dropdownOpen: false
    //     };

    //     //WE USED AUDIO IN CONSTRUCTOR=====
    //     //create audio object
    //     this.audio = new Audio();
    //     this.audio.src = "/introAudio.mp3";
    // }
    // toggle() {
    //     this.setState({
    //         dropdownOpen: !this.state.dropdownOpen
    //     });
    // }

    // setWord = (e) => {
    //     this.setState({ typedWord: e.target.value })
    // };

    //play/pause background music

    //WE USED TOGGLESOUND==================
    // toggleSound = (e) => {
    //     if (this.state.isPlaying) {
    //         this.setState({ isPlaying: false })
    //         this.audio.pause();
    //     } else {
    //         this.setState({ isPlaying: true })
    //         this.audio.play()
    //     }
    // };

//====================juego============================

import { Row, Col, CustomInput, Input } from 'reactstrap';
import './App.css';


class GameMenu extends Component {

    //(1) constructor happens on page load, sets state variables
    constructor(props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
        this.state = {
            currentlevel: 0,
            currentChallenge: 0,
            isPlaying: false
        };
        this.audio = new Audio();
        this.audio.src = "/introAudio.mp3";
    }
    setWord() {
        console.log('setWord-CurrentChallenge-before', this.state.currentChallenge)
        let setWord = this.levelsArray[this.state.currentlevel][this.state.currentChallenge];
        console.log('setWord->', setWord)
        this.setState({
            setWord: setWord
        })
        console.log("setWord-setWordState: " + this.state.setWord)
        console.log("setWord-currentLevel: " + this.state.currentlevel)
        console.log("setWord-currentChallenge: " + this.state.currentChallenge)
    }
    levelsArray = [
        ["a", "o", "e", "u", "i"],
        ["d", "h", "t", "n", "s"],
        ["a", "o", "e", "u", "i", "d", "h", "t", "n", "s"]
    ]

    inputEvent(e) {
        // this.setState({ typedWord: e.target.value })
        let character = e.target.value
        console.log('inputEvent->', character, this.getWord())
        console.log('inputEvent->T/F', character === this.getWord())
        if (character === this.getWord()) {
            console.log("its true")

            let newChallenge = this.state.currentChallenge + 1
            console.log('inputEvent-varnewChallenge-before-setState->', newChallenge)
            this.setState({
                currentChallenge: newChallenge
            })
            console.log('inputEvent-statecurrentChallenge-AfterSetState', this.state.currentChallenge)
            console.log('inputEvent-newChallenge-aftersetSTate', newChallenge)
        }
    };
    /**
     * This returns a word from the array according the number provided. If no 
     * Number is provided, it will us state
     * @param {*} e represents the value of the array where the letter is located
     */
    getWord(e) {
        if (e) {
            return this.levelsArray[this.state.currentlevel][e]
        } else {
            return this.levelsArray[this.state.currentlevel][this.state.currentChallenge]
        }
    }
    getCurrentWord() {
        return this.levelsArray[this.state.currentlevel][this.state.currentChallenge];
    }
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
                        <h1 id="typedWord" >{this.getWord(this.state.currentChallenge)}&nbsp;</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>


                        {/* old */}
                        {/* <CustomInput onChange={(e) => this.setWord(e)} type="text" id="textTypedWord" placeholder="Start typing..." />
                    </Col>
                </Row> */}


                        <Input onChange={(e) => this.inputEvent(e)} type="text" id="textTypedWord" placeholder="Start typing..." />
                    </Col>
                </Row>

                {/* oldversionsoundcheckbox */}
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

// export default App;

export default GameMenu;









// //=======================2nd try===============================================

// import React, { Component } from 'react';
// import { Row, Col, CustomInput, Input } from 'reactstrap';
// import './App.css';

// class App extends Component {

//     //(1) constructor happens on page load, sets state variables
//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             // dropdownOpen: false,
//             // typedWord: '',
//             currentlevel: 0,
//             currentChallenge: 0,
//             setWord: ''
//         };

//     }

//     //(2)after constructor loads, set the first word
//     componentDidMount(){
//         this.setWord()

//     }

//     setWord () {
//         let setWord = this.levelsArray[this.state.currentlevel][this.state.currentChallenge];
//         // console.log("levelsArray: " + this.levelsArray)
//         // console.log("currentLevel: " + this.state.currentlevel)
//         // console.log("currentChallenge: " + this.state.currentChallenge)


//         // console.log(setWord)
//         this.setState({
//             setWord: setWord
//         })
//         // console.log("=============after setWord adjusted=================")
//         // console.log("setWord: " + this.state.setWord)
//         // console.log("currentLevel: " + this.state.currentlevel)
//         // console.log("currentChallenge: " + this.state.currentChallenge)


//     }







//     toggle() {
//         this.setState({
//             // dropdownOpen: !this.state.dropdownOpen
//         });
//     }
//     levelsArray = [
//         ["a", "o", "e", "u", "i"],
//         ["d", "h", "t", "n", "s"],
//         ["a", "o", "e", "u", "i", "d", "h", "t", "n", "s"]
//     ]



//     inputEvent (e) {
//         // this.setState({ typedWord: e.target.value })
//         let character = e.target.value
//         console.log(e.target.value,character === this.state.setWord)
//         if (character === this.state.setWord){
//             console.log("its true")




//             let newChallenge = this.state.currentChallenge + 1
//             // console.log('inputEvent-varnewChallenge-before-setState->',newChallenge)
//             this.setState({
//                 currentChallenge:newChallenge
//             })
//             // console.log('inputEvent-statecurrentChallenge-AfterSetState',this.state.currentChallenge)
//             // console.log('inputEvent-newChallenge-aftersetSTate',newChallenge)

//             //THIS needs fixed=============================
//             // this.setState((prevState, props)=>({
//             //     currentChallenge: prevState.currentChallenge + 1
//             // }))
//             this.sendThru()
//             this.setWord()
//             // this.setGame()
//         }
//     };

//     setgame() {
//         this.setState({
//             // typedWord: ''
//         })
//     }

//     sendThru() {
//         this.inputTitle.value = "";
//         console.log("inputTitle.value: " + this.inputTitle.value)
//     }

//     render() {
//         return (
//             <div>
//                 <div className="logoImage">
//                     <img src="./logo2a.png" alt="" style={{ maxWidth: '400px' }} />
//                     <img src="./logo4b.png" alt="" style={{ maxWidth: '400px' }} />
//                 </div>

//                 {/* <h1><b>Space Battleship Dvorak</b></h1> */}
//                 <Row>
//                     <Col>

//                         <h1 id="typedWord" >{this.state.setWord}&nbsp;</h1>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <Input onChange={(e) => this.inputEvent(e)} type="text" id="textTypedWord" placeholder="Start typing..." ref={el => this.inputTitle = el} />
//                     </Col>
//                 </Row>
//                 {/* <Row>
//                 <Col>
//                     <CustomInput type="checkbox" id="soundCheckbox" label="Sound On-Off" />
//                 </Col>
//             </Row> */}
//                 <hr />
//             </div>

//         );
//     }
// }


// export default App;


//===================1st try============================================================

// var levelsArray = [
//     ["Level 1", "a", "o", "e", "u", "i"],
//     ["Level 2", "d", "h", "t", "n", "s"],
//     ["Level 3", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s"]
// ]

// var levelsArrayCount = 0

// var wordArray = []

// var wordArrayCount = 1

// var word = null

// var time = 5

// var isPlaying

// var statusinterval
// var timeInterval



// class App extends Component {
//     // levelsArrayCount = 0

//     // wordArray = []

//     // wordArrayCount = 1

//     // word = null

//     // time = 5

//     // isPlaying

//     // statusinterval
//     // timeInterval


//     // loadWordArray = function () {
//     //     wordArray = levelsArray[levelsArrayCount]
//     //     console.log(wordArray)
//     // }


//     // state = {


//     // }
//     constructor(props) {
//         super(props);
//         const levelsArray = [
//             ["Level 1", "a", "o", "e", "u", "i"],
//             ["Level 2", "d", "h", "t", "n", "s"],
//             ["Level 3", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s"]
//         ]

//         // this.toggle = this.toggle.bind(this);
//         this.state = {
//             dropdownOpen: false,
//             typedWord: '',
//             currentWord: "string",
//             levelString: levelsArray[0][1],
//             word: levelsArray[0],
//             userInput: null,
//             wordPlus: 0

//         };
//     }

//     // changeWord() {
//     //     this.setState({
//     //         word: "new word"
//     //     })
//     // }

//     // check() {
//     //     if (this.state.userInput === this.state.word) {
//     //         this.state.wordPlus: ++
//     // }
//     // }

//     //    changeWord()

//     // toggle() {
//     //     this.setState({
//     //         dropdownOpen: !this.state.dropdownOpen
//     //     });
//     // }

//     setWord = (e) => {
//         // this.setState({ typedWord: e.target.value })
//         this.setState({ userInput: e.target.value })
//         // check();
//     };


//     render() {
//         return (
//             <div>
//                 <div className="logoImage">
//                     <img src="./logo2a.png" alt="" style={{ maxWidth: '400px' }} />
//                     <img src="./logo4b.png" alt="" style={{ maxWidth: '400px' }} />
//                 </div>

//                 {/* <h1><b>Space Battleship Dvorak</b></h1> */}
//                 <Row>
//                     <Col>
//                         {/* ================================================================= */}
//                         {/* THIS IS WHERE THE CURRENT WORD NEEDS TO APPEAR */}
//                         <h1 id="typedWord" >{this.state.word}&nbsp;</h1>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         {/* ==================================================================== */}
//                         {/* WHEN THIS INPUT STRING MATCHES THE STRING IN CURRENT WORD (ABOVE), RESET TIMER AND LOAD NEXT WORD */}
//                         <CustomInput onChange={(e) => this.setWord(e)} type="text" id="textTypedWord" placeholder="Start typing..." />
//                     </Col>
//                 </Row>
//                 {/* <Row>
//                 <Col>
//                     <CustomInput type="checkbox" id="soundCheckbox" label="Sound On-Off" />
//                 </Col>
//             </Row> */}
//                 <hr />
//             </div>

//         );
//     }
// }


// export default App;
