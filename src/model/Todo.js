import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id: Number,
    title: String,
    completed: Boolean
})

const ToDo = mongoose.model('Todo', todoSchema,'todo')

export default ToDo