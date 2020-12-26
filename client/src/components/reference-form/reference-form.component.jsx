import React, { useContext, useEffect, useState } from 'react'
import { ReferenceContext } from '../../context/reference/reference.context'

import Spinner from '../../components/spinner/spinner.component'

import {
    BackgroundOverlay,
    ImageContainer,
    ImagesPreview,
    InputContainer,
    ReferenceFormContainer,
    SubmitButton,
    TextInput,
    UploadButton,
    CloseIcon,
    InfoSpan
} from './reference-form.styles'

const ReferenceForm = ({ category }) => {
    const {
        reference,
        setReference,
        isLoading,
        closeRefForm,
        handleUploadButton,
        deleteImageToUpload,
        createReference,
        deleteImage,
        updateReference,
        isUpdating
    } = useContext(ReferenceContext)

    const [imageArr, setImageArr] = useState([])
    const imgArrWithUrl = reference.images.map(img => ({ ...img, imagePath: `${process.env.ENDPOINT}/${img.imagePath}` }))

    useEffect(() => {
        setReference({
            ...reference,
            category
        })
    }, [])

    useEffect(() => {
        setImageArr(
            [
                ...imgArrWithUrl,
                ...reference.imagesToUpload
            ]
        )
    }, [reference.imagesToUpload])


    const handleSubmit = e => {
        e.preventDefault()
        if (isUpdating) {
            updateReference(reference)
        } else {
            createReference(reference)
        }
    }


    return (
        <React.Fragment >

            <BackgroundOverlay onClick={closeRefForm} />
            <ReferenceFormContainer onSubmit={handleSubmit} enctype="multipart/form-data">
                {
                    isLoading ? (
                        <Spinner />
                    ) : (
                            <React.Fragment>
                                <CloseIcon onClick={closeRefForm}>&#10005;</CloseIcon>
                                <h2>{isUpdating ? 'Upraviť referenciu' : 'Pridať referenciu'}</h2>
                                <InputContainer>
                                    <label className='label' htmlFor='name'>Nadpis</label>
                                    <TextInput
                                        id='name'
                                        type='text'
                                        name='name'
                                        value={reference.name}
                                        onChange={e => setReference({
                                            ...reference,
                                            name: e.target.value
                                        })}
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <label className='label' htmlFor='description'>Popis</label>
                                    <textarea
                                        id='description'
                                        rows='5'
                                        value={reference.description}
                                        name='decsription'
                                        onChange={e => setReference({
                                            ...reference,
                                            description: e.target.value
                                        })}
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <span className='label'>Galéria</span>
                                    <ImagesPreview>
                                        {
                                            imageArr ? (
                                                imageArr.map((img, idx) => {
                                                    return (
                                                        <ImageContainer key={idx} >
                                                            <img alt={img + idx} src={img.imagePath} />
                                                            <div onClick={() => img.file ? deleteImageToUpload(img.imagePath) : deleteImage(img._id)}>&#10005;</div>
                                                        </ImageContainer>
                                                    )
                                                })) : (
                                                    <div>
                                                        <p>Žiadný obrázok</p>
                                                    </div>
                                                )
                                        }
                                    </ImagesPreview>
                                    <UploadButton htmlFor='imagesToUpload'>
                                        <input
                                            id='imagesToUpload'
                                            type='file'
                                            name='imagesToUpload'
                                            accept="image/png, image/jpeg"
                                            multiple
                                            onChange={e => handleUploadButton(e.target.files)}
                                        />
                                    Pridať obrázok
                                    </UploadButton>
                                    <InfoSpan>maximalna velikosť: 5MB</InfoSpan>
                                </InputContainer>
                                <SubmitButton>
                                    Uložiť
                                </SubmitButton>
                            </React.Fragment>
                        )
                }

            </ReferenceFormContainer>
        </React.Fragment >
    )
}


export default ReferenceForm
