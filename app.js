const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => {
    console.log('Servidor en ejecucion');
});s

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './gatito.jpg'));
});

app.get('/babbage', function(req, res){
    res.sendFile(path.resolve(__dirname, './gatito.jpg'));
});

app.get('/berners-lee', function(req, res){
    res.sendFile(path.resolve(__dirname, './gatito.jpg'));
});

app.get('/clarke', function(req, res){
    res.sendFile(path.resolve(__dirname, './gatito.jpg'));
});

app.get('/hamilton', function(req, res){
    res.sendFile(path.resolve(__dirname, './gatito.jpg'));
});

app.get('/hopper', function(req, res){
    res.sendFile(path.resolve(__dirname, './gatito.jpg'));
});

app.get('/lovelace', function(req, res){
    res.sendFile(path.resolve(__dirname, './gatito.jpg'));
});

app.get('/turing', function(req, res){
    res.sendFile(path.resolve(__dirname, './gatito.jpg'));
});