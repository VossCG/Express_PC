import mongoose from "mongoose";

export const ExchangeRelationSchema = new mongoose.Schema({
    productID: String,
    exchangeRate: Number,
})

export const ExchangeRelation = mongoose.model('ExchangeRelation', ExchangeRelationSchema)
