const express = require('express')
const Note = require('../models/notes.model.js')
const router = express.Router()

const {getNotes, getNoteById, postNote, updateNote, deleteNoteById } = require('../controlls/notes.controls.js')

//GET
//Get all notes
router.get('/', getNotes)

//Get note by id
router.get('/:id', getNoteById)


//POST
//Post new note
router.post('/', postNote)


//PUT
//Update note by id
router.put('/:id', updateNote)


//DELTE
//Delete note by id
router.delete('/:id', deleteNoteById)