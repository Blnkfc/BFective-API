const express = require('express')
const Reminder = require('../models/reminder.model.js')
const router = express.Router()

const {getReminders, getReminderById, postReminder, updateReminderById, deleteReminderById} = require("../controlls/reminders.controls.js")


//GET 
//Get all remimders
router.get('/', getReminders)

//Get reminder by id
router.get('/:id', getReminderById)


//POST
//Post reminder
router.post('/', postReminder)


//PUT
//Update reminder by id
router.put('/:id', updateReminderById)


//DELETE
//Delete reminder by id
router.delete('/:id', deleteReminderById)



module.exports = router
