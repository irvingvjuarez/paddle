import { paddle } from "../main.js"
import { BORDER_PADDING, GAME_HEIGHT, GAME_WIDTH } from "./globals.js"

export class Ball {
	constructor(imgElement) {
		this.img = imgElement
		this.size = 25
		this.speed = { x: 3, y: 5 }
		this.position = { x: 0, y: 0 }
	}

	draw(ctx) {
		let { x: xAxis, y: yAxis } = this.position
		let { x: xSpeed, y: ySpeed } = this.speed

		const nextXPosition = xAxis += xSpeed
		const nextYPosition = yAxis += ySpeed

		const constraintLeftInX = nextXPosition <= 0
		const constraintRightInX = nextXPosition >= GAME_WIDTH - BORDER_PADDING
		const constraintInX = constraintLeftInX || constraintRightInX

		const constraintTopInY = nextYPosition <= 0
		const constraintBottomInY = nextYPosition >= GAME_HEIGHT // GAME_OVER
		const constraintInY = constraintTopInY || constraintBottomInY

		const paddleCoordinates = paddle.getCoordinates()
		const { xRight, xLeft, yTop } = paddleCoordinates
		const collistionPaddleTape = nextYPosition >= yTop
		const intersectionPaddleRight = nextXPosition <= xRight
		const instersectionPaddleLeft = nextXPosition >= xLeft
		const paddleCollision = collistionPaddleTape && intersectionPaddleRight && instersectionPaddleLeft

		if(constraintInX) {
			this.speed.x = this.speed.x * - 1
		}

		if(constraintInY) {
			this.speed.y = this.speed.y * - 1
		}

		if(paddleCollision) {
			this.speed.y = this.speed.y * - 1
		}

		this.position.x += this.speed.x
		this.position.y += this.speed.y

		ctx.drawImage(
			this.img,
			this.position.x,
			this.position.y,
			this.size,
			this.size
		)
	}
}