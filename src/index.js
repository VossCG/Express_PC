import "./loadEnv.js"
import { testMiddleware } from './middleware/test.js';
import todoRouter from './router/todo.js';
import userRouter from './router/user.js';
import mongoose from 'mongoose';
import express from 'express';
import helmet from 'helmet'
import cors from 'cors';

const corsOption = {
    origin: 'http://localhost:3000'
}
const app = express()

// middleware
app.use(helmet())
app.use(express.json())
app.use(testMiddleware)
app.use(cors(corsOption))

// router
app.use('/todo', todoRouter)
app.use('/user', userRouter)

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}

await connectToDB()

app.listen(process.env.PORT)
console.log(`server listening on port:${process.env.PORT}`);

