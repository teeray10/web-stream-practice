const express = require('express');
const cors = require('cors');

const corsRouter = express.Router(); 

// const config = {
//     origin: 
//     // [
//         'http://localhost:3000'
//     // , 'http://127.0.0.1:3000']
// }

corsRouter.get('/article/:id', cors());
corsRouter.options('/article', cors()); 
corsRouter.post('/article', cors());
// corsRouter.use(cors());

module.exports = corsRouter;