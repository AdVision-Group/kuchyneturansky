const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    name:{
        type:String
    },
    alt:{
        type:String
    },
    imagePath:{
        type:String,
        required:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    size: {
        type: Number
    },
    reference: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Reference'

    }
})

module.exports = mongoose.model("Image", imageSchema)