/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { Base } from 'rebass'
import { Flex } from 'reflexbox'
import { connect } from 'react-redux'

const photos = [
    '51QcRqMjy6w',
    'v3QeAZjxxtY',
    'EeDaZ4So3R0',
    'bNGdS51jAoE',
    '70RHiKO9kj8',
    'C7gNqbkKOtE',
    'm5lNqXBBIy0',
    'yB-fV93YL54',
    '7bVMdNYzH_8',
    '_BLx6ystEhk',
    'pcbuJpqHUak',
    'jjj1rHyYyG0'
]

@connect((state) => ({ screenWidth: state.app.width }))

export default class Gallery extends Component {

    static defaultProps = {
        size: 300
    };

    static propTypes = {
        count: PropTypes.number,
        imgProps: PropTypes.object,
        screenWidth: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired
    };

    render() {
        const { count, imgProps, size, ...props } = this.props
        return (
            <Base {...props}>
                <Flex
                    justify="center"
                    wrap
                >
                    {photos.map((photo, key) => {
                        if (key >= count) {
                            return null
                        }

                        return (
                            <Base
                                key={key}
                                m={1}
                                style={{
                                    backgroundImage: `
                                        url('//source.unsplash.com/${photo}/${size}x${size}')
                                    `,
                                    backgroundSize: 'cover',
                                    height: size,
                                    width: size,
                                }}
                                {...imgProps}
                            />
                        )
                    })}
                </Flex>
            </Base>
        )
    }
}
