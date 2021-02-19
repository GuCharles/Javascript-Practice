const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ball = {x : 0, y : 0, size : 10, color : "#FFFFFF", speed : -0};
let isBallOn = false;
let isBallDown = true;
let onClick = (e) => {
    if(!isBallOn){
        ball.x = e.offsetX;
        ball.y = e.offsetY;
        setInterval(()=>{
            if(isBallDown){
                ball.speed += 3;
                ball.y += ball.speed;
                Run(e);
            }else if(!isBallDown){
                ball.speed -= 3;
                ball.y -= ball.speed;
                Run(e);
            }
            
        },20);
        isBallOn = true;
        
    }
};
    ctx.fillStyle="#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);

let Run = (e)=>{
    ctx.fillStyle="#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x,ball.y,ball.size,0,360);
    ctx.closePath();
    ctx.fill();
    ctx.filter = "none";

    if(ball.y > canvas.height-ball.size/2-15){
        ball.y = canvas.height-ball.size/2-15;
        isBallDown = false
    }
    else if(ball.speed == 0 ) isBallDown = true;
    
    document.onkeydown = e=>{
        if(e.key == "d") ball.x+=8;
        else if(e.key = "a") ball.x-=8;
    }
    
};


canvas.onclick = onClick;
