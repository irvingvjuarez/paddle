import { GAME_HEIGHT, GAME_WIDTH } from "./src/globals.js";
import { Paddle } from "./src/paddle.js"

const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
paddle.draw(ctx)

function paddleMove(direction) {
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

	paddle.update(direction);
	paddle.draw(ctx);
}

function movementListener() {
	document.addEventListener("keydown", (evt) => {
		const key = evt.key;
		const isMovement = (key === "ArrowLeft" | key === "ArrowRight")

		if (isMovement) {
			paddleMove(key)
		}
	})
}

movementListener()