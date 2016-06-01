import React from 'react'
import { Page, Portfolio } from 'components'
import Helmet from 'react-helmet'

const PortfolioContainer = () =>
  <Page>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'Benjamin Tatum professional sotware development website portfolio'
        }
      ]}
      title='Portfolio'
    />
    <Page.Title>
      Portfolio
    </Page.Title>
    <Page.Content>
      <Portfolio />
    </Page.Content>
  </Page>

export default PortfolioContainer
