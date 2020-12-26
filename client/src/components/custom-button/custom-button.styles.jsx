import styled, { css } from 'styled-components'

const getButtonStyles = props => {
    return props.inverted ? InvertedButtonStyles : ButtonStyles
}

export const CustomButtonContainer = styled.button`
    cursor: pointer;
    width: auto;
    min-width: 20rem;
    font-size: inherit;
    font-family: inherit;
    padding: 1.2rem 1rem;
    /* margin: 0 auto 4rem; */
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    outline: none;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: transparent;
        color: #000;
    }

    margin: ${({ center }) => center ? "0 auto 1rem" : "unset"};

    ${getButtonStyles}
`

export const ButtonStyles = css`
    background-color: #000;
    color: white;
    border: 1px solid #000;
    transition: background-color .1s ease-out,
        color .2s ease-out;

    :hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

export const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid #000;
    }
`