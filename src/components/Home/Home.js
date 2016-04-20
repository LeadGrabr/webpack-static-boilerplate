import { default as React, PropTypes } from 'react'
import { Base, Heading, Section, SectionHeader, Text } from 'rebass'
import { BottomBar, Page, GoogleMap } from 'components'
import { default as Banner } from './Banner'
import { default as Gallery } from 'Gallery'
import { default as Testimonials } from '@leadgrabr/testimonials'
import { default as headshotOne } from './headshot-one.jpg'
import { default as headshotTwo } from './headshot-two.jpg'
import { default as BrandBadges } from '@leadgrabr/brand-badges'
import { default as Heart } from 'react-icons/lib/go/heart'
import { default as Organization } from 'react-icons/lib/go/organization'
import { default as Location } from 'react-icons/lib/go/location'

const testimonialText = `
    Wisi magna pri ei, equidem tibique an eum, per te quod similique.
    Ne quas malorum labitur eos, nam ei impetus veritus. Ex dico diceret
    ancillae duo. Vel legendos pericula ea, per esse rationibus ut.
`

const Home = (props, { rebass: { colors } }) =>
    <Page>
        <Banner/>
        <Page.Content>
            <Heading
                level={2}
                mb={2}
                style={{ textAlign: 'center' }}
            >
                Fall in Love with Ann Arbor Pictures!
            </Heading>
            <Text style={{ textAlign: 'center' }}>
                Whether you're planning an engagement,
                need lifestyle photography, or are just
                looking to document your latest adventures,
                Ann Arbor Pictures has the equipment and
                the expertise to get you your perfect
                image in a unique vintage style.
            </Text>
            <Gallery
                count={6}
                imgProps={{
                    m: 2 // eslint-disable-line id-length
                }}
                size={250}
            />
        </Page.Content>
        <Section style={{ backgroundColor: colors.info }}>
            <Page.Content>
                <SectionHeader
                    heading="Customer Testimonials"
                />
                <Testimonials
                    testimonials={[
                        {
                            img: headshotOne,
                            name: 'John Appleseed',
                            text: testimonialText
                        }, {
                            img: headshotTwo,
                            name: 'Barbara Foo',
                            text: testimonialText
                        }
                    ]}
                />
            </Page.Content>
        </Section>
        <Section>
            <Page.Content>
                <SectionHeader
                    heading="Why We're Great"
                />
                <BrandBadges
                    backgroundColor="primary"
                    badges={[
                        {
                            icon: Heart,
                            heading: 'You\'ll love your photos'
                        },
                        {
                            icon: Organization,
                            heading: 'Our organization is strong!'
                        },
                        {
                            icon: Location,
                            heading: 'We\'re local!'
                        }
                    ]}
                    color="secondary"
                />
            </Page.Content>
        </Section>
        <Base>
            <GoogleMap style={{ height: 300 }}/>
        </Base>
        <BottomBar/>
    </Page>

Home.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default Home
