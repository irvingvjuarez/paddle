import { ctx, paddle } from "../../main.js";

export function paddleMove(direction) {
	paddle.update(direction);
	paddle.draw(ctx);
}