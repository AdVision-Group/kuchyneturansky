import styled, { css } from "styled-components"

const openHamMenu = css`
    &:nth-child(1) {
        top: 1rem;
        transform: rotate(45deg);
    }

    &:nth-child(2) {
        opacity: 0;
    }

    &:nth-child(3) {
        bottom: 1.3rem;
        transform: rotate(-45deg);
    }
`

const closeHamMenu = css`
    &:nth-child(1) {
        top: 0;
    }

    &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
    }

    &:nth-child(3) {
        bottom: 0;
    }
`

export const HamButton = styled.button`
    cursor: pointer;
    display: none;
    outline: none;
    border: none;
    background-color: transparent;

    &:focus {
        outline: none;
    }

    @media all and (max-width: ${({ maxWidth }) => maxWidth}) {
        align-self: center;
        display: block;
        background-color: transparent;
        border: none;
        width: 3rem;
        height: 2.2rem;
        position: relative;

        div {
            position: absolute;
            width: 100%;
            height: 2.5px;
            background-color: #000;
            transition: all 0.3s ease-in-out;

            ${(props) => props.isOpen ? openHamMenu : closeHamMenu};
        }
        
    }
`
