"use strict";
const GameApp_1 = require('./Apps/GameApp');
const UserApp_1 = require('./Apps/UserApp');
const PrestamoApp_1 = require('./Apps/PrestamoApp');
const CopiaApp_1 = require('./Apps/CopiaApp');
const http = require('http');
const express = require('express');
let port = process.env.PORT || 3000;
let app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/api/v1', GameApp_1.gameApp);
app.use('/api/v1', UserApp_1.userApp);
app.use('/api/v1', PrestamoApp_1.prestamoApp);
app.use('/api/v1', CopiaApp_1.copiaApp);
let server = http.createServer(app);
server.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(`Servidor trabajando en el puerto ${port}`);
    }
});
