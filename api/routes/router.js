const express = require('express');
// Initialize app
const router = express.Router();
// Load models
let Post = require('../models/post');

router.get('/posts', function (req, res) {
    res.send('posts page');
});


module.exports = router;