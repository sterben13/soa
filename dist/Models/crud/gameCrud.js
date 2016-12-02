"use strict";
const game_1 = require('./../Schemas/game');
const classCrud_1 = require('./classCrud');
class Game extends classCrud_1.Crud {
    constructor() {
        super('Game', game_1.gameSchema);
    }
}
exports.Game = Game;
class User extends classCrud_1.Crud {
    constructor() {
        super('User', game_1.userSchema);
    }
}
exports.User = User;
class Prestamo extends classCrud_1.Crud {
    constructor() {
        super('Prestamo', game_1.prestamoSchema);
    }
}
exports.Prestamo = Prestamo;
class Copia extends classCrud_1.Crud {
    constructor() {
        super('Copia', game_1.copiaSchema);
    }
}
exports.Copia = Copia;
