import React, { PropTypes } from 'react'
import { Badge, Space } from 'rebass'

const BadgeList = ({ list }) =>
  <div>
    {list.map((item, key) =>
      <span key={key}>
        <Badge mb={1}>
          {item}
        </Badge>
        {key !== list.length &&
          <Space />
        }
      </span>
    )}
  </div>

BadgeList.propTypes = {
  list: PropTypes.array.isRequired
}

export default BadgeList
