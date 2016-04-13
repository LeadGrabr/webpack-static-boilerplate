/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Banner, Base } from 'rebass'
import { Page } from 'components'
import { default as weddingSelfie } from './wedding-selfie.jpg'
import { default as color } from 'color'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { connect } from 'redux-await'
import { constants, createLead } from 'redux/modules/app'
const { SUBMIT_LEAD } = constants

@connect(() => ({}), { submit: createLead })

export default class HomeBanner extends Component {

    static contextTypes = {
        rebass: PropTypes.object.isRequired
    };

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired
    };

    render() {
        const { statuses, submit } = this.props
        const { rebass: { colors } } = this.context
        return (
            <Banner
                align="center"
                backgroundImage={weddingSelfie}
                p={2}
                style={{
                    backgroundPosition: '27%',
                    backgroundRepeat: 'no-repeat',
                    minHeight: 1050
                }}
            >
                <Base
                    px={2}
                    style={{
                        backgroundColor: color(colors.black).alpha(0.2).rgbString()
                    }}
                >
                    <Page.Title>
                        Get rates from the best<br/>
                        photographers in Ann Arbor
                    </Page.Title>
                    <Page.Subtitle>
                        Just tell us how we can reach you.
                    </Page.Subtitle>
                    <Base
                        mb={3}
                        mt={1}
                        style={{
                            textAlign: 'left'
                        }}
                    >
                        <LeadForm
                            status={statuses[SUBMIT_LEAD]}
                            submit={submit}
                            theme="secondary"
                        />
                    </Base>
                </Base>
            </Banner>
        )
    }
}
