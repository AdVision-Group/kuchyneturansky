import styled from 'styled-components'

export const ProjectOverviewContainer = styled.section`
    position: relative;
    padding: 10rem 0;

`

export const Heading = styled.h2`
    /* position: absolute; */
    text-transform: uppercase;
    font-size: 12vw;
    font-weight: 900;
    padding-left: 3rem;
    color: lightgray;


    @media all and (max-width: 800px) {
        padding-left: 2rem;

        @media all and (max-width: 500px) {
            padding-left: 1rem;
        }
    }
`
export const ContentContainer = styled.div`
    margin: 10rem 0;

        @media all and (max-width: 800px) {
            margin: 5rem 0;
            @media all and (max-width: 500px) {
                margin: 0;
            }
        }
`

export const ProjectOverviewCard = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;

    .gatsby-image-wrapper {
        height:100%;
    }


    &:nth-child(even){
        flex-direction: row-reverse
    }

    @media all and (max-width: 800px) {
        flex-direction: column;   
        &:nth-child(even){
            flex-direction: column
        }
    }
`

export const CardCol = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
        line-height: 1.8;
        font-weight: 400;
        color: #999;
        margin-bottom: 3rem;
    }

    &:nth-child(even) {
        padding: 4rem;


    }

    @media all and (max-width: 800px) {
        width: 100%;

        &:nth-child(even) {
           padding: 4rem 2rem;

            @media all and (max-width: 500px) {
                padding: 4rem 1rem;
            }
        }
    }
`

export const OptionsContainer = styled.div`
    /* display: flex; */
    width: 100%;
`