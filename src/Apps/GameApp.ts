/// <reference path="../../typings/index.d.ts" />
import { Game } from './../Models/crud/gameCrud';
import * as express from 'express';
import * as multer from 'multer';
const uploadGameCover = multer({
    dest: './public/images/game-cover/',
    limits: {
        fileSize: 1000000,
        files: 1
    }
});

export let gameApp: express.Application = express();

gameApp.get('/games', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
    game.findAll().then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    game.close();
});

gameApp.post('/games', uploadGameCover.single('imagen'), (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
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

gameApp.get('/games/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
    game.findById(req.params.id).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    game.close();
});

gameApp.put('/games/:id', uploadGameCover.single('imagen'), (req, res) => {
    if (req.file) 
    req.body.imagen = '/' + req.file.path;
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
    game.update(req.params.id, req.body).then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch((err) => {
        res.send(JSON.stringify({ "message": err }));
    });
    game.close();
});

gameApp.delete('/games/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
    game.delete(req.params.id).then(() => {
        res.send({ 'message': 'eliminado' });
    }).catch((err) => {
        res.send({ "message": err });
    })
    game.close();
});