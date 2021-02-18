const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ball = {x : 0, y : 0, size : 30, color : "#FFFFFF", speed : -0};
let isBallOn = false;
let isBallDown = true;
let isStop = false;
let onClick = (e) => {
    if(!isBallOn){
        ball.x = e.offsetX;
        ball.y = e.offsetY;
        setInterval(()=>{
            if(isBallDown){
                ball.speed += 3;
                ball.y += ball.speed;
                Run();
            }else if(!isBallDown){
                if(!isStop){
                ball.speed -= 3;
                ball.y -= ball.speed;
                }
                if(ball.y == canvas.height-ball.size/2-15 && !isStop){
                    ball.speed = 0;
                    isStop = true;
                }
                Run();
            }
            document.addEventListener("keypress",()=>{
                if(e.key == "ArrowRight") ball.x+=3;
            });
        },20);
        isBallOn = true;
        
    }
};
    ctx.fillStyle="#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);

let Run = ()=>{
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
};


canvas.onclick = onClick;