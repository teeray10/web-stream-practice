const { MongoClient } = require("mongodb");
const { Teams } = require('./dummyData.js');
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://teeray:7473tRAY@cluster0.z0wdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "panorama-leaderboard";
console.log(Teams);               
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const col = db.collection("teams");
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(Teams);
         // Find one document
        //  const myDoc = await col.findOne();
        //  // Print to the console
        //  console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);