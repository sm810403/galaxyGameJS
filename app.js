const cvs = document.querySelector('#canvas');
const ctx = cvs.getContext('2d');
cvs.width = 1000;
cvs.height = 600;

//buttons
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2');
btn1.addEventListener('click', ()=>{
    document.querySelector('.side').classList.add('hide');
});
btn2.addEventListener('click', ()=> {
    document.querySelector('.side').classList.remove('hide');
});


//create ball/
//draw ball/
//create paddle/
//draw paddle/
//draw score
//create brick
//create bricks
//draw bricks
//move ball
//move paddle
//update wall collision
//update brick collision
//update score and reset
const ball = {
    x: canvas.width /2,
    y: canvas.height/2 +80,
    radius: 10,
    speed: 8,
    dx: 4,
    dy: -4,
};
function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.radius, 0, Math.PI*2,false);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
};
//move ball 
function moveBall(){
    ball.x +=dx;
    ball.y +=dy;
}

//draw score
var score = 0;
function drawScore(){
    ctx.font = '20px arial';
    ctx.fillText(`Score: ${score}`,canvas.width - 100, 30);
}
//create paddle
const paddle = {
    x: canvas.width/2-50,
    y: canvas.height- 40,
    w: 100,
    h: 20,
    speed: 8,
    dx: 0,
}
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w,paddle.h);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
};

//create brick
const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true,
}
//creat many bricks
const numberOfRow = 9;
const numberOfColumn = 5;
const bricks = [];
for (let i=0; i<numberOfRow; i++){
    bricks[i]=[];
    for (let j=0;j<numberOfColumn; j++){
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.y + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j]={x,y,...brickInfo};
    }
};
//draw bricks
function drawBricks(){
    bricks.forEach(column => {
        column.forEach(brick=>{
            ctx.beginPath();
            ctx.fillStyle = brick.visible? '#0095dd':'transparent';
            ctx.rect(brick.x,brick.y,brick.w,brick.h);
            ctx.fill();
            ctx.closePath();
        })
    })
}





//draw all
function draw(){
    drawBall();
    drawPaddle();
    drawBricks();
    drawScore();
};

//animate
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw();
    moveBall();
    requestAnimationFrame(animate);

}
animate();