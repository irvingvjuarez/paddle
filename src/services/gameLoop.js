import { ball, ctx, paddle } from "../../main.js"
import { clearCanvas } from "./clearCanvas.js"

export const gameLoop = (time) => {
	clearCanvas()
	paddle.draw(ctx)
	ball.draw(ctx)

	requestAnimationFrame(gameLoop)
}