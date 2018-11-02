const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const config = require('config');
const mongoose = require('mongoose'), 
        mongooseBird = require('mongoose-bird')(mongoose);

mongoose.connect(config.get('db'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/api', require('./server/api'));

server.listen(config.get('port'), () => {
  console.log('Running server on localhost:' + config.get('port'));
});