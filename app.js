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


//create ball
//draw ball
//create paddle
//draw paddle
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
    y: canvas.height/2,
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
//






//draw all
function draw(){
    drawBall();
};
draw();