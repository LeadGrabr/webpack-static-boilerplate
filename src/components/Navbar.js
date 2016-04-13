import { default as React, Component, PropTypes } from 'react'
import { Drawer, Fixed, NavItem, Toolbar } from 'rebass'
import { IndexLink } from 'react-router'
import { Flex } from 'reflexbox'
import { MainNav } from '.'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Menu } from 'react-icons/lib/md/menu'


export default class Navbar extends Component {

    static contextTypes = {
        rebass: PropTypes.object.isRequired
    };

    state = {}

    render() {
        const { rebass: { colors } } = this.context
        const { drawer } = this.state
        const iconSize = 20
        return (
            <Fixed style={{ width: '100%' }}>
                <Toolbar>
                    <Flex
                        align="center"
                        justify="center"
                        style={{
                            width: '100%'
                        }}
                    >
                        <Menu
                            onClick={() => this.setState({ drawer: true })}
                            size={iconSize}
                            style={{
                                marginTop: (iconSize / 2) * -1,
                                position: 'absolute',
                                top: '50%'
                            }}
                        />
                        <NavItem
                            is={IndexLink}
                            style={{
                                fontWeight: 600,
                                margin: 'auto'
                            }}
                            to="/"
                        >
                            AnnArbor Pictures
                        </NavItem>
                    </Flex>
                    <Drawer
                        backgroundColor="secondary"
                        color="primary"
                        open={drawer}
                        style={{
                            color: colors.black
                        }}
                        width="100%"
                    >
                        <Flex
                            justify="flex-end"
                            mb={2}
                        >
                            <Close
                                onClick={() => this.setState({ drawer: false })}
                                size={iconSize}
                            />
                        </Flex>
                        <MainNav/>
                    </Drawer>
                </Toolbar>
            </Fixed>
        )
    }
}
