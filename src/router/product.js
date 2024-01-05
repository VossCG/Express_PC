
import expressAsyncHandler from 'express-async-handler';
import { Product } from '../model/Product.js';
import express from 'express';

const productRouter = express.Router()

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    try {
        const result = await Product.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}))


productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const result = await Product.findById(req.params.id)

        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: "product not found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}))

productRouter.post('/', expressAsyncHandler(async (req, res) => {
    const { name, cost, inventory, expiredDate, exchangeRelation } = req.body

    const product = new Product({
        name: name,
        cost: cost,
        inventory: inventory,
        expiredDate: expiredDate,
        exchangeRelations: exchangeRelation
    })

    try {
        const result = await product.save()
        if (result) {
            res.status(200).json({ message: "success" })
        } else {
            res.status(400).json({ message: "failed to create product" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}))

productRouter.delete('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const result = await Product.findByIdAndDelete(req.params.id)
        if (result) {
            res.status(200).json({ message: "刪除成功" })
        } else {
            res.status(404).json({ message: "product not found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}))

productRouter.delete('/', expressAsyncHandler(async (req, res) => {
    try {
        const result = await Product.deleteMany()
        if (result) {
            res.status(200).json({ message: "delete all" })
        } else {
            res.status(404).json({ message: "data is empty" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}))

productRouter.put('/:id', expressAsyncHandler(async (req, res) => {
    try {

        const result = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )

        if (result) {
            res.status(200).json({
                message: "success",
                data: result
            })
        } else {
            res.status(404).json({
                message: "product not found"
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}))


export default productRouter