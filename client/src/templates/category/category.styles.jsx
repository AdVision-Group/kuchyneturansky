import styled from 'styled-components'

export const ContentContainer = styled.section`
    /* padding-top: 8rem; */
`

export const HeaderContainer = styled.div`
    height: 70vh;
    background-color: #eee;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-bottom: 6rem;
    position:relative;
    overflow:hidden;

    .gatsby-image-wrapper {
         height: 100%;
     }
`

export const Header = styled.div`
    width: 22rem;
    height: 22rem;
    /* background-color: #000; */
    border-radius: 50%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    z-index: 9;
    text-align: center;
    position: absolute;
            top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

    h1 {
        position: absolute;
        font-weight: bolder;
    color: ${({ black }) => black ? "#000" : "#fff"};

        /* color: #fff; */
        font-size: 1.8rem;
        margin: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`
