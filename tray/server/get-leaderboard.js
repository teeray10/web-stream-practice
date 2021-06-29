const { client, dbName } = require('./dbConnection');

async function connect() {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    const collection = db.collection("teams");
    return collection;
}

async function getLeaderboardData() {
    return await connect().then((collection) => {
        return collection.find();
    }).then(async (cursor) => {
        const data = await cursor.toArray();
        console.log(data);
        return data;
    });
}
exports.getLeaderboardData = getLeaderboardData;