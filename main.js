import { GAME_HEIGHT, GAME_WIDTH } from "./src/globals.js";
import { Paddle } from "./src/paddle.js"

let lastTime = 0;
const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
paddle.draw(ctx)

function gameLoop(timestamp) {
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

	const deltaTime = timestamp - lastTime;
	lastTime = timestamp;

	paddle.update(deltaTime);
	paddle.draw(ctx);

	requestAnimationFrame((e) => {
		// console.log({ timestamp: e })
		gameLoop(e)
	})
}

// gameLoop()