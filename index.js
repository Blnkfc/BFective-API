require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const todoRoute = require('./routes/todo.route.js')
const noteRoute = require('./routes/note.route.js')
const reminderRoute = require('./routes/remider.route.js')
const Todo = require('./models/todos.model.js')
const app = express()

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
app.use(express.json())

app.use('/api/todos', todoRoute )

app.use('/api/notes', noteRoute)

app.use('/api/reminders', reminderRoute)

app.get('/', (req, res) => {
    res.send('New req')
});

app.get('/api', async (req, res) => {
    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})




mongoose.connect(DB_CONNECTION_STRING)
.then(() => {
    console.log('connected to db')
}).catch(() => {
    console.log('connection failed')
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
});