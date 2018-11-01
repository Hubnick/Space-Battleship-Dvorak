import React from 'react'
import ReactDOM from 'react-dom'
import { Keyframes, animated } from 'react-spring'
// import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs'

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, color: '#247BA0' },
      to: { radians: 1 * Math.PI }
    })
  }
})

class Timing extends React.PureComponent {
  state = { items: ['item1', 'item2', 'item3', 'item4', 'item5'] }

  render() {
    const Content = ({ radians, color }) =>
      this.state.items.map((_, i) => (
        <animated.svg
          style={{
            width: 100,
            height: 100,
            willChange: 'transform',
            transform: radians.interpolate(r => `translate3d(0, ${100 * Math.sin(r + i * 2 * Math.PI / 5)}px, 0)`)
          }}
          viewBox="0 0 400 400">
          <animated.g fill={color} fillRule="evenodd">
            <path id="path-1" d="M20,380 L380,380 L380,380 L200,20 L20,380 Z" />
          </animated.g>
        </animated.svg>
      ))
    const { items } = this.state

    return (
      <div style={{ position: 'relative' }}>
        <Container reset native keys={items}>
          {Content}
        </Container>
      </div>
    )
  }
}

export default Timing;
