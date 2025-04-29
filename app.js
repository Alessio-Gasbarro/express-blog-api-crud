//Basic Express.JS start
const express = require('express');
const app = express();
const port = 3000;

//MIDDLEWARES IMPORTED
const notFound = require('./middlewares/notFound.js');
const errorsHandler = require('./middlewares/errorsHandler.js');

app.use(express.static('public'));



//Routing
const postsRouter = require('./routers/posts.js');
app.use('/posts', postsRouter);

//Base Route
app.get('/', (req, res) => {
    res.send('Hello Boolean!');
});

//Registriamo middelware NOTFOUND _SOTTO_ a tutto
app.use(notFound);
//Registriamo middelware ERRORSHANDLER _SOTTO_ a not found
app.use(errorsHandler);

//SET Port listener
app.listen(port, () => {
    console.log(`Server listening to http://localhost:${port}`);
});
