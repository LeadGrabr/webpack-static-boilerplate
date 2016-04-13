import { default as React } from 'react'
import { Page } from 'components'
import { Form } from 'Contact'
import { default as Gallery } from 'Gallery'
import { constants } from 'redux/modules/app'
const { small } = constants.BREAKPOINTS

const Container = () =>
    <Page>
        <Page.Title>
            Contact us today
        </Page.Title>
        <Page.Content>
            <Form
                mb={4}
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: small
                }}
            />
            <Gallery/>
        </Page.Content>
    </Page>


export default Container
