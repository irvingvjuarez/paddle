import { ctx, paddle } from "../../main.js";
import { clearCanvas } from "./clearCanvas.js";

export function paddleMove(direction) {
	clearCanvas()

	paddle.update(direction);
	paddle.draw(ctx);
}