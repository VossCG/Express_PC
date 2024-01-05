const { MongoClient } = require("mongodb");
const mongodash = require("mongodash");

let DB = {};

(async () => {
    await mongodash.init({
        mongoClient: new MongoClient(process.env.MONGODB, {
            useUnifiedTopology: true,
            maxPoolSize: 10
        }),
        autoConnect: true,
    });
    const client = mongodash.getMongoClient()

    DB.machines = client.db('claw').collection('machines')
    DB.product = client.db('claw').collection('products')
    DB.transaction = client.db('claw').collection('transaction')
})();

module.exports = DB

