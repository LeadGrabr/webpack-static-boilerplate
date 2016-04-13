import { default as React } from 'react'
import { Menu, NavItem } from 'rebass'
import { Link } from 'react-router'

const MainNav = () =>
    <Menu
        backgroundColor="default"
        color="secondary"
    >
        <NavItem
            is={Link}
            to="/"
        >
            Home
        </NavItem>
        <NavItem
            is={Link}
            to="/about"
        >
            About Us
        </NavItem>
        <NavItem
            is={Link}
            to="/gallery"
        >
            Photo Gallery
        </NavItem>
        <NavItem>
            Blog
        </NavItem>
        <NavItem
            is={Link}
            to="/contact"
        >
            Contact
        </NavItem>
    </Menu>

export default MainNav
