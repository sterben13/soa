/// <reference path="../../typings/index.d.ts" />
import { Game } from './../Models/crud/gameCrud';
import * as express from 'express';
import * as bodyParse from 'body-parser';

export let gameApp:express.Application = express();

gameApp.use(bodyParse.json());
gameApp.use(bodyParse.urlencoded({ extended: true }));

gameApp.get('/games',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
    game.findAll().then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    game.close();
});

gameApp.post('/games',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
    game.insert(req.body)
    .then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    game.close();
});

gameApp.get('/games/:id',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
    game.findById(req.params.id).then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    game.close();
});

gameApp.put('/games/:id',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let game = new Game();
    game.update(req.params.id, req.body).then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    game.close();
});

gameApp.delete('/games/:id',(req, res)=>{
    let game = new Game();
    game.delete(req.params.id).then(()=>{
        res.send('eliminado');
    }).catch((err)=>{
        res.send(err);
    })
    game.close();
});