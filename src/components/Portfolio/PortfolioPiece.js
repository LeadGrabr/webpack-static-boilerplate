import React, { Component, PropTypes } from 'react'
import { Base, Heading } from 'rebass'
import { connect } from 'react-redux'
import { Flex, Box } from 'reflexbox'
import './style.scss'

@connect(({ app: { width } }) => ({ width }))

export default class PortfolioPiece extends Component {

  static contextTypes = {
    breakpoints: PropTypes.object.isRequired,
    shadows: PropTypes.object.isRequired
  };

  static propTypes = {
    linkProps: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    screenShot: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
  };

  render () {
    const { ...props, linkProps, name, screenShot, width } = this.props
    const { small } = this.context.breakpoints
    const { shadows } = this.context
    if (!width) { return null }
    return (
      <Base {...props}>
        <Flex
          align='center'
          column
        >
          <Box>
            <Heading
              level={3}
              mb={2}
            >
              <a {...linkProps}>
                {name}
              </a>
            </Heading>
          </Box>
          <Base
            className='portfolio-piece-base'
            style={{
              borderColor: 'transparent',
              borderStyle: 'solid',
              borderWidth: 2,
              width: width > small ? 300 : '100%'
            }}
          >
            <a {...linkProps}>
              <div
                style={{
                  backgroundImage: `url('${screenShot}')`,
                  backgroundPosition: 'top center',
                  backgroundSize: 'cover',
                  boxShadow: shadows.black,
                  height: 275,
                  width: '100%'
                }}
              />
            </a>
          </Base>
        </Flex>
      </Base>
    )
  }
}
