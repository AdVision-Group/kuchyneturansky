const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const {serverError} = require('../utils/errors')
const authenticateToken = require('../middlewares/verify-token')

const Image = require('../models/image.model')

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

// accept only jpeg/png iamge formats
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false) 
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
    fileFilter
})

router.get('/', async (req, res) => {
    try {
        const images = await Image.find()
        return res.json({
            message: "Images retrieved successfully",
            count: images.length,
            images: images
        })
    } catch (err) {
        serverError(res, err)
    }
})

router.post('/', upload.array('imagesToUpload', 10), authenticateToken, async (req, res) => {
    try {
        let imgArr = []
        req.files.forEach(file => {
            const image = new Image({
                name: file.originalname,
                alt: file.originalname,
                imagePath: file.path,
                size: file.size
            })

            image.save()
            imgArr.push(image._id)
        })

        res.json({
            message: "Successfully uploaded",
            count: req.files.length,
            images: imgArr
        })

    } catch (err) {
        serverError(res, err)
    }
})

router.patch('/', authenticateToken, (req, res) => {
    try {
        if(req.body.referenceId) {
            if(req.body.images) {
                req.body.images.forEach(async (image) => {
                    const imgToUpdate = await Image.findByIdAndUpdate(image, {
                        reference: req.body.referenceId
                    })
                    await imgToUpdate.save()
                })
                res.json({
                    message: "Successfully updated",
                })

            } else {
                res.json({
                    message: "Didn't get any images",
                })
            }
        } else {
            res.json({
                message: "Didn't get reference ID",
            })
        }
    } catch (err) {
        serverError(res, err)
    }
})

router.delete('/:id', authenticateToken, getImage, async (req, res) => {
    try {
        if(res.image) {
            if(fs.existsSync(`../app/${res.image.imagePath}`)) {
                fs.unlinkSync(`../app/${res.image.imagePath}`)
                await res.image.delete()
                res.json({
                    message: "Successfully deleted",
                    image: res.image
                })
            } else {
                res.json({
                    message: "I found an image but I can't delete it",
                })    
            }
        } else {
            res.json({
                message: "No image found",
            })
        }

    } catch (err) {
        serverError(res, err)
    }
})

async function getImage(req, res, next) {
    let image
    try {
        image = await Image.findById(req.params.id)
        if( image == null ) {
            return res.status(404).json({message: "Cannot find image reference"})
        }
    } catch (err) {
        serverError(res, err)
    }

    res.image = image
    next()
}

module.exports = router