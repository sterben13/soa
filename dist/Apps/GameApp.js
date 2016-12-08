"use strict";
const gameCrud_1 = require('./../Models/crud/gameCrud');
const express = require('express');
const multer = require('multer');
const uploadGameCover = multer({
    dest: './public/images/game-cover/',
    limits: {
        fileSize: 1000000,
        files: 1
    }
});
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
exports.gameApp.post('/games', uploadGameCover.single('imagen'), (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new gameCrud_1.Game();
    console.log(req.body);
    if (req.file)
        req.body.imagen = '/' + req.file.path;
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
exports.gameApp.put('/games/:id', uploadGameCover.single('imagen'), (req, res) => {
    if (req.file)
        req.body.imagen = '/' + req.file.path;
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
exports.gameApp.get('/games/search/:name', (req, res) => {
    let name = req.params.name;
    let game = new gameCrud_1.Game();
    game.search(name)
        .then((doc) => {
        console.log(doc);
        res.send(doc);
    }).catch((err) => {
        res.send(err);
    });
    game.close();
});
