const express = require('express');
const app = express();
const articleRouter = require('./routes/article.js');
const corsRouter = require('./security/cors.js');

app.use(corsRouter);
app.use(express.json());
app.use(articleRouter);

app.use((req, res, next) => {
    console.log("[IN ROOT ROUTER] \t \t something got logged");
    next();
});

app.listen(3000);