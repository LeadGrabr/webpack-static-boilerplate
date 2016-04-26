import { default as React, PropTypes } from 'react'
import { NavItem, Space, Toolbar } from 'rebass'
import { IndexLink } from 'react-router'

const Navbar = ({ nav }) =>
  <Toolbar>
    <NavItem is='div'>
      <IndexLink to='/'>
        <strong>Benjamin Tatum</strong>
      </IndexLink>
    </NavItem>
    <If condition={nav}>
      <Space auto/>
      {nav}
    </If>
  </Toolbar>

Navbar.propTypes = {
  nav: PropTypes.node
}

export default Navbar