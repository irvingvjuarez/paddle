import { GAME_HEIGHT, GAME_WIDTH } from "../globals.js";
import { ctx } from "../../main.js"

export const clearCanvas = (x = 0, y = 0, w = GAME_WIDTH, h = GAME_HEIGHT) => {
	ctx.clearRect(x, y, w, h);
}