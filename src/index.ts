import { gameApp } from './Apps/GameApp';
import * as http from 'http';
import * as express from 'express';

let port:number = process.env.PORT||3000;
let app:express.Application = express();

app.use('/api/v1', gameApp);

let server = http.createServer(app);
server.listen(port, (err:Error)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(`Servidor trabjando en el puerto ${port}`);
    }
});