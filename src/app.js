import "./loadEnv.js"
import "./database.js";
import { logRequestInfo } from "./middleware/request.js";
import { corsMiddleware } from "./middleware/cors.js";
import exchangeRelationRouter from "./router/exchangeRelation.js";
import productRouter from './router/product.js';
import express from 'express';
import helmet from 'helmet'

const app = express()

// middleware
app.use(helmet())
app.use(express.json())
app.use(corsMiddleware)
app.use(logRequestInfo)

// router
app.use('/product', productRouter)
app.use('/exchangeRelation', exchangeRelationRouter)

app.listen(process.env.PORT)
console.log(`server listening on port:${process.env.PORT}`);
