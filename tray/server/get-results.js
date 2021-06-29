const { client, dbName } = require('./dbConnection');
let db;

async function connect() {
    await client.connect();
    console.log("Successfully connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection('results');

    return collection;
}

async function getResults() {
    return await connect().then((collection) => {
        return collection.find().sort({"date": -1, "time": 1});
    }).then(async (cursor) => {
        const results = await cursor.toArray();
        return results;
    })
}

exports.getResults = getResults;