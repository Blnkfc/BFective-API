
const Note = require('../models/notes.model.js')


//GET
//Get every accessible note
const getNotes = async (req, res) => {
    try{
        const notes = await Note.find({})
        res.status(200).json(notes)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//Get note by id
const getNoteById = async (req, res) => {
    try{
        const {id} = req.params
        const note = await Note.findById(id)
        res.status(200).json(note)
    }catch(error){
        res.status(500).json({mesage: error.message})
    }
}

//POST
//Post note
const postNote = async(req, res) => {
    try{
        const note = await Note.create(req.body)
        res.status(200).json(note)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//PUT
//Update note
const updateNote = async(req, res) => {
    try{
        const {id} = req.params
        const prevNote = await Note.findByIdAndUpdate(id, req.body)
        if(!note){
            res.status(404).json({message: "Could not find requested note."})
        }
        const updatedNote = await Note.findById(id)
        res.status(200).json(updatedNote)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//DELETE
//Dete note by id
const deleteNoteById = async(req, res) => {
    try{
        const {id} = req.params
        const note = await Note.findByIdAndDelete(id)
        if(!note){
            res.ststus(404).json({message: "Could not find requested note."})
        }
        res.status(200).json({message: "Deleted requested note."})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getNotes, 
    getNoteById, 
    postNote, 
    updateNote, 
    deleteNoteById
}



