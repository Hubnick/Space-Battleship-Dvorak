import React, { Fragment } from 'react'
import { Keyframes, animated, config } from 'react-spring'
import { Avatar, Form, Icon, Input, Button, Checkbox } from 'antd'
import delay from 'delay'

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
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
  <Avatar src="https://www.svgrepo.com/show/275934/asteroid-asteroid.svg" />,
]

export default class Demo extends React.Component {
  state = { open: undefined }
  toggle = () => this.setState(state => ({ open: !state.open }))
  render() {
    const state = this.state.open === undefined ? 'peek' : this.state.open ? 'open' : 'close'
    const icon = this.state.open ? 'fold' : 'unfold'
    return (
      <div style={{ background: 'lightblue', width: '100%', height: '100%' }}>
        <Icon type={`menu-${icon}`} className="sidebar-toggle" onClick={this.toggle} />
        <Sidebar native state={state}>
          {({ y }) => (
            <animated.div
              className="sidebar"
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
                    <Form.Item className={i === 0 ? 'middle' : ''}>{item}</Form.Item>
                  </animated.div>
                )}
              </Content>
            </animated.div>
          )}
        </Sidebar>
      </div>
    )
  }
}
