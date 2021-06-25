const path = require('path');
const express = require('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const serveHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, "../web/html/index.html"));
}

const serveDummyData = (req, res) => {
    res.sendFile(path.join(__dirname, "../web/js/dummyData.js"));
}

const serveLeaderboardTable = (req, res) => {
    res.sendFile(path.join(__dirname, "../web/js/custom-elements/leaderboard-table/leaderboard-table.js"));
}

const serveResultsTable = (req, res) => {
    res.sendFile(path.join(__dirname, "../web/js/custom-elements/recent-results/recent-results-table.js"));
}

const serveLeaderboardStylesheet = (req, res) => {
    res.sendFile(path.join(__dirname, "../web/js/custom-elements/leaderboard-table/leaderboard-table.css"));
}

const serveResultsData = (req, res) => {
    res.sendFile(path.join(__dirname, "../web/js/custom-elements/recent-results/all-results-data.js"));
}

const serveStylesheet = (req, res) => {
    res.sendFile(path.join(__dirname, "../web/css/styles.css"));
}

const serveResultsStylesheet = (req, res) => {
    res.sendFile(path.join(__dirname, "../web/js/custom-elements/recent-results/recent-results.css"));
}
app.get("/", serveHomePage);
app.get("/web/js/dummyData.js", serveDummyData);
app.get("/web/js/custom-elements/leaderboard-table/leaderboard-table.js", serveLeaderboardTable);
app.get("/web/js/custom-elements/leaderboard-table/leaderboard-table.css", serveLeaderboardStylesheet);
app.get("/web/js/custom-elements/recent-results/recent-results-table.js", serveResultsTable);
app.get("/web/js/custom-elements/recent-results/recent-results.css", serveResultsStylesheet);
app.get("/web/js/custom-elements/recent-results/all-results-data.js", serveResultsData);
app.get("/web/css/styles.css", serveStylesheet);

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});