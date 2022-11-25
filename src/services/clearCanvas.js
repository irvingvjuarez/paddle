import { GAME_HEIGHT, GAME_WIDTH } from "../globals.js";
import { ctx } from "../../main.js"

export const clearCanvas = () => {
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}