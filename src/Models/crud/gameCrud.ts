import { gameSchema } from './../Schemas/game';
import { Crud } from './classCrud';
export class Game extends Crud{
    constructor() {
        super('Game', gameSchema);
    }
}
