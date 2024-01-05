import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { ExchangeRelation } from '../model/ExchangeRelation.js';

const exchangeRelationRouter = express.Router()

exchangeRelationRouter.post('/', expressAsyncHandler(async (req, res) => {
    const { exchangeRate, productId } = req.body

    const relation = new ExchangeRelation({
        exchangeRate: exchangeRate,
        productId: productId
    })
    try {
        const result = await relation.save()
        if (result) {
            res.status(200).json({ message: 'success' })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}))

exchangeRelationRouter.get('/', async (req, res) => {
    try {
        const result = await ExchangeRelation.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})



export default exchangeRelationRouter