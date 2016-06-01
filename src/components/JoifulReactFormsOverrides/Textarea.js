import React, { PropTypes } from 'react'
import { Textarea } from 'rebass'

const JoifulInputTextarea = ({ error, ...props }, { rebass: { colors } }) =>
  <Textarea
    {...props}
    invalid={error}
    message={error}
  />

JoifulInputTextarea.propTypes = {
  error: PropTypes.string
}

JoifulInputTextarea.contextTypes = {
  rebass: PropTypes.object.isRequired
}

export default JoifulInputTextarea
