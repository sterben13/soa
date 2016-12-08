import { gameSchema, userSchema, prestamoSchema, copiaSchema } from './../Schemas/game';
import { Crud } from './classCrud';

export class Game extends Crud{
    constructor() {
        super('Game', gameSchema);
    }
}

export class User extends Crud {
    constructor() {
        super('User', userSchema);
    }
}


export class Prestamo extends Crud {
    constructor() {
        super('Prestamo', prestamoSchema);
    }

    prestamosByUser(id:string){
        return new Promise((resolve, reject)=>{
            this.model.find({idUser:id})
            .then((doc)=>{
                resolve(doc);
            })
            .catch((err)=>{
                reject(err);
            });
        });
    }
}


export class Copia extends Crud {
    constructor() {
        super('Copia', copiaSchema);
    }
}