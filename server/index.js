const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI || "mongodb://admin:admin@localhost:27017/test", { useNewUrlParser: true , useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.on('open', () => console.log("Connected to Databse"))

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

const referenceRouter = require('./routes/reference.routes')
const imageRouter = require('./routes/image.routes')
const authRouter = require('./routes/auth')

app.use("/referencies", referenceRouter)
app.use("/images", imageRouter)
app.use("/auth", authRouter)

app.get('*', (req, res) => {
    res.send({message: "API route not found"})
})


const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`listening on port ${port}`));