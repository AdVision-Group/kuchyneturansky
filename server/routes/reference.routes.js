const express = require('express')
const router = express.Router()
const fs = require('fs')
const authenticateToken = require('../middlewares/verify-token')

const {serverError} = require('../utils/errors')

const Reference = require('../models/reference.model')

//Get all reference
router.get('/', async (req, res) => {
    try {
        const referencies = await Reference.find().populate('images')

        return res.json({
            message: "Referencies retrieved successfully",
            count: referencies.length,
            referencies: referencies
        })
    } catch (err) {
        serverError(res, err)
    }
})

//Create reference by category
router.get('/:category', async (req, res) => {
    try {
        if(req.params.category) {
            const referencies = await Reference.find({category: req.params.category}).populate('images')
            return res.json({
                message: "Successfully retrieved referencies",
                count: referencies.length,
                referencies: referencies
            })

        } else {
            return res.json({
                message: "Didn't get category data",
            })
        }
    } catch (err) {
        serverError(res, err)
    }
})

//Create reference
router.post('/', authenticateToken, async (req, res) => {
    try {
        if(req.body.name && req.body.description && req.body.category && req.body.images){
            const reference = new Reference({
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                images: req.body.images
            })
    
            await reference.save()
    
            return res.json({
                message: "Successfully created reference",
                reference: reference
            })
            
        } else {
            return res.json({
                message: "Didn't get some data",
            })
        }

    } catch (err) {
        serverError(res, err)
    }
})

// Update reference
router.patch('/:id', authenticateToken, getReference, async (req, res) => {
    try {
        if( req.body.name != null ) {
            res.reference.name = req.body.name
        }
        if( req.body.description != null ) {
            res.reference.description = req.body.description
        }
        if( req.body.images != null ) {
            res.reference.images = [...res.reference.images, ...req.body.images]
        }

        await res.reference.save()
    
        return res.json({
            message: "Successfully updated reference",
            reference: res.reference
        })

    } catch (err) {
        serverError(res, err)
    }
})


// Delete reference
router.delete('/:id', authenticateToken, getReference, async (req, res) => {
    try {
        if(res.reference) {
            await res.reference.delete()
            return res.json({
                message: "Successfully deleted",
                reference: res.reference
            })
        } else {
            return res.json({
                message: "No refereence to delete",
            })
        }
    } catch (err) {
        serverError(res, err)
    }
})

async function getReference(req, res, next) {
    let reference
    try {
        reference = await Reference.findById(req.params.id).populate('images')
        if( reference == null ) {
            return res.status(404).json({message: "Cannot find any reference"})
        }
    } catch (err) {
        serverError(res, err)
    }

    res.reference = reference
    next()
}


module.exports = router