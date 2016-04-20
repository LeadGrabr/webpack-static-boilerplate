/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Banner, Base, Text, Heading } from 'rebass'
import { default as weddingSelfie } from './wedding-selfie.jpg'
import { default as color } from 'color'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { connect } from 'redux-await'
import { constants, createLead } from 'redux/modules/app'
const { SUBMIT_LEAD } = constants
import { Flex, Box } from 'reflexbox'
import { Page } from 'components'

@connect(
    ({ app: { width } }) => ({ width }),
    { submit: createLead }
)

export default class HomeBanner extends Component {

    static contextTypes = {
        breakpoints: PropTypes.object.isRequired,
        rebass: PropTypes.object.isRequired
    };

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired,
        width: PropTypes.string.isRequired
    };

    state = {
        formValues: null
    }

    handleSuccess() {
        this.setState({
            formValues: {
                name: null,
                email: null,
                phone: null,
                message: null
            }
        })
    }

    render() {
        const { statuses, submit, width } = this.props
        const { breakpoints: { large }, rebass: { colors } } = this.context
        const { formValues } = this.state
        const backgroundColor = color(colors.black).alpha(0.7).rgbString()
        const boxWidth = width < large ? '100%' : '50%'
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
                <Flex
                    align={width < large ? 'center' : 'flex-start'}
                    column={width < large}
                >
                    <Box
                        auto
                        mb={2}
                        mx={width < large ? 0 : 2}
                        p={2}
                        style={{
                            backgroundColor,
                            width: boxWidth
                        }}
                    >
                        <Page.Title>
                            30 years of Experience Combine<br/>
                            to Get you the Perfect Shot
                        </Page.Title>
                        <Text>
                            Our photographers have over 40 years of
                            combined experience to help get you the
                            perfect shot.
                        </Text>
                    </Box>
                    <Box
                        style={{
                            backgroundColor,
                            width: boxWidth
                        }}
                    >
                        <Base
                            p={2}
                            rounded
                        >
                            <Heading
                                level={2}
                                mb={2}
                            >
                                Show me an instant quote
                            </Heading>
                            <div style={{ textAlign: 'left' }}>
                                <LeadForm
                                    buttonProps={{
                                        theme: 'primary'
                                    }}
                                    messageProps={{
                                        label: 'Breifly describe your event'
                                    }}
                                    onSuccess={::this.handleSuccess}
                                    status={statuses[SUBMIT_LEAD]}
                                    submit={submit}
                                    theme="secondary"
                                    values={formValues}
                                />
                                <Text mb={0}>
                                    *No purchase necessary
                                </Text>
                            </div>
                        </Base>
                    </Box>
                </Flex>
            </Banner>
        )
    }
}
