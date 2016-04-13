/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Page } from 'components'
import { default as Gallery } from 'Gallery'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { connect } from 'redux-await'
import { constants, createLead } from 'redux/modules/app'
const { SUBMIT_LEAD } = constants

@connect(() => ({}), { submit: createLead })

export default class Contact extends Component {

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired
    };

    render() {
        const { statuses, submit } = this.props
        return (
            <Page>
                <Page.Title>
                    Contact us today
                </Page.Title>
                <Page.Content>
                    <LeadForm
                        status={statuses[SUBMIT_LEAD]}
                        submit={submit}
                    />
                    <Gallery/>
                </Page.Content>
            </Page>
        )
    }
}
