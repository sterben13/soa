"use strict";
const gameCrud_1 = require('./../Models/crud/gameCrud');
const express = require('express');
exports.gameApp = express();
exports.gameApp.get('/games', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new gameCrud_1.Game();
    game.findAll().then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    game.close();
});
exports.gameApp.post('/games', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new gameCrud_1.Game();
    game.insert(req.body)
        .then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    game.close();
});
exports.gameApp.get('/games/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new gameCrud_1.Game();
    game.findById(req.params.id).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    game.close();
});
exports.gameApp.put('/games/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new gameCrud_1.Game();
    game.update(req.params.id, req.body).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    game.close();
});
exports.gameApp.delete('/games/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new gameCrud_1.Game();
    game.delete(req.params.id).then(() => {
        res.send({ 'message': 'eliminado' });
    }).catch((err) => {
        res.send({ "message": err });
    });
    game.close();
});
