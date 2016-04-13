import { default as React, PropTypes } from 'react'
import { Banner, Base } from 'rebass'
import { Page } from '..'
import { default as weddingSelfie } from './wedding-selfie.jpg'
import { default as color } from 'color'
import { Form as ContactForm } from '../Contact'

const HomeBanner = (props, { rebass: { colors } }) =>
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
                <ContactForm theme="secondary"/>
            </Base>
        </Base>
    </Banner>

HomeBanner.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default HomeBanner
