"use strict";
const gameCrud_1 = require('./../Models/crud/gameCrud');
const express = require('express');
const bodyParse = require('body-parser');
exports.prestamoApp = express();
exports.prestamoApp.use(bodyParse.json());
exports.prestamoApp.use(bodyParse.urlencoded({ extended: true }));
exports.prestamoApp.get('/prestamos', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let prestamo = new gameCrud_1.Prestamo();
    prestamo.findAll().then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    prestamo.close();
});
exports.prestamoApp.post('/prestamos', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let prestamo = new gameCrud_1.Prestamo();
    prestamo.insert(req.body)
        .then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    prestamo.close();
});
exports.prestamoApp.get('/prestamos/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let prestamo = new gameCrud_1.Prestamo();
    prestamo.findById(req.params.id).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    prestamo.close();
});
exports.prestamoApp.put('/prestamos/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let prestamo = new gameCrud_1.Prestamo();
    prestamo.update(req.params.id, req.body).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    prestamo.close();
});
exports.prestamoApp.delete('/prestamos/:id', (req, res) => {
    let prestamo = new gameCrud_1.Prestamo();
    prestamo.delete(req.params.id).then(() => {
        res.send('eliminado');
    }).catch((err) => {
        res.send(err);
    });
    prestamo.close();
});
