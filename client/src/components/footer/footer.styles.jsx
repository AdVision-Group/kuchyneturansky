import styled from "styled-components"

export const FooterContainer = styled.footer`
    background-color: black;
    color: #fff;
    padding: 10rem 3rem 2rem;

    @media all and (max-width: 800px) {
        padding: 7rem 2rem;

        @media all and (max-width: 500px) {
            padding: 5rem 1rem;
        }
    }
`

export const RowStyles = styled.div`
    max-width: 165rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media all and (max-width: 500px) {
        flex-direction: column;
        flex-wrap: unset;
    }
`

export const ColStyles = styled.div`
    margin: 1rem;

    h2 {
        text-transform: uppercase;
        font-weight: 700;

    }

    h3 {
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-weight: bolder;
    }

    p {
        font-size: 1.6rem;
        opacity: .6;
        margin-bottom: 1rem;

        a {
            text-decoration: none !important;
            color: #fff;
        }
    }

    @media all and (max-width: 500px) {
        margin-bottom: 3rem;
    }
`

export const NavLink = styled.button`
    font-weight: 400;
    font-size: 1.6rem   ;
    opacity: .6;
    margin-bottom: 1rem;
    text-decoration: none;
    display: block;
    color: #fff;
    transition: color .2s ease-out;
    background-color: transparent;
    border:none;
    outline: none;

    &:focus {
        outline: none;

    }

    &:hover {
        color: #ddd;
        text-decoration: none
    }
`
export const SocialLink = styled.a`
    font-weight: 400;
    font-size: 1.6rem   ;
    opacity: .6;
    margin-bottom: 1rem;
    text-decoration: none;
    display: block;
    color: #fff;
    transition: color .2s ease-out;
    background-color: transparent;
    border:none;
    outline: none;

    &:focus {
        outline: none;

    }

    &:hover {
        color: #ddd;
        text-decoration: none
    }
`

export const Watermark = styled.div`
    text-align: center;
    color: rgba(255,255,255,.4);
    font-size: 1.5rem;
    margin-top: 4rem;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            color: rgba(255,255,255,.83);
        }
    }

`