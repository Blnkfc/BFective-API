const Todo = require('../models/todos.model.js')


//GET
//Get every accessible todo
const getTodos = async(req, res) => {
    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


//Get todo by id 
const getTodoById = async (req, res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id)
        res.status(200).json(todo)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//POST
//Post todo
const postTodo = async (req, res) => {
    try{
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


const updateTodo = async (req, res) => {
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

}

const deleteTodo = async (req, res) => {
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
}

module.exports = {
    getTodos,
    getTodoById,
    postTodo,
    updateTodo,
    deleteTodo
}