import React from 'react'
import ReactDOM from 'react-dom'
import { Keyframes, animated } from 'react-spring'
// import Timing from './timing'
import Demo from './asteroid'

class App extends React.PureComponent {

  render() {

    return (
      <div style={{ position: 'relative' }}>
      <h1>Game</h1>
        <Demo state="close" onClick={this.toggle} />
      </div>
    )
  }
}

export default App;
