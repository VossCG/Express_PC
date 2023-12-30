import "./loadEnv.js"
import "./database.js";
import { logRequestInfo } from "./middleware/request.js";
import productRouter from './router/product.js';
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
app.use(cors(corsOption))
app.use(logRequestInfo)

// router
app.use('/product',productRouter)


app.listen(process.env.PORT)
console.log(`server listening on port:${process.env.PORT}`);

