import React, { useState } from 'react'
import styled from 'styled-components'

// import errImg from '../../images/on-error.svg'
import Spinner from '../spinner/spinner.component'

const ImageSpinner = styled(Spinner)`
    div {
    height: 20vh !important;

    }
`


const CustomImage = ({ src, alt }) => {
    const [showSpinner, setShowSpinner] = useState(false)

    const handleOnError = () => {
        // setImgSrc(errImg)
        setShowSpinner(true)
    }

    if (showSpinner) return <ImageSpinner />

    return (
        <img alt={alt} src={src} onError={handleOnError} loading='lazy' />
    )
}

export default CustomImage
