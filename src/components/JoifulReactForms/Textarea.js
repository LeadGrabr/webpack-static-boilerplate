import React, { PropTypes } from 'react'
import { Textarea } from 'rebass'

const JoifulInputTextarea = ({ error, theme, ...props }, { rebass: { colors } }) =>
    <Textarea
        color={theme}
        message={error}
        rounded
        style={{
            borderColor: error ? colors.error : colors[theme]
        }}
        {...props}
    />

JoifulInputTextarea.propTypes = {
    error: PropTypes.string,
    theme: PropTypes.oneOf([
        'primary',
        'secondary',
        'default',
        'info',
        'success',
        'warning',
        'error'
    ])
}

JoifulInputTextarea.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default JoifulInputTextarea
