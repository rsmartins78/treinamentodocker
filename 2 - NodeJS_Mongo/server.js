const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/nodeapi', 
    { useNewUrlParser: true }
);
requireDir(__dirname + '/src/models');

// Rotas
app.use('/api', require( __dirname + '/src/routes'));
app.use(express.static(__dirname + '/public'));

app.listen(3001);