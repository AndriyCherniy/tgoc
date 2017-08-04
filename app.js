let express = require('express');
let app = express();
let http = require('http');
let mongoose = require('mongoose');
let Strategy = require('passport-local').Strategy;
let db = require('./db');
let users = require('./db/users');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/tgoc", {
    useMongoClient: true
});

console.log(users.findPlayers({username : "Andrmist"}));


app.use(express.static('public'));

app.get('/', (req, res) => {

});





app.listen(3000);