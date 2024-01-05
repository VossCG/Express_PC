const { ObjectId } = require('mongodb')
const DB = require('../libs/db')

exports.list = async (collection, query = {}) => {
    const find = await DB[collection].find(query).toArray()
    return find
}

exports.find = async (collection, query = {}) => {
    if (query._id && typeof query._id != "object") {
        query._id = new ObjectId(query._id);
    }
    let find = await DB[collection].findOne(query);
    return find
}

exports.insert = async (collection, data) => {
    if (Array.isArray(data)) {
        let bulk = DB[collection].initializeUnorderedBulkOp();
        data.forEach((row) => {
            bulk.insert(row);
        });
        try {
            await bulk.execute();
        } catch (error) { }
    } else {
        await DB[collection].insertOne(data);
    }
};

exports.update = async (collection, query, data, upsert = false) => {
    if (query._id && typeof query._id != "object") {
        query._id = new ObjectId(query._id);
        delete data._id;
    }
    return await DB[collection].updateOne(query, { $set: data }, { upsert });
};


exports.delete = async (collection, query) => {
    if (query._id && typeof query._id != "object") {
        query._id = new ObjectId(query._id);
    }
    await DB[collection].deleteMany(query);
};
