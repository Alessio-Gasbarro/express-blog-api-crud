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
    const id = posts[posts.length - 1].id + 1;

    const { title, content, image, tags } = req.body;

    const newPost = { id, title, content, image, tags};

    post.push(newPost);

    console.log(posts);
    res.status(201).json({
        success: true,
        data: newPost
    })
}

//UPDATE
const update = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(element => element.id === id);
    if(!post){
        return res.status(404).json({
            success: false,
            error: '404 NOT FOUND',
            message: `Post with id ${id} not found!`
        });
    }

    const {title, content, image, tags} = req.body;
    post.title = title;
    post.content = content;
    post.image = image;
    post.tags = tags;

    console.log(posts);
    res.status(200).json({
        success: true,
        data: post
    });
};

//MODIFY
const modify = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(element => element.id === id);
    if(!post){
        return res.status(401).json({
            success: false,
            error: '404 Not Found',
            message: `Post with id ${id} not found!`
        });
    }

    const {title, content, image, tags} = req.body;

    if(title) post.title = title;
    if(content) post.content = content;
    if(image) post.image = image;
    if(tags) post.tags = tags;

    console.log(posts);
    res.status(200).json({
        success: true,
        data: post
    });
}

//DELETE
const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(element => element.id === id);

    if(!post){
        res.status(404).json({
            success: false,
            error: '404 Not Found',
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