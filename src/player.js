import { Gameboard } from "./gameboard.js";

export class Player
{
    constructor(type)
    {
        this.type=type;
        this.gameboard=new Gameboard();
        this.turn=null;
    }
}