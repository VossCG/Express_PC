import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: new Date().getTime()
    },
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: 3
    },
    account: {
        type: String,
        required: [true, "account is required"],
        minLength: 8
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    createTime: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        enum: [
            'admin',
            'employee',
        ],
        required: [true, "role is required"]
    }
})

const User = mongoose.model('User', userSchema, 'user')

export default User