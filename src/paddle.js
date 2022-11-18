import { GAME_HEIGHT, GAME_WIDTH, MOVEMENT_VALUE } from "./globals.js";

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

	update(direction) {
		let movementValue = direction === "ArrowRight" ? MOVEMENT_VALUE : MOVEMENT_VALUE * -1
		this.position.x += movementValue
	}
}