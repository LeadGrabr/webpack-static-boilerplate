import { default as React } from 'react'
import { Base, Container } from 'rebass'
import { MainNav } from '.'

const BottomBar = () =>
    <Base
        backgroundColor="default"
        color="secondary"
        py={4}
        style={{
            minHeight: 300
        }}
    >
        <Container>
            <MainNav/>
        </Container>
    </Base>

export default BottomBar
