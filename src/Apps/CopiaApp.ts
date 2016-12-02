/// <reference path="../../typings/index.d.ts" />
import { Copia } from './../Models/crud/gameCrud';
import * as express from 'express';
import * as bodyParse from 'body-parser';

export let copiaApp:express.Application = express();

copiaApp.use(bodyParse.json());
copiaApp.use(bodyParse.urlencoded({ extended: true }));

copiaApp.get('/copias',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let copia = new Copia();
    copia.findAll().then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    copia.close();
});

copiaApp.post('/copias',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let copia = new Copia();
    copia.insert(req.body)
    .then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    copia.close();
});

copiaApp.get('/copias/:id',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let copia = new Copia();
    copia.findById(req.params.id).then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    copia.close();
});

copiaApp.put('/copias/:id',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let copia = new Copia();
    copia.update(req.params.id, req.body).then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    copia.close();
});

copiaApp.delete('/copias/:id',(req, res)=>{
    let copia = new Copia();
    copia.delete(req.params.id).then(()=>{
        res.send('eliminado');
    }).catch((err)=>{
        res.send(err);
    })
    copia.close();
});