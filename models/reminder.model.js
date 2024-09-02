const mongoose = require('mongoose')

const reminderSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required for reminder."]
    },
    content: String,
    dateToRemind: {
        type: Date,
        required: [true, "Date to remind is required."]
    },
    date: Date
})


const Reminder = mongoose.model("Reminder", reminderSchema)

module.exports = Reminder;