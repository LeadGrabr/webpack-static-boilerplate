/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { default as About } from './About'
import { Page } from 'components'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { Section, SectionHeader, Text } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as Gallery } from 'Gallery'
import { connect } from 'redux-await'
import { constants, createLead } from 'redux/modules/app'
const { medium } = constants.BREAKPOINTS
const { SUBMIT_LEAD } = constants

@connect(
    (state) => ({
        width: state.app.width
    }),
    { submit: createLead }
)

export default class Container extends Component {

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired,
        width: PropTypes.number.isRequired
    };

    render() {
        const { statuses, submit, width } = this.props
        const contactBoxProps = {
            mb: 2,
            px: 2,
            col: width >= medium ? 6 : 12
        }
        return (
            <Page>
                <Page.Title>
                    About Ann Arbor Pictures
                </Page.Title>
                <Page.Content>
                    <Section px={4}>
                        <About/>
                    </Section>
                    <Section>
                        <Gallery
                            count={3}
                            imgProps={{
                                m: 2 // eslint-disable-line id-length
                            }}
                            size={260}
                        />
                    </Section>
                    <Section>
                        <SectionHeader
                            heading="Contact us today"
                            style={{ textAlign: 'center' }}
                        />
                        <Flex column={!(width > medium)}>
                            <Box {...contactBoxProps}>
                                <LeadForm
                                    status={statuses[SUBMIT_LEAD]}
                                    submit={submit}
                                />
                            </Box>
                            <Box {...contactBoxProps}>
                                <Gallery
                                    count={width >= medium ? 8 : 10}
                                    my={3}
                                    size={50}
                                />
                                <Text>
                                    Et his feugait denique appellantur. Meis euismod no mel, at
                                    oblique praesent est, quo cu paulo debitis postulant. Cu agam
                                    hendrerit vix, clita omnium verterem ei qui. Vel in decore
                                    mediocritatem, dicam graece urbanitas his cu.
                                </Text>
                                <Text>
                                    Te dolor nullam nonumes his. Sit natum postea accusata te,
                                    appetere dissentiet has te, id exerci labores pertinax nec.
                                    In vel invenire delicatissimi, nam diceret civibus ex. Cu
                                    omnes mucius est, qui ei dico eripuit.
                                </Text>
                                <Text>
                                    Ea habemus quaerendum usu, et eam dicat invenire salutandi,
                                    ei mel reque iuvaret commune. Nec no congue exerci. Pro ei
                                    putant expetenda deterruisset, te mutat tempor neglegentur
                                    his. At modo facer ubique sea, te vidit latine eleifend eam.
                                </Text>
                            </Box>
                        </Flex>
                    </Section>
                </Page.Content>
            </Page>
        )
    }
}
