import express from "express"
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cors from "cors"
import postRoutes from './server/routes/posts.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const { CONNECTION_URL, PORT } = process.env

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
// const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)