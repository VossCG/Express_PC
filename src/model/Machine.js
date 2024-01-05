import mongoose from "mongoose"
import { TransactionSchema } from "./Transaction"

const machineSchema = mongoose.Schema({
    id: String,
    name: String,
    coinAmount: Number,
    location: {
        type: String,
        enum: ["文賢", "崇善", "大武"]
    },
    transactions: [TransactionSchema],
    currentStock: [{ productID: String, quantity: Number }],
})

const Machine = mongoose.model('Machine', machineSchema)

export default Machine