import { ball, ctx, paddle } from "../../main.js"
import { clearCanvas } from "./clearCanvas.js"

export const gameLoop = (time, brickObjects) => {
	clearCanvas()
	paddle.draw(ctx)
	ball.draw(ctx)

	console.log(brickObjects)

	requestAnimationFrame(gameLoop)
}