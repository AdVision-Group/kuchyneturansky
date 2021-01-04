import styled from 'styled-components'

export const MessageContainer = styled.div`
    font-size: 2rem;
    margin: 4rem 0 8rem;
    text-align: center;
`

export const ReferencesContainer = styled.div`
    overflow: hidden;
    margin-bottom: 4rem;
`

export const ProjectOverviewCard = styled.div`
    display: flex;

    &:nth-child(even){
        flex-direction: row-reverse
    }

    @media all and (max-width: 800px) {
        flex-direction: column;

        &:nth-child(even){
            flex-direction: column;
        }

    }
`
export const CardCol = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;


    img {
        /* width: 100%; */
        object-fit: contain;
        object-position: center center;
    }

    h2 {
        font-weight: bolder;
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 3rem;
        white-space: pre-line;
    }

    /* &:nth-child(even) { */
        padding: 4rem;
    /* } */

    @media all and (max-width: 800px) {
        width: 100%;
        padding: 2rem;

        @media all and (max-width: 800px) {
            padding: 2rem 1rem;
        }
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 41rem;
    flex-wrap: wrap;

    @media all and (max-width: 500px) {
        width: 28.5rem;
    }
`