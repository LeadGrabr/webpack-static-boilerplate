import { default as React, PropTypes } from 'react'
import { Badge, Base, Heading, Space } from 'rebass'
import { Flex } from 'reflexbox'
import { default as BadgeList } from './BadgeList'

const OrgCard = ({ ...base, duration, organization, technologies, title }) =>
  <Base {...base}>
    <Flex
      align='center'
      column
    >
      <Heading
        level={4}
        mb={2}
      >
        {title} @ {organization}
      </Heading>
      <Space />
      <Badge mb={2}>
        {duration}
      </Badge>
      <BadgeList list={technologies} />
    </Flex>
  </Base>

OrgCard.propTypes = {
  duration: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default OrgCard
