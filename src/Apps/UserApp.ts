/// <reference path="../../typings/index.d.ts" />
import { User } from './../Models/crud/gameCrud';
import * as express from 'express';
import * as bodyParse from 'body-parser';
import * as multer from 'multer';
const uploadProfilePhoto = multer({
    dest: './public/images/profile-photos/',
    limits: {
        fileSize: 1000000,
        files: 1
    }
});

export let userApp:express.Application = express();

userApp.use(bodyParse.json());
userApp.use(bodyParse.urlencoded({ extended: true }));

userApp.get('/users',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let user = new User();
    user.findAll().then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    user.close();
});

userApp.post('/users', uploadProfilePhoto.single('foto'), (req, res)=>{
    console.log("creando un nuevo user");
    console.log(req.body);
    if (req.file) 
    req.body.foto = '/' + req.file.path;
    res.setHeader('Content-Type', 'application/json');
    let user = new User();
    user.insert(req.body)
    .then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    user.close();
});

userApp.get('/users/:id',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let user = new User();
    user.findById(req.params.id).then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    user.close();
});

userApp.put('/users/:id',(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    let user = new User();
    user.update(req.params.id, req.body).then((doc)=>{
        res.send(JSON.stringify(doc));
    }).catch((err)=>{
        res.send(JSON.stringify({"message":err}));
    });
    user.close();
});

userApp.delete('/users/:id',(req, res)=>{
    let user = new User();
    user.delete(req.params.id).then(()=>{
        res.send('eliminado');
    }).catch((err)=>{
        res.send(err);
    })
    user.close();
});
