const e = require('express')
const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.listen(3000, () => {
    console.log('Server running on port 3000')
})

app.get('/', (req, res) => {
    res.send('New req')
})

mongoose.connect("mongodb+srv://qnit:E8SZLYJdREnWHulm@bfectiveapi.gxqy8.mongodb.net/?retryWrites=true&w=majority&appName=bfectiveapi")
.then(() => {
    console.log('connected to db')
}).catch(() => {
    console.log('connection failed')
})