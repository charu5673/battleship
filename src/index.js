import './style.css';
import carrier_png from './assets/pngs/carrier.png';
import carrier_h_1 from './assets/pngs/carrier_horizontal_1.png';
import carrier_h_2 from './assets/pngs/carrier_horizontal_2.png';
import carrier_h_3 from './assets/pngs/carrier_horizontal_3.png';
import carrier_h_4 from './assets/pngs/carrier_horizontal_4.png';
import carrier_h_5 from './assets/pngs/carrier_horizontal_5.png';
import carrier_v_1 from './assets/pngs/carrier_vertical_1.png';
import carrier_v_2 from './assets/pngs/carrier_vertical_2.png';
import carrier_v_3 from './assets/pngs/carrier_vertical_3.png';
import carrier_v_4 from './assets/pngs/carrier_vertical_4.png';
import carrier_v_5 from './assets/pngs/carrier_vertical_5.png';
import battleship_png from './assets/pngs/battleship.png';
import battleship_h_1 from './assets/pngs/battleship_horizontal_1.png';
import battleship_h_2 from './assets/pngs/battleship_horizontal_2.png';
import battleship_h_3 from './assets/pngs/battleship_horizontal_3.png';
import battleship_h_4 from './assets/pngs/battleship_horizontal_4.png';
import battleship_v_1 from './assets/pngs/battleship_vertical_1.png';
import battleship_v_2 from './assets/pngs/battleship_vertical_2.png';
import battleship_v_3 from './assets/pngs/battleship_vertical_3.png';
import battleship_v_4 from './assets/pngs/battleship_vertical_4.png';
import cruiser_png from './assets/pngs/cruiser.png';
import cruiser_h_1 from './assets/pngs/cruiser_horizontal_1.png';
import cruiser_h_2 from './assets/pngs/cruiser_horizontal_2.png';
import cruiser_h_3 from './assets/pngs/cruiser_horizontal_3.png';
import cruiser_v_1 from './assets/pngs/cruiser_vertical_1.png';
import cruiser_v_2 from './assets/pngs/cruiser_vertical_2.png';
import cruiser_v_3 from './assets/pngs/cruiser_vertical_3.png';
import submarine_png from './assets/pngs/submarine.png';
import submarine_h_1 from './assets/pngs/submarine_horizontal_1.png';
import submarine_h_2 from './assets/pngs/submarine_horizontal_2.png';
import submarine_h_3 from './assets/pngs/submarine_horizontal_3.png';
import submarine_v_1 from './assets/pngs/submarine_vertical_1.png';
import submarine_v_2 from './assets/pngs/submarine_vertical_2.png';
import submarine_v_3 from './assets/pngs/submarine_vertical_3.png';
import destroyer_png from './assets/pngs/destroyer.png';
import destroyer_h_1 from './assets/pngs/destroyer_horizontal_1.png';
import destroyer_h_2 from './assets/pngs/destroyer_horizontal_2.png';
import destroyer_v_1 from './assets/pngs/destroyer_vertical_1.png';
import destroyer_v_2 from './assets/pngs/destroyer_vertical_2.png';
import {orient_flag} from './events.js';
import {Player} from './player.js';
import { Gameboard } from './gameboard.js';

var ship_names=["carrier","battleship","cruiser","submarine","destroyer"];
var ship_pngs=[carrier_png,battleship_png,cruiser_png,submarine_png,destroyer_png];
var ship_lengths=[5,4,3,3,2];
var ship_h_pngs=[];
var ship_v_pngs=[];
var gameStart=false;
var lastDragged;
var player1,player2;
var shipCount=[1,2,1,2,4];
var shipIds=[[1],[1,2],[1],[1,2],[1,2,3,4]];
player1=new Player("human");

function initForNewGame()
{
    lastDragged=null;
    player1=new Player("human");
    player2=null;
    shipCount=[1,2,1,2,4];
    document.querySelectorAll(".select").forEach(i=>{
        i.hidden=false;
    });
    shipIds=[[1],[1,2],[1],[1,2],[1,2,3,4]];
}

document.querySelector("#startgame").addEventListener("click",(e)=>{
    if(player1.gameboard.ships.length==10)
    {
        document.querySelector(".optionDialog").showModal();
    }
});

function initShipsOrienPNGs()
{
    ship_h_pngs[0]=[carrier_h_1,carrier_h_2,carrier_h_3,carrier_h_4,carrier_h_5];
    ship_h_pngs[1]=[battleship_h_1,battleship_h_2,battleship_h_3,battleship_h_4];
    ship_h_pngs[2]=[cruiser_h_1,cruiser_h_2,cruiser_h_3];
    ship_h_pngs[3]=[submarine_h_1,submarine_h_2,submarine_h_3];
    ship_h_pngs[4]=[destroyer_h_1,destroyer_h_2];
    ship_v_pngs[0]=[carrier_v_1,carrier_v_2,carrier_v_3,carrier_v_4,carrier_v_5];
    ship_v_pngs[1]=[battleship_v_1,battleship_v_2,battleship_v_3,battleship_v_4];
    ship_v_pngs[2]=[cruiser_v_1,cruiser_v_2,cruiser_v_3];
    ship_v_pngs[3]=[submarine_v_1,submarine_v_2,submarine_v_3];
    ship_v_pngs[4]=[destroyer_v_1,destroyer_v_2];
}
initShipsOrienPNGs();

document.addEventListener("dragstart",function(event){
    lastDragged=event.target;
});

function allowDrop(e)
{
    if(lastDragged.classList.contains("select"))
        e.preventDefault();
}

function addShip(e)
{
    e.preventDefault();
    if(e.target.classList.contains("cp"))
    {
        let box=e.target;
        let index_i=parseInt(box.classList[2].charAt(1));
        let index_j=parseInt(box.classList[2].charAt(3));
        let ans=player1.gameboard.placeShip(parseInt(lastDragged.id),(!orient_flag)?"horizontal":"vertical",index_i,index_j,lastDragged.classList[0]);
        if(ans)
        {
            let name=lastDragged.classList[0];
            let orien=(!orient_flag)?"horizontal":"vertical";
            if(orien=="horizontal")
            {
                let cid=shipIds[ship_names.indexOf(name)].pop();
                for(let i=1;i<=parseInt(lastDragged.id);i++)
                {
                    let img=new Image();
                    img.className=name;
                    img.classList.add("no"+i,"horizontal","id"+cid);
                    img.src=ship_h_pngs[ship_names.indexOf(name)][i-1];
                    box=document.querySelector(".i"+index_i+"j"+(index_j+i-1));
                    img.style.height="54px";
                    img.style.width="54px";
                    img.addEventListener("click",(e)=>{
                        if(!gameStart)
                        {
                            let n=e.target.classList[0];
                            let id=e.target.classList[3];
                            let f=document.querySelector(".no1."+n+"."+id);
                            player1.gameboard.removeShip(ship_lengths[ship_names.indexOf(n)],e.target.classList[2],parseInt(f.parentElement.classList[2].charAt(1)),parseInt(f.parentElement.classList[2].charAt(3)),n);
                            document.querySelectorAll("."+n+".horizontal."+id).forEach(i=>{
                                i.remove();
                            });
                            let ind=ship_names.indexOf(n);
                            shipCount[ind]=shipCount[ind]+1;
                            if(shipCount[ind]==1)
                            {
                                document.querySelector("."+n+".select").hidden=false;
                            }
                            shipIds[ind].push(parseInt(id.charAt(2)));
                        }
                    });
                    box.appendChild(img);
                }
            }
            else
                {
                    let cid=shipIds[ship_names.indexOf(name)].pop();
                    for(let i=1;i<=parseInt(lastDragged.id);i++)
                    {
                        let img=new Image();
                        img.className=name;
                        img.classList.add("no"+i,"vertical","id"+cid);
                        img.src=ship_v_pngs[ship_names.indexOf(name)][i-1];
                        box=document.querySelector(".i"+(index_i+i-1)+"j"+index_j);
                        img.style.height="54px";
                        img.style.width="54px";
                        img.addEventListener("click",(e)=>{
                            if(!gameStart)
                            {
                                let n=e.target.classList[0];
                                let id=e.target.classList[3];
                                let f=document.querySelector(".no1."+n+"."+id);
                                player1.gameboard.removeShip(ship_lengths[ship_names.indexOf(n)],e.target.classList[2],parseInt(f.parentElement.classList[2].charAt(1)),parseInt(f.parentElement.classList[2].charAt(3)),n);
                                document.querySelectorAll("."+n+".vertical."+id).forEach(i=>{
                                    i.remove();
                                });
                                let ind=ship_names.indexOf(n);
                                shipCount[ind]=shipCount[ind]+1;
                                if(shipCount[ind]==1)
                                {
                                    document.querySelector("."+n+".select").hidden=false;
                                }
                                shipIds[ind].push(parseInt(id.charAt(2)));
                            }
                        });
                        box.appendChild(img);
                    }
                }
            let ind=ship_names.indexOf(name);
            shipCount[ind]=shipCount[ind]-1;
            if(shipCount[ind]==0)
            {
                document.querySelector("."+name+".select").hidden=true;
            }
        }
    }
}

document.querySelector(".randomize").addEventListener("click",e=>{
    if(!gameStart)
    {
        player1=new Player("human");
        player1.gameboard=randomPlacement();
        displayShips(player1.gameboard);
    }
});

function initDragDrop()
{
    let squares=document.querySelectorAll(".grid_square");
    for(let i=0;i<squares.length;i++)
    {
        squares[i].ondragover=allowDrop;
        squares[i].ondrop=addShip;
    }
    let ships=document.querySelectorAll(".select");
    for(let i=0;i<ships.length;i++)
    {
        ships[i].draggable=true;
    }
}

initDragDrop();

function initSelectMenu()
{
    for(var i=0;i<5;i++)
    {
        var q="."+ship_names[i];
        let img=ship_pngs[i];
        document.querySelector(q).src=img;
    }
}

initSelectMenu();

function randomPlacement()
{
    let gb=new Gameboard();
    let lengths=[5,4,4,3,3,3,2,2,2,2];
    let ships=["Carrier","Battleship","Battleship","Cruiser","Submarine","Submarine","Destroyer","Destroyer","Destroyer","Destroyer"];
    let c=0;
    while(gb.ships.length!=10)
    {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        let a =Math.floor(Math.random() * 100);
        if(a<50)
            a="horizontal";
        else
            a="vertical";
        let f=gb.placeShip(lengths[c],a,i,j,ships[c]);
        if(f)
            c++;
    }
    return gb;
}

function displayShips(gb)
{
    resetGameBoard();
    for(let i=0;i<10;i++)
    {
        if(gb.shipCoords[i][1][1]==gb.shipCoords[i][0][1]+1)
        {
            let cid=shipIds[ship_names.indexOf((gb.ships[i].name).toLowerCase())].pop();
            for(let j=0;j<gb.ships[i].length;j++)
            {
                let box=document.querySelector(".i"+gb.shipCoords[i][j][0]+"j"+gb.shipCoords[i][j][1]);
                let img=new Image();
                img.className=gb.ships[i].name;
                img.classList.add("no"+(j+1),"horizontal","id"+cid);
                img.src=ship_h_pngs[ship_names.indexOf((gb.ships[i].name).toLowerCase())][j];
                img.style.height="54px";
                img.style.width="54px";
                img.addEventListener("click",(e)=>{
                    if(!gameStart)
                    {
                        let n=e.target.classList[0];
                        let id=e.target.classList[3];
                        let f=document.querySelector(".no1."+n+"."+id);
                        player1.gameboard.removeShip(ship_lengths[ship_names.indexOf(n)],e.target.classList[2],parseInt(f.parentElement.classList[2].charAt(1)),parseInt(f.parentElement.classList[2].charAt(3)),n);
                        document.querySelectorAll("."+n+".horizontal."+id).forEach(i=>{
                            i.remove();
                        });
                        let ind=ship_names.indexOf(n);
                        shipCount[ind]=shipCount[ind]+1;
                        if(shipCount[ind]==1)
                        {
                            document.querySelector("."+n+".select").hidden=false;
                        }
                        shipIds[ind].push(parseInt(id.charAt(2)));
                    }
                });
                box.appendChild(img);
            }
        }
        else
        {
            let cid=shipIds[ship_names.indexOf((gb.ships[i].name).toLowerCase())].pop();
            for(let j=0;j<gb.ships[i].length;j++)
            {
                let box=document.querySelector(".i"+gb.shipCoords[i][j][0]+"j"+gb.shipCoords[i][j][1]);
                let img=new Image();
                img.className=gb.ships[i].name;
                img.classList.add("no"+(j+1),"vertical","id"+cid);
                img.src=ship_v_pngs[ship_names.indexOf((gb.ships[i].name).toLowerCase())][j];
                img.style.height="54px";
                img.style.width="54px";
                img.addEventListener("click",(e)=>{
                    if(!gameStart)
                        {
                            let n=e.target.classList[0];
                            let id=e.target.classList[3];
                            let f=document.querySelector(".no1."+n+"."+id);
                            player1.gameboard.removeShip(ship_lengths[ship_names.indexOf(n)],e.target.classList[2],parseInt(f.parentElement.classList[2].charAt(1)),parseInt(f.parentElement.classList[2].charAt(3)),n);
                            document.querySelectorAll("."+n+".vertical."+id).forEach(i=>{
                                i.remove();
                            });
                            let ind=ship_names.indexOf(n);
                            shipCount[ind]=shipCount[ind]+1;
                            if(shipCount[ind]==1)
                            {
                                document.querySelector("."+n+".select").hidden=false;
                            }
                            shipIds[ind].push(parseInt(id.charAt(2)));
                        }
                });
                box.appendChild(img);
            }
        }
    }
}

function resetGameBoard()
{
    document.querySelectorAll("img").forEach(i=>{
        if(i.classList.contains("select"))
        {
            i.hidden=true;
        }
        else
        i.remove();
    });
}

document.querySelector("#hidemodal").addEventListener("click",e=>{
    document.querySelector("dialog").close();
});