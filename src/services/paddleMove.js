import { ctx, paddle } from "../../main.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../globals.js";

export function paddleMove(direction) {
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

	paddle.update(direction);
	paddle.draw(ctx);
}