import { gameApp } from './Apps/GameApp';
import { userApp } from './Apps/UserApp';
import { prestamoApp } from './Apps/PrestamoApp';
import { copiaApp } from './Apps/CopiaApp';
import * as http from 'http';
import * as express from 'express';

let port:number = process.env.PORT||3000;
let app:express.Application = express();

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