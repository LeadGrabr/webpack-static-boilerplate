import React, { Component, PropTypes } from 'react'
import { connect } from 'redux-await'
import { push } from 'react-router-redux'
import { Button } from 'rebass'
import { Page } from 'components'

@connect(
  (state) => ({
    formErrors: state.app.errors
  }),
  { pushState: push }
)

export default class ContactFailure extends Component {

  static propTypes = {
    formErrors: PropTypes.object,
    pushState: PropTypes.func.isRequired,
    statuses: PropTypes.object.isRequired
  };

  componentDidMount () {
    const { formErrors, pushState } = this.props
    if (!formErrors) {
      pushState('/contact')
    }
  }

  render () {
    return (
      <Page>
        <Page.Title>
          Shoot.
        </Page.Title>
        <Page.Subtitle>
          Your form didn't go through.<br />
          Try again or contact me
          directly at <a href='mailto:bentatum@me.com'>bentatum@me.com</a>
        </Page.Subtitle>
        <Page.Content>
          <Button
            color='default'
            onClick={() => this.props.pushState('/contact')}
            style={{ width: '100%' }}
          >
            Try again
          </Button>
        </Page.Content>
      </Page>
    )
  }
}
