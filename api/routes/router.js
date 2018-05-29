const express = require('express');
// Initialize app
const router = express.Router();
// Load models
let Post = require('../models/post');

router.get('/posts', function (req, res) {
    let posts = Post.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
});

// Load single post view
router.get('/posts/:id', function (req, res) {
    Post.findById(req.params.id, function(err, post){
        res.json(post);
    });
});

// Add post
router.post('/posts/add', function (req, res) {

    let post = new Post();
    post.title = req.body.title;
    post.author = req.body.author;
    post.description = req.body.description;
    post.slug = req.body.slug;

    post.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json({msg: "success"})
        }
    });
});

// Edit post
router.get('/posts/edit/:id', function (req, res) {
    Post.findById(req.params.id, function(err, post){
        res.json(post);
    });
});
// Update post
router.post('/posts/update/:id', function (req, res) {
    let post = {};
    post.title = req.body.title;
    post.author = req.body.author;
    post.description = req.body.description;
    
    let query = { _id: req.params.id }

    Post.update(query, post, function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.json({msg: "success"})
        }
    });
});

module.exports = router;