const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
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


const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo