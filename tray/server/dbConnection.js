const { MongoClient } = require("mongodb");
const url = "mongodb://root:7473@localhost:27017";
exports.client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
exports.dbName = "panorama-leaderboard";