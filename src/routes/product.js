const express = require("express");
const Common = require('../model/Common');
const Joi = require("joi");
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        /*  #swagger.tags = ['Product']
            #swagger.description =  "不傳任何參數，將會回傳全部資料"
        */

        /* #swagger.parameters['name']= {
                in:"query",
                description: '產品名稱',
                type: 'string'
            }
        */

        /* #swagger.parameters['category'] = {
                in:"query",
                description: '產品分類',
                type: 'string'
            }
         */
        const result = await Common.list("product", req.query)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.get('/:id', async (req, res) => {
    try {
        /* #swagger.tags = ['Product'] */

        const result = await Common.find('product', { "_id": req.params.id })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})


router.post('/', async (req, res) => {
    /*  #swagger.tags = ['Product'] */

    /*  #swagger.requestBody = {
            required: true,
            schema:{$ref:"#/components/schemas/product"}
        } 
    */

    const productSchema = Joi.object({
        name: Joi.string().required(),
        points: Joi.number().integer().min(0).required(),
        category: Joi.string().required()
    })

    const { error, value } = productSchema.validate(req.body)

    if (error) {
        res.status(400).json({ message: error.message })
    } else {
        try {
            await Common.insert("product", value)
            res.status(200).json({ message: "created" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
})

router.delete('/:id', async (req, res) => {
    try {
        /* #swagger.tags = ['Product'] */

        await Common.delete("product", { "_id": req.params.id })
        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        /* #swagger.tags = ['Product'] */

        /* #swagger.requestBody = {
            required:true,
            schema:{$ref:"#/components/schemas/productUpdate"}
        }
        */

        await Common.update("product", { "_id": req.params.id }, req.body)
        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router