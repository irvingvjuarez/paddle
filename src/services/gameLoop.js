import { ball, brick, ctx, paddle } from "../../main.js"
import { clearCanvas } from "./clearCanvas.js"

export const gameLoop = (time) => {
	clearCanvas()
	paddle.draw(ctx)
	ball.draw(ctx)
	brick.draw(ctx)

	requestAnimationFrame(gameLoop)
}