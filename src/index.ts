import { gameApp } from './Apps/GameApp';
import { userApp } from './Apps/UserApp';
import { prestamoApp } from './Apps/PrestamoApp';
import { copiaApp } from './Apps/CopiaApp';
import * as http from 'http';
import * as express from 'express';

let port:number = process.env.PORT||3000;
let app:express.Application = express();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api/v1', gameApp);
app.use('/api/v1', userApp);
app.use('/api/v1', prestamoApp);
app.use('/api/v1', copiaApp);

let server = http.createServer(app);
server.listen(port, (err:Error)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(`Servidor trabajando en el puerto ${port}`);
    }
});