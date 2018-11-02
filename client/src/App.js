import React from 'react'
import ReactDOM from 'react-dom'
import { Keyframes, animated } from 'react-spring'
// import Timing from './timing'
import Asteroid from './customasteroid'
// import SpringExample from './spring'
// import Timing from './timing'

class App extends React.PureComponent {

  render() {

    return (
      <div style={{ position: 'relative' }}>
      <h1>Game</h1>
        <Asteroid id="demo" />
      </div>
    )
  }
}

export default App;
