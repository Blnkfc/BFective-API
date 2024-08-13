require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Todo = require('./models/todos.model.js')
const app = express()

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
app.use(express.json())




app.get('/', (req, res) => {
    res.send('New req')
});
app.get('/api/todos', async(req, res) => {
    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});
app.get('/api/todos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id)
        res.status(200).json(todo)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})
app.post('/api/todos', async (req, res) => {
    try{
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    }catch(error){
        res.status(500).json({message: error.message})
    }
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