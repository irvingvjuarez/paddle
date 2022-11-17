import { GAME_HEIGHT, GAME_WIDTH } from "./globals.js";

export class Paddle {
	constructor() {
		this.width = 150;
		this.height = 20;

		this.position = {
			x: (GAME_WIDTH / 2) - (this.width / 2),
			y: GAME_HEIGHT - this.height - 10
		}
	}

	draw(ctx) {
		const { x, y } = this.position
		ctx.fillRect(x, y, this.width, this.height)
	}
}