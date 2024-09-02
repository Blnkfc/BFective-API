const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is a required field for todo."]
    },
    content: String,
    date: Date,
},
    {
        timestamps: true
    }
);


const Note = mongoose.model("Todo", NoteSchema);

module.exports = Note