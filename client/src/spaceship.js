import React from 'react'
import { Spring, Keyframes, animated } from 'react-spring'
import delay from 'delay'

const SHIP = 'M20,0 L380,380 L380,380 L200,20 L20,380 Z'
const DOT = 'M20,20 L20,80 L80,80 L80,20 L20,20 Z'
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'background',
  },
  shape: { width: 200, height: 800, willChange: 'transform' },
}

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: -1500, radiansBig: -1000, shift: '#deb908', value: 0 },
      to: { radians: 1280, radiansBig: 660, shift: '#6d2a24', value: 100 },
    })
  }
})

export default class Asteroid extends React.Component {
  state = {
    destroy: true,
    reset: false,
    value: undefined
  }

  destroy = () => this.setState(state => ({ destroy: false }))
  undestroy = () => this.setState(state => ({ reset: !state.reset, destroy: true }))
  reset = () => this.setState(state => ({ reset: !state.reset }))
  render() {
    const destroy = this.state.destroy
    const reset = this.state.reset

    const Content = ({ radians, radiansBig, shift, value }) =>
      <div style={{ border: '#deb908 4px solid' }}>
        <Spring
          from={{ color: 'rgb(219, 112, 148)' }}
          to={{
            coords: destroy ? [0, 0] : [50, 50],
            color: destroy ? '#247BA0' : 'rgb(219, 112, 148)',
            start: destroy ? '#B2DBBF' : '#B2DBBF',
            end: destroy ? '#247BA0' : '#F3FFBD',
            scale: destroy ? 0.3 : 0.4,
            shape: destroy ? SHIP : DOT,
            stop: destroy ? '85%' : '50%',
            rotation: destroy ? '0deg' : '90deg',
            opacity: destroy ? '1' : '0',
            value: destroy ? '0' : '50',
            // radians: destroy ? '-1500' : '1280',
            // radiansBig: destroy ? '-1000' : '660',
          }}
          after={{
            value: 99,
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
                  backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
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
                        `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation}) translate3d(0, ${r}px, 0px)`)

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
                        `scale3d(${scale + .25}, ${scale + .25}, ${scale + .25}) rotate(${rotation}) translate3d(0, ${r}px, 0px)`)

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
                        `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation}) translate3d(0, ${r}px, 0px)`)

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
        <button id="reset" onClick={this.reset}>RESET</button>
        <button id="undestroy" onClick={this.undestroy}>UNDESTROY</button>
      </div>
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'top',
            background: `linear-gradient(to bottom, #091643 80%, #103467c2 100%)`,
          }}>
          <Container
            reset
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
