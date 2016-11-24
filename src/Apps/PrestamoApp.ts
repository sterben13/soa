/// <reference path="../../typings/index.d.ts" />
import { Prestamo } from './../Models/crud/gameCrud';
import * as express from 'express';
import * as bodyParse from 'body-parser';

export let prestamoApp:express.Application = express();

prestamoApp.use(bodyParse.json());
prestamoApp.use(bodyParse.urlencoded({ extended: true }));

prestamoApp.get('/prestamos',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let prestamo = new Prestamo();
    prestamo.findAll().then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    prestamo.close();
});

prestamoApp.post('/prestamos',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let prestamo = new Prestamo();
    prestamo.insert(req.body)
    .then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    prestamo.close();
});

prestamoApp.get('/prestamos/:id',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let prestamo = new Prestamo();
    prestamo.findById(req.params.id).then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    prestamo.close();
});

prestamoApp.put('/prestamos/:id',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let prestamo = new Prestamo();
    prestamo.update(req.params.id, req.body).then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    prestamo.close();
});

prestamoApp.delete('/prestamos/:id',(req, res)=>{
    let prestamo = new Prestamo();
    prestamo.delete(req.params.id).then(()=>{
        res.send('eliminado');
    }).catch((err)=>{
        res.send(err);
    })
    prestamo.close();
});