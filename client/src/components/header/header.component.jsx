import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { HeaderContainer, NavContainer, NavLink, Logo } from './header.styles'
import scrollTo from 'gatsby-plugin-smoothscroll'
import HamMenu from './components/ham-menu/ham-menu.component'
import DropdownMenu from './components/dropdown-menu/dropdown-menu.component'

const Header = () => {
  const [dropdownHidden, setDropdownHidden] = useState(false)
  const navLinks = [
    {
      path: '#sluzby',
      name: 'Služby'
    },
    {
      path: '#projekty',
      name: 'Projekty'
    },
    {
      path: '#pribeh',
      name: 'Príbeh'
    },
    {
      path: '#recenzie',
      name: 'Recenzie'
    },
    {
      path: '#footer',
      name: 'Kontakt'
    },
  ]

  const handleClickNavLink = (path) => {
    if (window.location.pathname !== '/') {
      navigate(`/${path}`)
    } else {
      scrollTo(path)
    }
  }

  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 90) {
        setShowNav(true)
      } else {
        if (currentScrollPos <= 0) return
        setShowNav(false)
      }
    }
  })

  return (
    <React.Fragment>
      <HeaderContainer
        showNav={showNav}
      >
        <div>
          <Logo to='/'>
            Kuchyne Turanský
          </Logo>
        </div>

        <NavContainer>
          <Navbar links={navLinks} handleClick={handleClickNavLink} />
        </NavContainer>
        <HamMenu toggleDropdown={() => setDropdownHidden(!dropdownHidden)} isOpen={dropdownHidden} />
      </HeaderContainer>
      <DropdownMenu links={navLinks} closeDropdown={() => setDropdownHidden(false)} isHidden={dropdownHidden} />
    </React.Fragment>
  )
}

const Navbar = ({ links, handleClick }) => (
  <ul>
    {links.map(({ path, name }, idx) => (
      <li key={idx}>
        <NavLink onClick={() => handleClick(path)}>{name}</NavLink>
      </li>
    ))}
  </ul>
)

export default Header
