import React from 'react'
import { Spring, Keyframes, animated } from 'react-spring'
import delay from 'delay'

const TRIANGLE = 'M20,0 L380,380 L380,380 L200,20 L20,380 Z'
const DOT = 'M20,20 L20,80 L80,80 L80,20 L20,20 Z'
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'background',
  },
  shape: { width: 200, height: 600, willChange: 'transform' },
}

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: -1200, radiansBig: -800, shift: '#247BA0'},
      to: { radians: 900, radiansBig: 650, shift: 'rgb(219, 112, 148)'},
    })
  }
})

export default class Asteroid extends React.Component {
  state = { destroy: true, }
  destroy = () => this.setState(state => ({ destroy: !state.destroy }))
  render() {
    const destroy = this.state.destroy

    const Content = ({radians, radiansBig, shift}) =>
    <Spring
      from={{ color: 'rgb(219, 112, 148)' }}
      to={{
        coords: destroy ? [0, 0] : [50, 50],
        color: destroy ? '#247BA0' : 'rgb(219, 112, 148)',
        start: destroy ? '#B2DBBF' : '#B2DBBF',
        end: destroy ? '#247BA0' : '#F3FFBD',
        scale: destroy ? 0.3 : 0.4,
        shape: destroy ? TRIANGLE : DOT,
        stop: destroy ? '0%' : '50%',
        rotation: destroy ? '0deg' : '60deg',
        opacity: destroy ? '1' : '0',
      }}>
      {({
        color,
        scale,
        shape,
        start,
        end,
        stop,
        rotation,
        coords,
        opacity,
        ...rest
      }) => (
        <div
          style={{
            ...styles.container,
            background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)`,
            ...rest,
          }}>
          <animated.svg
            style={{
              ...styles.shape,
              opacity: `${opacity}`,
              fill: shift,
              willChange: `transform`,
              transform: radians.interpolate(
                r =>
                  `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation}) translate3d(0, ${r}px, 0px)`,)

            }}


            version="1.1"
            viewBox="0 0 400 400">
            <g
              style={{ cursor: 'pointer' }}
              fillRule="evenodd"
              onClick={this.destroy}>
              <path id="path-1" d={shape} />
            </g>
          </animated.svg>
          <animated.svg
            style={{
              ...styles.shape,
              opacity: `${opacity}`,
              fill: shift,
              willChange: `transform`,
              transform: radiansBig.interpolate(
                r =>
                  `scale3d(${scale + .25}, ${scale + .25}, ${scale + .25}) rotate(${rotation}) translate3d(0, ${r}px, 0px)`,)

            }}


            version="1.1"
            viewBox="0 0 400 400">
            <g
              style={{ cursor: 'pointer' }}
              fillRule="evenodd"
              onClick={this.destroy}>
              <path id="path-1" d={shape} />
            </g>
          </animated.svg>
          <animated.svg
            style={{
              ...styles.shape,
              opacity: `${opacity}`,
              fill: shift,
              willChange: `transform`,
              transform: radians.interpolate(
                r =>
                  `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation}) translate3d(0, ${r}px, 0px)`,)

            }}


            version="1.1"
            viewBox="0 0 400 400">
            <g
              style={{ cursor: 'pointer' }}
              fillRule="evenodd"
              onClick={this.destroy}>
              <path id="path-1" d={shape} />
            </g>
          </animated.svg>
        </div>
      )}
    </Spring>

    return (
      <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          background: 'palevioletred',
        }}>
        <Container

          native
          //impl={TimingAnimation}
          config={{ duration: 10000 /*, easing: Easing.linear*/ }}>
          {Content}
        </Container>
      </div>


      </div>

    )
  }
}





//Asteroid.svg animates on start, (ideally from random (x) location), on click is destroyed..triggering another asteroid to animate after a short delay.
//With each new asteroid the speed and size are marginally increased
