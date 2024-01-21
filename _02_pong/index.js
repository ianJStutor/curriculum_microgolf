//dependencies
import { fullscreenCanvas } from "./fullscreenCanvas.js";
import { lerp } from "./lib.js";

//environment
const canvas = document.querySelector("canvas");
const ctx = fullscreenCanvas(canvas, window);

//ball state
const ball = {};

function resetBall() {
    const { width, height } = canvas;
    ball.x = width * 0.5;
    ball.y = height * 0.5;
    const minBallSpeed = 5;
    const maxBallSpeed = 10;
    const angle = lerp(0, Math.PI*2, Math.random());
    const speed = lerp(minBallSpeed, maxBallSpeed, Math.random());
    ball.vx = speed * Math.cos(angle);
    ball.vy = speed * Math.sin(angle);
    const minBallRadius = 10;
    const maxBallRadius = 25;
    ball.r = lerp(minBallRadius, maxBallRadius, Math.random());
    ball.color = "teal";
    ball.life = 100;
}

//loop
function loop(t) {
    const { width, height } = canvas;
    //erase
    ctx.clearRect(0, 0, width, height);
    //draw
    testing: {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${width}×${height}`, width*0.5, height*0.5);
    }
    //repeat
    requestAnimationFrame(loop);
}

//init
function init() {
    resetBall();
    requestAnimationFrame(loop);
}

init();