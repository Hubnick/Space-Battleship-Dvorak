import React, { Fragment } from 'react'
import { Keyframes, animated, config } from 'react-spring'
import delay from 'delay'

// Creates a spring with predefined animation slots
const Space = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [{ y: 0, from: { y: -400 }, delay: 500 }, { y: -100, delay: 800 }],
  // single items,
  open: { y: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ y: -100 })
  }
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [{ y: 0, opacity: 1, from: { y: -100, opacity: 1 }, delay: 600 }, { y: -100, opacity: 0 }],
  open: { y: 0, opacity: 1, delay: 100 },
  close: { y: -100, opacity: 0 }
})

const items = [
  <img src="https://www.svgrepo.com/show/275934/asteroid-asteroid.svg" />,
  <img src="https://www.svgrepo.com/show/275934/asteroid-asteroid.svg" />,
  <img src="https://www.svgrepo.com/show/275934/asteroid-asteroid.svg" />,
]

export default class Demo extends React.Component {
  state = { open: undefined }
  toggle = () => this.setState(state => ({ open: !state.open }))
  render() {
    const state = this.state.open === undefined ? 'peek' : this.state.open ? 'open' : 'close'
    const icon = this.state.open ? 'fold' : 'unfold'
    return (
      <div onClick={this.toggle} style={{ background: 'lightblue', width: '100%', height: '100%' }}>
        <Space native state={state}>
          {({ y }) => (
            <animated.div
              className="space"
              style={{
                transform: y.interpolate(y => `translate3d(0,${y}%,0)`)
              }}>
              <Content native items={items} keys={items.map((_, i) => i)} reverse={!this.state.open} state={state}>
                {(item, i) => ({ y, ...props }) => (
                  <animated.div
                    style={{
                      transform: y.interpolate(y => `translate3d(0,0,0)`),
                      ...props
                    }}>
                    {item}
                  </animated.div>
                )}
              </Content>
            </animated.div>
          )}
        </Space>
      </div>
    )
  }
}

//Asteroid.svg animates on start, (ideally from random (x) location), on click is destroyed..triggering another asteroid to animate after a short delay.
//With each new asteroid the speed and size are marginally increased
