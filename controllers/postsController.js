//IMPORTING ARRAY FROM PREVIOUS DATA
const posts = require ('../data/posts.js');

//INDEX
const index = (req, res) => {
    // if query is passed in the request, return the post with that id
    const id = parseInt(req.query.id);
    if(id){
        const post = posts.find(element => element.id === id);

        // if post is not found, return 404 error
        if(!post){
            res.status(404).json({
                success: false,
                error: '404 Not Found',
                message: `Post with id ${id} not found`
            });
        }
        else{
            res.json({
                success: true,
                data: post
            });
        }
    }
    else{
        res.json({
            success: true,
            data: posts
        });
    }
};

//SHOW
const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(element => element.id === id);

    if(!post){
        res.status(404).json({
            success: false,
            error: '404 NOT FOUND',
            message: `Post with id ${id} not found`
        })
    }
    else{
        res.json({
            success: true,
            data: post
        });
    }
};

//STORE
const store = (req, res) => {
    let id = 1;
    while(posts.find(element => element.id === id)){
        id++;
    }
    const post = {
        id: id,
        title: req.query.title,
        content: 'Descrizione random bla bla bla',
        image: '/placeholder.png',
        tags: ['placeholder']
    };
    posts.push(post);
    posts.sort((a, b) => a.id - b.id);
    console.log(posts);
    res.status(201).json({
        success: true,
        data: post
    });
};

//UPDATE
const update = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Post con id ${id} aggiornato con successo.`);
}

//MODIFY
const modify = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Post con id ${id} modificato con successo.`);
}

//DELETE
const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(element => element.id === id);
    if(!post){
        res.status(404).json({
            success: false,
            error: '404 NOT FOUND',
            message: `Post with id ${id} not found`
        });
    }
    else{
        const index = posts.indexOf(post);
        posts.splice(index, 1);
        console.log(posts);
        res.sendStatus(204);
    }
};

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};