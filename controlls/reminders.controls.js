const Reminder = require('../models/reminder.model.js')


//GET
//Get all reminders
const getReminders = async (req, res) => {
    try{
        const reminders = await Reminder.find({})
        res.status(200).json(reminders)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//Get reminder by id
const getReminderById = async(req, res) => {
    try{
        const {id} = req.params
        const reminder = await Reminder.findById(id)
        res.status(200).json(reminder)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


//POST
//Post reminder
const postReminder = async (req, res) => {
    try{
        const reminder = await Reminder.create(req.body)
        res.status(200).json(reminder)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


//PUT
//Update reminder
const updateReminderById = async (req, res) => {
    try{
        const {id} = req.params
        const reminder = await Reminder.findByIdAndUpdate(id, req.body)
        if(!reminder){
            res.status(404).json({message: "Could not finfd requested reminder."})
        }
        res.status(200).json(reminder)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


//DELETE
//Delete reminder 
const deleteReminderById = async(req, res) => {
    try{
        const {id} = req.params
        const reminder = await Reminder.findByIdAndDelete(id)
        if(!reminder){
            res.status(404).json({message: "Could not finfd requested reminder."})
        }
        res.status(200).json({message: "Deleted requested reminder."})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getReminders,
    getReminderById,
    postReminder,
    updateReminderById,
    deleteReminderById
}