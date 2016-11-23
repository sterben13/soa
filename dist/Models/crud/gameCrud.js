"use strict";
const game_1 = require('./../Schemas/game');
const classCrud_1 = require('./classCrud');
class Game extends classCrud_1.Crud {
    constructor() {
        super('Game', game_1.gameSchema);
    }
}
exports.Game = Game;
