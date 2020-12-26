import styled from 'styled-components'

export const CategorySection = styled.section`
    padding: 10rem 3rem;

    @media all and (max-width: 800px) {
        padding: 7rem 2rem;

        @media all and (max-width: 500px) {
            padding: 5rem 1rem;
        }
    }
`

export const SectionTitle = styled.h2`
    text-transform: uppercase;
    font-size: 12vw;
    font-weight: 900;
    opacity: .5;
    color: lightgray;
`


export const ContentContainer = styled.div`
    /* width: 100%; */
    margin: 5rem auto 20rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    a {
        display: inline-block;
        text-decoration: none;
        margin: 0 .5rem;

    }

    figure {
        margin: 0 .5rem;
    }

    @media all and (max-width: 800px) {
        min-width: 45rem;
        max-width: 70%;
        display: flex;
        flex-direction: column;
        margin: 10rem auto;

        
        figure {
            align-self: flex-start;
            /* width: 49%; */
        }
        figure:nth-child(odd) {
            align-self: flex-end;
            margin-right: unset;
        }

        @media all and (max-width: 500px) {
            margin: 5rem auto;
            min-width: 28rem;
            max-width: unset;

            width: 80%;

            @media all and (max-width: 315px) {	
                min-width: 22rem;	
            }
        }

    }

`
