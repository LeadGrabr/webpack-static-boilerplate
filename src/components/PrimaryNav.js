import { default as React } from 'react'
import { Menu, NavItem } from 'rebass'
import { IndexLink, Link } from 'react-router'

const PrimaryNav = ({ navItemProps, ...props }) =>
  <Menu {...props}>
    <NavItem is={IndexLink} to='/'>
      Home
    </NavItem>
    <NavItem is={Link} to='/portfolio'>
      Portfolio
    </NavItem>
    <NavItem is={Link} to='/resume'>
      Resume
    </NavItem>
    <NavItem is={Link} to='/contact'>
      Contact
    </NavItem>
  </Menu>

export default PrimaryNav
