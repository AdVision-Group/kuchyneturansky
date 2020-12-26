const mongoose = require('mongoose')

const referenceSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Image'
        }
    ]
})

module.exports = mongoose.model('Reference', referenceSchema)