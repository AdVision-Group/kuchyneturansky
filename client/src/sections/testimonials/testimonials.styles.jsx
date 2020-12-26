import styled from 'styled-components'


export const TestimonialContainer = styled.section`
    position: relative;
    display: flex;
    min-height: 40rem;
    max-height: 100vh;
    overflow: hidden;
    scroll-margin-top: 10rem;


    .bg-image {
        position: absolute;
        top: 0;
        width: 100%;
    }
`

export const ContentCol = styled.div`
    position: absolute;
    z-index: 99;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:nth-child(even){
        background-color: rgba(200,200,200,.65);
    }

    @media all and (max-width: 800px) {
        width: 80%;

        @media all and (max-width: 500px) {
            width: 100%;
        }
    }
`

export const UserIcon = styled.div`
    width: 8rem;
    height: 8rem;
    background-color: gray;
    border-radius: 50%;
    margin-bottom: 3rem;
`

export const UserName = styled.h3`
    text-transform: uppercase;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 900;


    @media all and (max-width: 800px) {

        @media all and (max-width: 500px) {
            font-size: 2rem;
        }
    }
`

export const Quote = styled.p`
    max-width: 50rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    font-size: 2rem;

    @media all and (max-width: 800px) {
        @media all and (max-width: 500px) {
            font-size: 1.8rem;
        }
    }
`