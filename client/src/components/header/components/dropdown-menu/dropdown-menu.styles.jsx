import styled from 'styled-components'

export const DropdownMenuContainer = styled.div`
    display: none;

    @media all and (max-width: 800px) {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        left: ${({ isHidden }) => isHidden ? "0" : "100%"};
        /* right: 0; */
        width: 100%;
        z-index: 999999;
        background-color: #fff;
        transition: left .5s ease-in-out;
    
        ul {
            list-style: none;
            display: flex;
            width:  100%;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            opacity: ${({ isHidden }) => isHidden ? "1" : "0"};
            transition: opacity .6s ease-out .5s;
        }
    }

`

export const NavLink = styled.button`
    font-weight: bolder;
    margin-left: 2rem;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    transition: color .2s ease-out;
    background-color: transparent;
    border: none;
    font-size: 1.8rem;
    font-family: inherit;

    &:focus {
        outline: none;
    }

    &:hover {
        color: #777;
        text-decoration: none
    }
`

export const CloseIcon = styled.button`
    display: none;

    @media all and (max-width: 800px) {
        cursor: pointer;
        position: absolute;
        right: 2rem;
        top: 1rem;
        font-size: 3rem;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        opacity: 1;
        transition: color .2s ease-out;

        &:hover {
            color: #777;
        }
    }
`