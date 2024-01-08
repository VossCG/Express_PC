const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: 'Claw API',
        description: "",
    },
    externalDocs: {
        description: '',
        url: 'http://localhost:3000/api-docs'
    },
    tags: [
        { name: 'Product' },
        { name: 'User' }
    ],
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
    components: {
        schemas: {
            product: {
                $name: "可樂果",
                $points: 100,
                $category: "食品"
            },
            productQuery: {
                $name: "可樂果",
                category: "食品"
            },
            productUpdate: {
                name: "乖乖",
                category: "零食"
            }
        }
    }
};

const outputFile = './swagger-output.json';
const routes = ['./app.js'];


swaggerAutogen(outputFile, routes, doc);