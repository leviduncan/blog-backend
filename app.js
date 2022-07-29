const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()
app.use(express.json())

const api = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
}

const url = `mongodb+srv://${api.user}:${api.pass}@cluster0.tle4w.mongodb.net/BLOG?authSource=admin&replicaSet=atlas-i4dsrm-shard-0&w=majority`

const postRouter = require('./routes/blog')
app.use('/posts', postRouter)

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})

const server = app.listen(process.env.PORT || 8000, () => {
    const port = server.address().port
    console.log(`Express running on port: ${port}`);
})