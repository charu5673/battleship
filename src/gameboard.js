import {Ship} from './ship.js';

// spaces: -1=empty, 0-9=ship no., 10-19=hit, -2=miss

export class Gameboard
{
    constructor()
    {
        this.spaces=[];
        this.initSpaces();
        this.shipCoords=[[],[],[],[],[],[],[],[],[],[]];
        this.sunkCount=0;
        this.ships=[];
    }
    initSpaces()
    {
        for(var i=0;i<=9;i++)
        {
            this.spaces[i]=[];
            for(var j=0;j<=9;j++)
            {
                this.spaces[i].push(-1);
            }
        }
    }
    placeShip(length,angle,x,y,name)
    {
        if(angle!="vertical")
        {
            if(y+length-1<=9&&(y>=0&&y<=9)&&(x>=0&&x<=9))
            {
                var i,flag=true;
                let count=this.ships.length;
                for(i=y;i<y+length;i++)
                {
                    if(this.spaces[x][i]!=-1)
                    {
                        flag=false;
                        break;
                    }
                }
                if(!flag)
                    return false;
                this.ships.push(new Ship(length,name));
                for(i=y;i<y+length;i++)
                    {
                        this.spaces[x][i]=count;
                        this.shipCoords[count].push([x,i]);
                        this.ships[count].coords.push([x,i]);
                    }
                    return true;
            }
        }
        else
            {
                if(x+length-1<=9&&(y>=0&&y<=9)&&(x>=0&&x<=9))
                {
                    var i,flag=true;
                    let count=this.ships.length;
                    for(i=x;i<x+length;i++)
                    {
                        if(this.spaces[i][y]!=-1)
                        {
                            flag=false;
                            break;
                        }
                    }
                    if(!flag)
                        return false;
                    this.ships.push(new Ship(length,name));
                    for(i=x;i<x+length;i++)
                        {
                            this.spaces[i][y]=count;
                            this.shipCoords[count].push([i,y]);
                            this.ships[count].coords.push([i,y]);
                        }
                        return true;
                }
            }
    }
    removeShip(length,angle,x,y,name)
    {
                let count;
                for(i=0;i<10;i++)
                {
                    if(this.shipCoords[i].length==0)
                        continue;
                    if(this.shipCoords[i][0][0]==x&&this.shipCoords[i][0][1]==y)
                        break;
                }
                count=i;
        if(angle!="vertical")
        {
            if(y+length-1<=9&&(y>=0&&y<=9)&&(x>=0&&x<=9))
            {
                var i;
                for(i=y;i<y+length;i++)
                    {
                        this.spaces[x][i]=-1;
                    }
                    this.shipCoords[count]=[];
                    this.ships.splice(1,count);
                    return true;
            }
            return false;
        }
        else
            {
                    if(x+length-1<=9&&(y>=0&&y<=9)&&(x>=0&&x<=9))
                        {
                            var i;
                            for(i=x;i<x+length;i++)
                                {
                                    this.spaces[i][y]=-1;
                                }
                                this.shipCoords[count]=[];
                                this.ships.splice(1,count);
                                return true;
                        }
                        return false;
            }
    }
    receiveAttack(x,y)
    {
        let val=this.spaces[x][y];
        if(val==-1)
        {
            this.spaces[x][y]=-2;
            return 'miss';
        }
        if(val==-2||val>=10&&val<=19)
        {
            return null;
        }
        if(val>=0&&val<=9)
        {
            this.ships[val].hit();
            this.spaces[x][y]=val+10;
            if(this.ships[val].isSunk())
            {
                this.sunkCount=this.sunkCount+1;
                return 'sunk';
            }
            return 'hit';
        }
    }
    allSunk()
    {
        if(this.sunkCount>=10)
            return true;
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