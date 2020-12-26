import styled from 'styled-components'

export const BackgroundOverlay = styled.section`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0 , .6);
    z-index: 999;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
`

export const ReferenceFormContainer = styled.form`
    position: fixed;
    z-index: 9999;
    width: 100%;
    max-width: 65rem;
    margin: 0 auto;
    background-color: #fff;
    padding: 2rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h2 {
        text-align: center;
        margin-bottom: 4rem;
    }

    @media all and (max-width: 800px) {
        max-height: 100vh;
        max-width: unset;
        overflow-y: scroll;
    }
`

export const CloseIcon = styled.div`
    position: absolute;
    right: 2rem;
    cursor: pointer;
`


export const InputContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 15rem 1fr;
    margin-bottom: 2rem;

    .label {
        display: block;
        font-weight: bolder;
        padding: .8rem 0;
    }

    textarea {
        display: block;
        font-size: 1.5rem;
        font-family: inherit;
        padding: 1rem 1.2rem;
        resize: none;
        margin: .2rem 0;
        outline: none;

    }



    @media all and (max-width: 800px) {
        display: flex;
        flex-direction: column
    }
`

export const InfoSpan = styled.span`
    grid-column: 2;
`

export const TextInput = styled.input`
    display: block;
    font-size: 1.5rem;
    font-family: inherit;
    padding: 1rem 1.2rem;
    margin: .2rem 0;
    outline: none;
`

export const ImagesPreview = styled.div`
    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    padding: .8rem 0;
    margin-bottom: 2rem;
    overflow-x: scroll;
`

export const ImageContainer = styled.div`
    position: relative;

    div {
        cursor: pointer;
        position: absolute;
        top: -.5rem; 
        right: -.5rem; 
        color: #fff;
        background-color: #000;
        padding: .4rem .7rem;
        font-size: 1.2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        object-position: center;
    }

    &:not(:last-child){
        margin-right: 1rem;
    }
`

export const UploadButton = styled.label`
    input[type="file"] {
        position: absolute;
        left: -999999999rem;
    }

    grid-column: 2;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    max-width: 18rem;
    font-size: 1.4rem;
    font-family: inherit;
    padding: .8rem 1rem;
    text-align: center;
    display: block;
    border: 1px solid #000;
    transition: background-color .1s ease-out,
                color .2s ease-out;

    &:hover {
        background-color: transparent;
        color: #000;
    }

`

export const SubmitButton = styled.button`
    cursor: pointer;
    background-color: #000;
    color: #fff;
    min-width: 24rem;
    font-size: inherit;
    font-family: inherit;
    padding: 1.2rem 1rem;
    margin: 0 auto 2rem;
    display: block;
    border: 1px solid #000;
    transition: background-color .1s ease-out,
                color .2s ease-out;

    &:hover {
        background-color: transparent;
        color: #000;
    }
`