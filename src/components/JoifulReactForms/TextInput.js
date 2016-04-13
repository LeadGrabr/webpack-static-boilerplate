import { default as React, PropTypes } from 'react'
import { Input } from 'rebass'

const JoifulInputTextInput = ({ error, theme, ...props }, { rebass: { colors } }) =>
    <Input
        color={theme}
        message={error}
        rounded
        style={{
            borderColor: error ? colors.error : colors[theme]
        }}
        type="text"
        {...props}
    />

JoifulInputTextInput.propTypes = {
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

JoifulInputTextInput.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default JoifulInputTextInput
