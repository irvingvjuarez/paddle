import { Ball } from "./src/ball.js"
import { movementListener } from "./src/listeners/movementListener.js"
import { Paddle } from "./src/paddle.js"
import { clearCanvas } from "./src/services/clearCanvas.js";

let initialTime = 0;

const ballElement = document.getElementById("ball-img")

const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
const ball = new Ball(ballElement)

// ball.start(ctx)

movementListener()

function gameLoop(time) {
	clearCanvas()
	paddle.draw(ctx)
	ball.draw(ctx)

	requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)

export { ctx, paddle }