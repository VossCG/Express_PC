require("dotenv").config();
const corsMiddleware = require("./src/middleware/cors");
const productRouter = require('./src/routes/product');
const swaggerDocument = require('./swagger-output.json')
const swaggerUi = require('swagger-ui-express')
const express = require('express');
const helmet = require('helmet');
const app = express()

// middleware
app.use(helmet())
app.use(express.json())
app.use(corsMiddleware)

// router
app.use('/product', productRouter)

// docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(process.env.PORT)
console.log(`server listening on port:${process.env.PORT}`);

