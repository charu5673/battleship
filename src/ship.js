export class Ship
{
    constructor(length,name)
    {
        this.length=length;
        this.hits=0;
        this.sunk=false;
        this.name=name;
        this.coords=[];
    }
    hit()
    {
        this.hits=this.hits+1;
        this.isSunk();
    }
    isSunk()
    {
        if(this.hits>=this.length)
        {
            this.sunk=true;
            return true;
        }
        return false;
    }
}

/*

ships info

0 carrier - amount 1 - size 5

1 battleship - amount 2 - size 4

2 submarine - amount 2 - size 3

3 cruiser - amount 1 - size 3

4 destroyer - amount 4 - size 2

*/