/// <reference path="../../typings/index.d.ts" />
import { Copia } from './../Models/crud/gameCrud';
import * as express from 'express';

export let copiaApp:express.Application = express();

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
    console.log(req.body);
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

copiaApp.get('/copias/all/:id',(req, res)=>{
    let copia = new Copia();
    copia.model
    .find({"idGame": req.params.id})
    .then((data)=>{
        res.send(data);
        console.log(data);
    }).catch((err:Error)=>{
        res.send({message:err});
    });
    copia.close();
});

copiaApp.get('/copias/search/:name',(req, res)=>{
    let name = req.params.name;
    let copy = new Copia();
    copy.search(name)
    .then((doc)=>{
        console.log(doc);
        res.send(doc);
    }).catch((err)=>{
        res.send(err);
    });
    copy.close();
});

