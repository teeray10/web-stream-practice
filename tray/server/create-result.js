const { client, dbName } = require('./dbConnection');
const { updateTeams } = require('./update-teams');

async function connect() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         const collection = db.collection("results");
         return collection;

        } catch (err) {
         console.log(err.stack);
     }
}

async function createResult(result) {
    try {
        const promise = connect();
        await promise.then((collection) => {
            collection.insertOne(result);
            updateTeams(result).catch(console.dir);
        });
    } catch(err) {
        console.log(err.stack);
    }
}

exports.createResult = createResult;