const express = require('express')
const Todo = require('../models/todos.model.js')
const router = express.Router()

//GET ALL TODOS
router.get('/', async(req, res) => {
    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

//GET TODO BY ID
router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id)
        res.status(200).json(todo)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//POST TODO
router.post('/api/todos', async (req, res) => {
    console.log("Received POST request:", req.body);
    try{
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

//UPDATE TODO
router.put('/api/todos/:id', async (req, res) => {
    try{
        const {id} = req.params
        const todo = await Todo.findByIdAndUpdate(id, req.body)

        if(!todo){
            res.status(404).json({message: "Could not find requested todo"})
        }

        const updatedTodo = await Todo.findById(id)
        res.status(200).json(updatedTodo)
    }catch(error){
        res.status(500).json({message: error.message})
    }

})

//DELETE TODO
router.delete('/api/todos/:id', async (req, res) => {
    try{
        const {id} = req.params
        const todo = await Todo.findByIdAndDelete(id)
        if(!todo){
            res.status(404).json({message: "Could not find requested todo"})
        }
        res.status(200).json({message: 'Deleted the todo succesfully'})

        
    }catch(error){
        res.status(500).json({message: error.message})
    }
})



module.exports = router;