import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    account: String,
    password: String
})

const User = mongoose.model('User', userSchema, 'user')

export default User