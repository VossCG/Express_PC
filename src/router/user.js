import expressAsyncHandler from "express-async-handler";
import express from "express";
import User from "../model/User.js";

const router = express.Router()

router.get('/', expressAsyncHandler(async (req, res) => {
    const users = await User.find().select('-__v -_id')
    res.status(200).send(users)
}))

router.post('/', expressAsyncHandler(async (req, res) => {
    const { name, account, password } = req.body

    const user = new User({
        id: new Date().getTime(),
        name: name,
        account: account,
        password: password
    })

    await user.save()

    res.status(200).send({
        status:true,
        message:"create user"
    })
}))

export default router