import { default as React, Component, PropTypes } from 'react'
import { Page } from 'components'
import { default as OrgCard } from './OrgCard'
import { connect } from 'react-redux'

@connect(({ app: { width } }) => ({ width }))

export default class Resume extends Component {

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
        textAlign: 'center'
      }
    }
    return (
      <Page>
        <Page.Title>
          Experience
        </Page.Title>
        <Page.Content>
          <OrgCard
            {...sharedProps}
            duration='2/15 - now'
            organization='Skipstone'
            technologies={[
              'Isomorphic Javascript',
              'ReactJS',
              'Redux',
              'Amazon Web Services'
            ]}
            title='Senior Manager of Development Operations'
          />
          <OrgCard
            {...sharedProps}
            duration='6/14 - now'
            organization='Costimize'
            technologies={[
              'Javascript',
              'Coffeescript',
              'ReactJS',
              'Redux',
              'Express',
              'Amazon Web Services'
            ]}
            title='Technical Lead & Managing Partner'
          />
          <OrgCard
            {...sharedProps}
            duration='2/14 - 2/15'
            organization='Ithaka (Jstor.org)'
            technologies={[
              'Python',
              'Javascript',
              'Amazon Web Services'
            ]}
            title='Senior Front-end Developer'
          />
          <OrgCard
            {...sharedProps}
            duration='2/12 - 2/14'
            organization='Team Detroit'
            technologies={[
              'PHP',
              'Javascript',
              'HTML',
              'CSS'
            ]}
            title='Developer'
          />
        </Page.Content>
      </Page>
    )
  }
}
