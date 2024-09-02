require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const todoRoute = require('./routes/todo.route.js')
const noteRoute = requiere('./routes/note.route.js')
const Todo = require('./models/todos.model.js')
const app = express()

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
app.use(express.json())

app.use('/api/todos', todoRoute )

app.use('/api/notes', noteRoute)

app.get('/', (req, res) => {
    res.send('New req')
});




mongoose.connect(DB_CONNECTION_STRING)
.then(() => {
    console.log('connected to db')
}).catch(() => {
    console.log('connection failed')
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
});