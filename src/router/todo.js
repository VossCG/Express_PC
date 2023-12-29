import asyncHandler from "express-async-handler";
import express from "express";
import ToDo from "../model/Todo.js";

const router = express.Router()

router.post('/', asyncHandler(async (req, res) => {
    const { title, completed } = req.body;

    const todo = new ToDo({
        id: new Date().getTime(),
        title: title,
        completed: completed
    });

    await todo.save()

    res.status(200).send({
        status: true,
        message: "create todo"
    })
}))

router.get('/',asyncHandler( async (req, res) => {
    const todos = await ToDo.find().select('-__v -_id')
    res.status(200).send(todos)
}))

router.put('/:id',asyncHandler(async (req, res) => {
    const todoId = req.params.id;
    const { title, completed } = req.body;

    try {
        const updatedTodo = await ToDo.findOneAndUpdate(
            { id: todoId },
            { title, completed },
            { new: true }
        );
        if (updatedTodo) {
            res.status(200).json({
                status: 200,
                message: 'Todo updated successfully',
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Todo not found',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const todoId = req.params.id;

    try {
        const deletedTodo = await ToDo.findOneAndDelete({ id: todoId });

        if (deletedTodo) {
            res.status(200).json({
                status: true,
                message: 'Todo deleted successfully',
            });
        } else {
            res.status(404).json({
                status: false,
                message: 'Todo not found',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
}));


export default router
