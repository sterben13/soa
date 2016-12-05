import { gameApp } from './Apps/GameApp';
import { userApp } from './Apps/UserApp';
import { prestamoApp } from './Apps/PrestamoApp';
import { copiaApp } from './Apps/CopiaApp';
import * as http from 'http';
import * as express from 'express';
import * as bodyParse from 'body-parser';

let port:number = process.env.PORT||3001;
let app:express.Application = express();

app.use('/public',express.static('/var/www/html/proyecto/public'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

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