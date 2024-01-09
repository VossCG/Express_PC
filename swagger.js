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
                $stock: 10,
                $category: "食品",
                $imageURL: "https://unsplash.com/photos/a-stylized-image-of-a-person-holding-a-tennis-racquet-0Iuutf928Rk",
                $isOnline: true,
                $isAvailable: false,
                $expiredDate: "2023/12/01",
                $pointValue: 100,
                $pointRequired: 200
            },

        }
    }
};

const outputFile = './swagger-output.json';
const routes = ['./app.js'];


swaggerAutogen(outputFile, routes, doc);