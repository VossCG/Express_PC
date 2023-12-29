import "./loadEnv.js"
import "./database.js";
import todoRouter from './router/todo.js';
import userRouter from './router/user.js';
import express from 'express';
import helmet from 'helmet'
import cors from 'cors';
import { logRequestInfo } from "./middleware/request.js";

const corsOption = {
    origin: 'http://localhost:3000'
}
const app = express()

// middleware
app.use(helmet())
app.use(express.json())
app.use(cors(corsOption))
app.use(logRequestInfo)

// router
app.use('/todo', todoRouter)
app.use('/user', userRouter)



app.listen(process.env.PORT)
console.log(`server listening on port:${process.env.PORT}`);

