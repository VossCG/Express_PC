import expressAsyncHandler from "express-async-handler";
import express from "express";
import User from "../model/User.js";

const router = express.Router()

router.get('/', expressAsyncHandler(async (req, res) => {
    try {
        const result = await User.find().select('-__v -_id')
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({
            status: false,
            message: error.message
        })
    }

}))


router.get('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const result = await User.find({ id: req.params.id }).select('-__v -_id');

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send({
                status: false,
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(400).send({
            status: false,
            message: error.message
        });
    }
}));


router.post('/', expressAsyncHandler(async (req, res) => {
    const { id, name, account, password, role } = req.body

    const user = new User({
        id: id,
        name: name,
        account: account,
        password: password,
        role: role
    })

    try {
        await user.save()
        res.status(200).send({
            status: true,
            message: "User created successfully"
        });
        id++
    } catch (error) {
        res.status(400).send({
            status: false,
            message: error.message
        });
    }
}))

router.put('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const userId = req.params.id
        const result = await User.findOneAndUpdate(
            { id: userId },
            { $set: { name: req.body.name } },
            { new: true })

        if (result) {
            res.status(200).send({
                status: true,
                message: `User with ID ${userId} updated successfully`,
                user: result,
            });
        } else {
            res.status(404).send({
                status: false,
                message: `User with ID ${userId} not found`,
            });
        }
    } catch (error) {
        res.status(400).send({
            status: false,
            message: error.message
        });
    }
}))

router.delete('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const result = await User.deleteOne({ id: req.params.id });

        if (result) {
            res.status(200).send({
                status: true,
                message: "User deleted successfully"
            });
        } else {
            res.status(404).send({
                status: false,
                message: "User not found or already deleted"
            });
        }
    } catch (error) {
        res.status(400).send({
            status: false,
            message: error.message
        });
    }
}))


router.delete('/', expressAsyncHandler(async (req, res) => {
    try {
        const result = await User.deleteMany();

        if (result) {
            res.status(200).send({
                status: true,
                message: `${result.deletedCount} users deleted successfully`
            });
        } else {
            res.status(404).send({
                status: false,
                message: "No users found to delete"
            });
        }
    } catch (error) {
        res.status(400).send({
            status: false,
            message: error.message
        });
    }
}))


export default router