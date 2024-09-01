const express = require('express')
const Todo = require('../models/todos.model.js')
const router = express.Router()

const {getTodos, getTodoById, postTodo, updateTodo, deleteTodo} = require('../controlls/todos.controls.js')

//GET ALL TODOS
router.get('/', getTodos);

//GET TODO BY ID
router.get('/:id', getTodoById)

//POST TODO
router.post('/', postTodo);

//UPDATE TODO
router.put('/:id', updateTodo)

//DELETE TODO
router.delete('/:id', deleteTodo)



module.exports = router;