const { client, dbName } = require('./dbConnection');

async function connect() {
    await client.connect();
    console.log("Connected to db");
    const db = client.db(dbName);
    const collection = db.collection("teams");

    return collection;
}

async function addTeam(team) {
    try {
        const promise = connect();
        await promise.then((collection) => {
          collection.insertOne(team);
        });
    } catch (err) {}   
}

exports.addTeam = addTeam;