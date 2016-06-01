import { default as React, Component, PropTypes } from 'react'
import { Arrow, Drawer, Dropdown, DropdownMenu, Fixed, Toolbar, ButtonCircle } from 'rebass'
import { Flex } from 'reflexbox'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Hamburger } from 'react-icons/lib/md/menu'
import { PrimaryNav } from 'components'
import { connect } from 'react-redux'

@connect(({ app: { width } }) => ({ width }))

export default class Navbar extends Component {

  static contextTypes = {
    breakpoints: PropTypes.object.isRequired,
    colors: PropTypes.object.isRequired
  };

  static propType = {
    width: PropTypes.number.isRequired
  };

  state = {}

  render () {
    const { drawer, menu } = this.state
    const { width } = this.props
    const { breakpoints: { small }, colors: { blue } } = this.context
    const isSmall = width <= small
    const buttonCircleProps = { backgroundColor: blue }
    return (
      <If condition={width}>
        <Fixed style={{ width: '100%' }}>
          <Toolbar pt={1} style={{ margin: 'auto', maxWidth: small }}>
            <Flex
              align='center'
              justify='center'
              style={{ width }}
            >
              <Choose>
                <When condition={isSmall}>
                  <ButtonCircle
                    {...buttonCircleProps}
                    onClick={() => this.setState({ drawer: true })}
                  >
                    <Hamburger />
                  </ButtonCircle>
                </When>
                <Otherwise>
                  <ButtonCircle
                    {...buttonCircleProps}
                    onClick={() => this.setState({ menu: true })}
                  >
                    <Hamburger />
                  </ButtonCircle>
                  <Dropdown>
                    <DropdownMenu
                      onDismiss={() => this.setState({ menu: false })}
                      open={menu}
                      style={{
                        left: -90,
                        top: 16
                      }}
                    >
                      <Arrow
                        color='primary'
                        direction='up'
                        style={{
                          position: 'absolute',
                          top: -7,
                          left: '50%',
                          marginLeft: -7 / 2
                        }}
                      />
                      <PrimaryNav />
                    </DropdownMenu>
                  </Dropdown>
                </Otherwise>
              </Choose>
            </Flex>
            <Drawer
              backgroundColor='primary'
              color='default'
              open={drawer}
              pt={1}
              size={width}
            >
              <Flex
                align='center'
                justify='center'
                mb={2}
              >
                <ButtonCircle
                  {...buttonCircleProps}
                  onClick={() => this.setState({ drawer: false })}
                >
                  <Close />
                </ButtonCircle>
              </Flex>
              <PrimaryNav />
            </Drawer>
          </Toolbar>
        </Fixed>
      </If>
    )
  }
}
