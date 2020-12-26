import styled from 'styled-components'
import { Link } from 'gatsby'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 8rem;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: ${({ showNav }) => showNav ? "#fff" : "rgba(255,255,255,.5)"};
    padding: 0 3rem;
    transition: background-color .3s;

    @media all and (max-width: 800px) {
        padding: 0 2rem;

        @media all and (max-width: 500px) {
            padding: 0 1rem;
        }
    }
`

export const Logo = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    font-weight: 700;

    &:hover {
        color: #777;
        text-decoration: none
    }
`

export const NavContainer = styled.nav`
    display: block;
    height: 100%;

    ul {
        height: inherit;
        list-style: none;
        display: flex;
        align-items: center;
    }

    @media all and (max-width: 800px) {
        display: none;
    }
`

export const NavLink = styled.button`
    font-weight: 500;
    margin-left: 2rem;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    transition: color .2s ease-out;
    background-color: transparent;
    border:none;
    outline: none;

    &:focus {
        outline: none;

    }

    &:hover {
        color: #777;
        text-decoration: none
    }
`