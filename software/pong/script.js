const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Game settings
const paddleWidth = 12;
const paddleHeight = 90;
const paddleMargin = 22;
const ballSize = 16;
const paddleSpeed = 6;
const aiSpeed = 4;

let playerScore = 0;
let aiScore = 0;

// Paddle positions
let playerY = canvas.height / 2 - paddleHeight / 2;
let aiY = canvas.height / 2 - paddleHeight / 2;

// Ball position and velocity
let ballX = canvas.width / 2 - ballSize / 2;
let ballY = canvas.height / 2 - ballSize / 2;
let ballVX = 5 * (Math.random() > 0.5 ? 1 : -1);
let ballVY = 3 * (Math.random() > 0.5 ? 1 : -1);

// Mouse tracking for player paddle
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    let mouseY = e.clientY - rect.top;
    playerY = mouseY - paddleHeight / 2;
    // Keep paddle within bounds
    if (playerY < 0) playerY = 0;
    if (playerY > canvas.height - paddleHeight) playerY = canvas.height - paddleHeight;
});

// Drawing functions
function drawRect(x, y, w, h, color = "#fff") {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color = "#fff") {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
}

function drawText(text, x, y, size = 32) {
    ctx.fillStyle = "#fff";
    ctx.font = `${size}px monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
}

function resetBall() {
    ballX = canvas.width / 2 - ballSize / 2;
    ballY = canvas.height / 2 - ballSize / 2;
    // Serve to last scorer
    ballVX = 5 * (Math.random() > 0.5 ? 1 : -1);
    ballVY = 3 * (Math.random() > 0.5 ? 1 : -1);
}

function update() {
    // Move ball
    ballX += ballVX;
    ballY += ballVY;

    // Ball collision with top/bottom
    if (ballY <= 0) {
        ballY = 0;
        ballVY *= -1;
    }
    if (ballY + ballSize >= canvas.height) {
        ballY = canvas.height - ballSize;
        ballVY *= -1;
    }

    // Ball collision with player paddle
    if (
        ballX <= paddleMargin + paddleWidth &&
        ballY + ballSize >= playerY &&
        ballY <= playerY + paddleHeight
    ) {
        ballX = paddleMargin + paddleWidth;
        ballVX *= -1.07;
        // Add effect based on where hit
        let hitPos = (ballY + ballSize / 2) - (playerY + paddleHeight / 2);
        ballVY = hitPos * 0.18;
    }

    // Ball collision with AI paddle
    if (
        ballX + ballSize >= canvas.width - paddleMargin - paddleWidth &&
        ballY + ballSize >= aiY &&
        ballY <= aiY + paddleHeight
    ) {
        ballX = canvas.width - paddleMargin - paddleWidth - ballSize;
        ballVX *= -1.07;
        let hitPos = (ballY + ballSize / 2) - (aiY + paddleHeight / 2);
        ballVY = hitPos * 0.18;
    }

    // Score check
    if (ballX < 0) {
        aiScore++;
        resetBall();
    }
    if (ballX + ballSize > canvas.width) {
        playerScore++;
        resetBall();
    }

    // AI paddle follows ball
    let aiCenter = aiY + paddleHeight / 2;
    if (aiCenter < ballY + ballSize / 2 - 10) {
        aiY += aiSpeed;
    } else if (aiCenter > ballY + ballSize / 2 + 10) {
        aiY -= aiSpeed;
    }
    // Keep AI paddle within bounds
    if (aiY < 0) aiY = 0;
    if (aiY > canvas.height - paddleHeight) aiY = canvas.height - paddleHeight;
}

function draw() {
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw middle line
    for (let i = 0; i < canvas.height; i += 30) {
        drawRect(canvas.width / 2 - 1, i, 2, 18, "#444");
    }

    // Draw paddles
    drawRect(paddleMargin, playerY, paddleWidth, paddleHeight, "#0cf");
    drawRect(canvas.width - paddleMargin - paddleWidth, aiY, paddleWidth, paddleHeight, "#f33");

    // Draw ball
    drawRect(ballX, ballY, ballSize, ballSize, "#ff0");

    // Draw scores
    drawText(playerScore, canvas.width / 2 - 80, 50, 36);
    drawText(aiScore, canvas.width / 2 + 80, 50, 36);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();