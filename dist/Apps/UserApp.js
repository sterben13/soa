"use strict";
const gameCrud_1 = require('./../Models/crud/gameCrud');
const express = require('express');
const bodyParse = require('body-parser');
exports.userApp = express();
exports.userApp.use(bodyParse.json());
exports.userApp.use(bodyParse.urlencoded({ extended: true }));
exports.userApp.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let user = new gameCrud_1.User();
    user.findAll().then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    user.close();
});
exports.userApp.post('/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let user = new gameCrud_1.User();
    user.insert(req.body)
        .then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    user.close();
});
exports.userApp.get('/users/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let user = new gameCrud_1.User();
    user.findById(req.params.id).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    user.close();
});
exports.userApp.put('/users/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let user = new gameCrud_1.User();
    user.update(req.params.id, req.body).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    user.close();
});
exports.userApp.delete('/users/:id', (req, res) => {
    let user = new gameCrud_1.User();
    user.delete(req.params.id).then(() => {
        res.send('eliminado');
    }).catch((err) => {
        res.send(err);
    });
    user.close();
});
