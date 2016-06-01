import { default as React, Component, PropTypes } from 'react'
import { default as PortfolioPiece } from './PortfolioPiece'
import { Flex } from 'reflexbox'
import { connect } from 'react-redux'

@connect(({ app: { width } }) => ({ width }))

export default class Portfolio extends Component {

  static contextTypes = {
    breakpoints: PropTypes.object.isRequired
  };

  static propTypes = {
    width: PropTypes.number.isRequired
  };

  render () {
    const { width } = this.props
    const { small } = this.context.breakpoints
    const isSmallScreen = !(width > small)
    const sharedProps = {
      mx: isSmallScreen ? 0 : 4,
      my: 4,
      style: {
        width: isSmallScreen ? '100%' : 'auto'
      }
    }
    return (
      <Flex
        wrap
        justify='center'
      >
        <PortfolioPiece
          {...sharedProps}
          linkProps={{
            href: '//costimize.com',
            target: '_blank'
          }}
          name='Costimize.com'
          screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/costimize.com-screenshot.png'
        />
        <PortfolioPiece
          {...sharedProps}
          linkProps={{
            href: 'https://skip.st/one/d37776c75fe8971103bfca44ce63a7ab',
            target: '_blank'
          }}
          name='Skipstone Interactive Video Player'
          screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/skipstone-player-screenshot.png'
        />
        <PortfolioPiece
          {...sharedProps}
          linkProps={{
            href: '//goskipstone.com',
            target: '_blank'
          }}
          name='GoSkipstone.com'
          screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/goskipstone.com-screenshot.png'
        />
        <PortfolioPiece
          {...sharedProps}
          linkProps={{
            href: '//asklearnvote.com',
            target: '_blank'
          }}
          name='AskLearnVote.com'
          screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/asklearnvote.com-screenshot.png'
        />
        <PortfolioPiece
          {...sharedProps}
          linkProps={{
            href: '/better-react-spinkit'
          }}
          name='Better React SpinKit'
          screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/better-react-spinkit-demo-screenshot.png'
        />
        <PortfolioPiece
          {...sharedProps}
          linkProps={{
            href: '/redux-simplestorage'
          }}
          name='Redux Simple Storage'
          screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/redux-simplestorage-screenshot.png'
        />
      </Flex>
    )
  }
}
