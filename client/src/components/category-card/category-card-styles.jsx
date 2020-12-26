import styled from 'styled-components'

export const CategoryCardContainer = styled.div`
    display: block;
    position: relative;
    /* min-width: 20rem; */
    max-width: 22rem;
    /* min-height: 30rem; */
    height: 100%;
    min-height: 30rem;
    overflow: hidden;
    margin: 0 auto;
    z-index: 9;
    transition: transform .2s ease-out;
    box-shadow: 2rem 3rem 6rem 0 rgba(0,0,0, 0.10);


    &:hover {
        transform: scale(1.05);
        z-index: 99;
    }

    .gatsby-image-wrapper {
        position: unset !important;
        height: 100% ;
        img {

        }
    }

    @media all and (max-width: 800px) {
        width: 100%;
        min-width: 20rem;
    }
    @media all and (max-width: 500px) {
        min-width: 15rem;
        min-height: 20rem;

        @media all and (max-width: 315px) {	
            min-width: 12rem;	
            min-height: 18rem;	
        }
    }

`

export const CategoryHeading = styled.div`
    width: 100%;
    position: absolute;
    /* background-color: #000; */
    z-index: 1;
    padding: 1rem .5rem 2rem;
    bottom: 0;
    left: 0;

    h2 {
        font-size: 100%;
        text-transform: uppercase;
        text-align: center;
        font-weight: bolder;
        color: ${({ black }) => black ? "#000" : "#fff"};
        margin-bottom: 1rem;



        @media all and (max-width: 850px) {
            font-size: 90%;

            @media all and (max-width: 800px) {
                font-size: 100%;
                @media all and (max-width: 500px) {
                    margin-bottom: 0;


                } 
            }
        }
    }

    /* &::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0rem;
        height: 8rem;
        width: 100%;
        transform: skew(0deg, -15deg);
        background-color: #000;
        z-index: -1;
    } */
`