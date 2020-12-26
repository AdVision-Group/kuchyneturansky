import React from 'react'
import { navigate } from 'gatsby'
import { DropdownMenuContainer, NavLink, CloseIcon } from './dropdown-menu.styles'
import scrollTo from 'gatsby-plugin-smoothscroll'

const DropdownMenu = ({ links, closeDropdown, isHidden }) => {

    const handleClick = (path) => {
        if (window.location.pathname !== '/') {
            navigate(`/${path}`)
        } else {
            scrollTo(path)
        }
        closeDropdown()
    }

    return (
        <DropdownMenuContainer isHidden={isHidden}>
            <CloseIcon onClick={closeDropdown}>
                &#10005;
            </CloseIcon>
            <ul>
                {links.map(({ path, name }, idx) => (
                    <li key={idx}>
                        <NavLink onClick={() => handleClick(path)}>{name}</NavLink>
                    </li>
                ))}
            </ul>
        </DropdownMenuContainer>
    )
}

export default DropdownMenu
