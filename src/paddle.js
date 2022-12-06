import { ball } from "../main.js";
import { BORDER_PADDING, GAME_HEIGHT, GAME_WIDTH, MOVEMENT_VALUE, PADDLE_HEIGHT, PADDLE_WIDTH } from "./globals.js";
import { intersectingBall } from "./services/intersectingBall.js";
import { sendCoords } from "./services/sendCoords.js";

const halfPadding = BORDER_PADDING / 2

export class Paddle {
	constructor() {
		this.coords = {
			x: (GAME_WIDTH / 2) - (PADDLE_WIDTH / 2),
			y: GAME_HEIGHT - PADDLE_HEIGHT - 10,
			w: PADDLE_WIDTH,
			h: PADDLE_HEIGHT
		}
	}

	getCoordinates() {
		const xRight = this.coords.x + this.coords.w + (BORDER_PADDING/2)
		const xLeft = this.coords.x - BORDER_PADDING
		const yTop = this.coords.y - BORDER_PADDING
		const yBottom = this.coords.y + this.coords.h

		return { xRight, xLeft, yTop, yBottom }
	}

	draw(ctx) {
		const intersectionBallConfig = {
			...this.coords,
			y: this.coords.y - PADDLE_HEIGHT
		}
		const { intersectionBallBottom } = intersectingBall(intersectionBallConfig)

		if(intersectionBallBottom) {
			ball.changeDirectionInY()
		}

		ctx.fillRect(
			this.coords.x,
			this.coords.y,
			this.coords.w,
			this.coords.h
		)
	}

	update(direction) {
		let movementValue = 0;

		switch(direction) {
			case "ArrowRight":
				const paddleRightBorder = this.coords.x + this.coords.w
				const collisionRight = paddleRightBorder <= GAME_WIDTH - halfPadding

				if (collisionRight) movementValue = MOVEMENT_VALUE
			break;
			case "ArrowLeft":
				const paddleLeftBorder = this.coords.x
				const collisionLeft = paddleLeftBorder >= 0 + halfPadding

				if (collisionLeft) movementValue = MOVEMENT_VALUE * -1
			break;
		}

		this.coords.x += movementValue

		sendCoords(this.coords)
	}
}