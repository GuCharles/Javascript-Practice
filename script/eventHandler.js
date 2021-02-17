const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext('2d');

const colorOf = document.getElementById(`colorOf`);
const pixelOf = document.getElementById(`pixelOf`);

let ball = {
    x : 0,
    y : 0,
    size : 0,
    color : "#FFFFFF"
};

function onClick(e){
    ball.x = e.offsetX;
    ball.y = e.offsetY;
    onDraw();
}

ctx.fillStyle = "#000";
ctx.fillRect(0,0,canvas.width-1,canvas.height-1);

document.getElementById(`submit`).onclick = (e)=>{
    ball.size = pixelOf.value;
    ball.color = colorOf.value;}


function onDraw(){

    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x,ball.y,ball.size,0,360);
    ctx.closePath();
    ctx.fill();
    ctx.filter = "none";

}

canvas.onclick = onClick;
