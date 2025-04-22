//Basic Express.JS start
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));

//Routing
const postsRouter = require('./routers/posts.js');
app.use('/posts', postsRouter);

//Base Route
app.get('/', (req, res) => {
    res.send('Hello Boolean!');
});

//SET Port listener
app.listen(port, () => {
    console.log(`Server listening to http://localhost:${port}`);
});
