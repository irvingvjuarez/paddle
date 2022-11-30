import { ball, ctx, paddle } from "../../main.js"
import { clearCanvas } from "./clearCanvas.js"

export const gameLoop = (time, brickObjects) => {
	clearCanvas()
	paddle.draw(ctx)
	ball.draw(ctx)
	brickObjects.forEach(brick => brick.draw(ctx))

	requestAnimationFrame((newTime) => gameLoop(newTime, brickObjects))
}