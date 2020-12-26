import styled from 'styled-components'

export const InputGroup = styled.div`
    position: relative;
    margin: 45px 0;

    .form-input {
        background: none;
        background-color: white;
        color: #000;
        font-size: 18px;
        padding: 1rem 2rem; 
        display: block;
        width: 100%;
        border: 1px solid gray;
        border-radius: 0;
        margin: 25px 0;

        &:focus {
            outline: none;
        }

        &:focus~.form-input-label {
            top: -16px;
            left: 0;
            font-size: 12px;
            color: #000;
        }
    }

        input[type='password'] {
        letter-spacing: 0.3em;
    }

    .form-input-label {
        color: gray;
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 2rem;
        top: 12px;
        transition: 300ms ease all;

        &.shrink {
            top: -16px;
            left: 0;

            font-size: 12px;
            color: #000;
        }
    }
`

// $sub-color: grey;
// $main-color: black;

// @mixin shrinkLabel {
    // top: -14px;
    // font-size: 12px;
    // color: $main-color;
// }

// .group {
    // position: relative;
    // margin: 45px 0;

    // .form-input {
    //     background: none;
    //     background-color: white;
    //     color: $sub-color;
    //     font-size: 18px;
    //     padding: 10px 10px 10px 5px;
    //     display: block;
    //     width: 100%;
    //     border: none;
    //     border-radius: 0;
    //     border-bottom: 1px solid $sub-color;
    //     margin: 25px 0;

    //     &:focus {
    //         outline: none;
    //     }

    //     &:focus~.form-input-label {
    //         @include shrinkLabel();
    //     }
    // }

    // input[type='password'] {
    //     letter-spacing: 0.3em;
    // }

    // .form-input-label {
    //     color: $sub-color;
    //     font-size: 16px;
    //     font-weight: normal;
    //     position: absolute;
    //     pointer-events: none;
    //     left: 5px;
    //     top: 10px;
    //     transition: 300ms ease all;

    //     &.shrink {
    //         @include shrinkLabel();
    //     }
    // }
// }