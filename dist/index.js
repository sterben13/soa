"use strict";
const GameApp_1 = require('./Apps/GameApp');
const http = require('http');
const express = require('express');
let port = process.env.PORT || 3000;
let app = express();
app.use('/api/v1', GameApp_1.gameApp);
let server = http.createServer(app);
server.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(`Servidor trabjando en el puerto ${port}`);
    }
});
