/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Input, Menu, NavItem, Pre, Text } from 'rebass'
import { STORE_TEXT, storeText } from 'redux/modules/simpleStorage'
import { connect } from 'react-redux'
import { default as canUseDOM } from 'can-use-dom'
import { Page } from 'components'
import { default as Helmet } from 'react-helmet'

@connect(({ simpleStorage: { text } }) => ({ text }), { storeText })

export default class ReduxSimpleStorage extends Component {

  static propTypes = {
    storeText: PropTypes.func.isRequired,
    text: PropTypes.string
  };

  render () {
    const storedText = canUseDOM && window.localStorage.getItem(STORE_TEXT)
    return (
      <Page>
        <Helmet
          meta={[
            {
              name: 'description',
              content: `
                Use redux simple storage to seamlessly store data in localStorage
              `
            }
          ]}
          title='Redux Simple Storage'
        />
        <Page.Title>
            Redux Simple Storage
        </Page.Title>
        <Page.Subtitle>
            Seamless redux and localStorage
        </Page.Subtitle>
        <Page.Content>
          <a
            href='https://www.npmjs.com/package/redux-simplestorage'
            target='_blank'
          >
            <Pre
              rounded
              style={{ textAlign: 'center' }}
            >
              npm i redux-simplestorage
            </Pre>
          </a>
          <Input
            hideLabel
            label='Text'
            name='text'
            onChange={({ target: { value } }) =>
                this.props.storeText(value)
            }
            placeholder='Your input will be stored.'
            style={{ textAlign: 'center' }}
          />
          <Text
            mb={4}
            style={{ textAlign: 'center' }}
          >
            {this.props.text || storedText}
          </Text>
          <If condition={storedText}>
            <Menu
              style={{
                alignItems: 'center'
              }}
            >
              <NavItem
                href='https://github.com/bentatum/benjamintatum.com/blob/master/src/components/ReduxSimpleStorage.js'
                is='a'
                small
                style={{
                  alignSelf: 'auto'
                }}
                target='_blank'
              >
                Source
              </NavItem>
            </Menu>
          </If>
        </Page.Content>
      </Page>
    )
  }
}
