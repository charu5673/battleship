
export var orient_flag=false;

document.querySelector(".rotate").addEventListener("click",(e)=>{
    orient_flag=!orient_flag;
    e.target.textContent=(orient_flag)?"Horizontal":"Vertical";
});