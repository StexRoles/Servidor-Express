const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => {
    console.log('Servidor en ejecucion');
});

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './DH-HEROES/views/index.html'));
});

app.get('/babbage', function(req, res){
    res.sendFile(path.resolve(__dirname, './DH-HEROES/views/babbage.html'));
});

app.get('/berners-lee', function(req, res){
    res.sendFile(path.resolve(__dirname, './DH-HEROES/views/berners-lee.html'));
});

app.get('/clarke', function(req, res){
    res.sendFile(path.resolve(__dirname, './DH-HEROES/views/clarke.html'));
});

app.get('/hamilton', function(req, res){
    res.sendFile(path.resolve(__dirname, './DH-HEROES/views/hamilton.html'));
});

app.get('/hopper', function(req, res){
    res.sendFile(path.resolve(__dirname, './DH-HEROES/views/hopper.html'));
});

app.get('/lovelace', function(req, res){
    res.sendFile(path.resolve(__dirname, './DH-HEROES/views/lovelace.html'));
});

app.get('/turing', function(req, res){
    res.sendFile(path.resolve(__dirname, './DH-HEROES/views/turing.html'));
});