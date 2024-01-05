const express = require("express");
const Common = require('../model/Common')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const result = await Common.list("product")
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        await Common.insert("product", req.body)
        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/', async (req, res) => {
    try {
        await Common.delete("product", req.body)
        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router