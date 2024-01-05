import mongoose from "mongoose";


export const TransactionSchema = new mongoose.Schema({
    machineID: String,
    productID: String,
    type: {
        type: String,
        enum: ['incoming', 'outgoing', 'scrap']
    },
    amount: Number,
    timestamp: String,
})

export const Transaction = mongoose.model('Transaction', TransactionSchema)