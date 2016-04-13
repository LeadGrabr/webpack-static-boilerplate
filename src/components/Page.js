import { default as React, PropTypes } from 'react'
import { Container, Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'
import { Navbar } from '.'

const sharedPropTypes = {
    children: PropTypes.node.isRequired
}

const Page = ({ children }) =>
    <Flex
        column
        justify="center"
    >
        <Navbar/>
        <div style={{ marginTop: 48 }}>
            {children}
        </div>
    </Flex>

Page.propTypes = {
    ...sharedPropTypes
}

const Title = ({ children }) =>
    <Heading
        level={2}
        mb={2}
        mt={3}
        style={{ textAlign: 'center' }}
    >
        {children}
    </Heading>

Title.propTypes = {
    ...sharedPropTypes
}

Page.Title = Title

const Subtitle = ({ children }) =>
    <Text
        mb={3}
        style={{ textAlign: 'center' }}
    >
        {children}
    </Text>

Subtitle.propTypes = {
    ...sharedPropTypes
}

Page.Subtitle = Subtitle

const Content = ({ children }) =>
    <Container
        my={3}
        px={2}
    >
        {children}
    </Container>

Content.propTypes = {
    ...sharedPropTypes,
    fluid: PropTypes.bool
}

Page.Content = Content

export default Page
