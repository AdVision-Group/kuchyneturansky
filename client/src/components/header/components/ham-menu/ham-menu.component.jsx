import React from 'react'
import {HamButton} from './ham.styles'

const HamMenu = ({toggleDropdown, isOpen}) => {
    return (
        <HamButton onClick={() => toggleDropdown(!isOpen)} isOpen={isOpen} maxWidth={'800px'} >
            <div />
            <div />
            <div />
        </HamButton>
    )
}

export default HamMenu
