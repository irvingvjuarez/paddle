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
		let movementValue = 0;

		switch(direction) {
			case "ArrowRight":
				const paddleRightBorder = this.position.x + this.width
				if (paddleRightBorder <= GAME_WIDTH) {
					movementValue = MOVEMENT_VALUE
				}
			break;
			case "ArrowLeft":
				const paddleLeftBorder = this.position.x
				if (paddleLeftBorder >= 0) {
					movementValue = MOVEMENT_VALUE * -1
				}
			break;
		}

		this.position.x += movementValue
	}
}