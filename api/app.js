const express = require('express');
// Initialize app
const app = express();
// Set paths
const path = require('path');
// Initialize Body Parser
const bodyParser = require('body-parser');
// Mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean');
let db = mongoose.connection;

const cors = require('cors');

// Public directory path
app.use(express.static(path.join(__dirname, 'public')));

// Check for DB connection
db.once('open', function(){
    console.log("Connected to MongoDB");
});
db.on('error', function(){
    console.log(err);
});
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Switch to json
app.use(bodyParser.json());
// Add Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
// Route files
let posts = require('./routes/router');
app.use('/api', posts);
// Start server
app.listen(3000, function(){
    console.log('Server started at port 3000');
})