const express = require('express');

const articleRouter = express.Router();

articleRouter.use((req, res, next) => {
    console.log("[IN ARTICLE ROUTER] \t \t something got logged");
    next();
});

articleRouter.get('/article/:id', (req, res) => {
    console.log("[IN ARTICLE ROUTER] \t [GET] \t req.params.id: "+req.params.id);
    res.send(req.params.id);
});

articleRouter.post('/article', (req, res) => {
    console.log("\n req.body:");
    console.log(JSON.stringify(req.body) + "\n");
    console.log("[IN ARTICLE ROUTER] \t [POST] \t ");
    res.send("POST @ /article");
});

articleRouter.get('/test', (req, res) => {
    res.send("You'll never get to me (thanks to Same-Origin Policy)!");
});

module.exports = articleRouter;