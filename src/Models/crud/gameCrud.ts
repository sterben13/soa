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
}


export class Copia extends Crud {
    constructor() {
        super('Copia', copiaSchema);
    }
}