// Structure DB at application level
let mongoose = require('mongoose');

// Schema
let postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    __v: { 
        type: Number, 
        select: false
    }
});

let Post = module.exports = mongoose.model('Post', postSchema);