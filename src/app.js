require("dotenv").config();
const corsMiddleware = require("./middleware/cors");
const productRouter = require('./router/product');
const express = require('express');
const helmet = require('helmet');
const app = express()

// middleware
app.use(helmet())
app.use(express.json())
app.use(corsMiddleware)

// router
app.use('/product', productRouter)

app.listen(process.env.PORT)
console.log(`server listening on port:${process.env.PORT}`);

