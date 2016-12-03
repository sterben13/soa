"use strict";
const gameCrud_1 = require('./../Models/crud/gameCrud');
const express = require('express');
exports.copiaApp = express();
exports.copiaApp.get('/copias', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let copia = new gameCrud_1.Copia();
    copia.findAll().then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    copia.close();
});
exports.copiaApp.post('/copias', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let copia = new gameCrud_1.Copia();
    copia.insert(req.body)
        .then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    copia.close();
});
exports.copiaApp.get('/copias/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let copia = new gameCrud_1.Copia();
    copia.findById(req.params.id).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    copia.close();
});
exports.copiaApp.put('/copias/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let copia = new gameCrud_1.Copia();
    copia.update(req.params.id, req.body).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    copia.close();
});
exports.copiaApp.delete('/copias/:id', (req, res) => {
    let copia = new gameCrud_1.Copia();
    copia.delete(req.params.id).then(() => {
        res.send('eliminado');
    }).catch((err) => {
        res.send(err);
    });
    copia.close();
});
