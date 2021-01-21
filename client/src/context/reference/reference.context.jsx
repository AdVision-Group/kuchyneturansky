import React, { createContext, useState } from 'react'
import { postImages, delImage } from '../image/image.queries'

import { delReference, fetchReferenciesByCategory, postReference, patchReference } from './reference.queries'

export const ReferenceContext = createContext({
    reference: {
        name: '',
        description: '',
        images: [],
        imagesToUpload: [],
        category: ''
    },
    referencies: null,
    isLoading: false,
    isUpdating: false,
    showRefForm: false,
    getReferenciesByCategory: () => { },
    openRefForm: () => { },
    closeRefForm: () => { },
    setReference: () => { },
    handleUploadButton: () => { },
    deleteImageToUpload: () => { },
    createReference: () => { },
    deleteReference: () => { },
    deleteImage: () => { },
    updateReference: () => { }
})

const ReferenceProvider = ({ children }) => {
    // const { uploadImages, deleteImage } = useContext(ImageContext)

    const [reference, setReference] = useState({
        name: '',
        description: '',
        images: [],
        imagesToUpload: [],
        category: '',
    })
    const [referencies, setReferencies] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showRefForm, setShowRefForm] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const getReferenciesByCategory = async (category) => {
        setIsLoading(true)

        try {
            const response = await fetchReferenciesByCategory(category)
            const data = await response.json()
            if (data.referencies) {
                setReferencies(data.referencies)
            }
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    const openRefForm = (ref) => {
        setShowRefForm(true)
        if (ref) {
            setIsUpdating(true)
            setReference({
                ...ref,
                imagesToUpload: []
            })
        }
    }

    const closeRefForm = () => {
        setReference({
            name: '',
            description: '',
            images: [],
            imagesToUpload: [],
            category: ''
        })
        setShowRefForm(false)
        setIsUpdating(false)
    }

    const handleUploadButton = (files) => {
        console.log(files)
        const filesArr = Object.keys(files).map(key => files[key])

        let arr = []

        filesArr.forEach(file => {
            console.log(file)
            if (file.size > 5 * 1024 * 1024) {
                alert(`${file.name} je väčši ako 5MB`)
                return
            } else {
                arr.push(file)
            }
        })

        const ImageToUploadArr = arr.map(file => {
            return {
                imagePath: URL.createObjectURL(file),
                file,
            }
        })

        setReference({
            ...reference,
            imagesToUpload: [...reference.imagesToUpload, ...ImageToUploadArr]
        })
    }

    const deleteImageToUpload = imagePath => {
        setReference({
            ...reference,
            imagesToUpload: reference.imagesToUpload.filter(img => img.imagePath !== imagePath)
        })
    }

    const createReference = async () => {
        setIsLoading(true)

        try {
            const imgResponse = await postImages(reference.imagesToUpload)
            const imgData = await imgResponse.json()

            if (imgData.images.length) {
                const response = await postReference(reference.name, reference.description, reference.category, imgData.images)
                await response.json()

                setIsLoading(false)
                closeRefForm()
                getReferenciesByCategory(reference.category)
            }

        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    const updateReference = async () => {
        setIsLoading(true)

        try {
            if (reference.imagesToUpload.length > 0) {
                const imgResponse = await postImages(reference.imagesToUpload)
                const imgData = await imgResponse.json()

                if (imgData.images.length > 0) {
                    const response = await patchReference(reference._id, reference.name, reference.description, reference.category, imgData.images)
                    await response.json()


                    setIsLoading(false)
                    getReferenciesByCategory(reference.category)
                    closeRefForm()
                }
            } else {
                const response = await patchReference(reference._id, reference.name, reference.description, reference.category)
                await response.json()

                setIsLoading(false)
                getReferenciesByCategory(reference.category)
                closeRefForm()
            }

        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    const deleteImage = async (imageId) => {
        setIsLoading(true)
        try {
            const response = await delImage(imageId)
            const data = await response.json()
            console.log(data)

            setReference({
                ...reference,
                images: reference.images.filter(img => img._id !== data.image._id)
            })

            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)

        }
    }

    const deleteReference = async (ref) => {
        setIsLoading(true)
        try {
            ref.images.forEach(async img => {
                const imgResponse = await delImage(img._id)
                await imgResponse.json()
            })

            const response = await delReference(ref._id)
            await response.json()

            getReferenciesByCategory(ref.category)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }
    return (
        <ReferenceContext.Provider
            value={{
                reference,
                referencies,
                isLoading,
                isUpdating,
                showRefForm,
                getReferenciesByCategory,
                openRefForm,
                closeRefForm,
                setReference,
                handleUploadButton,
                deleteImageToUpload,
                createReference,
                deleteReference,
                deleteImage,
                updateReference
            }}
        >
            {children}
        </ReferenceContext.Provider>
    )
}

export default ReferenceProvider