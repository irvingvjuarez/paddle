import { GAME_HEIGHT, GAME_WIDTH } from "./globals.js"
import { clearCanvas } from "./services/clearCanvas.js"

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

		if(nextXPosition <= 0 || nextXPosition >= GAME_WIDTH) {
			this.speed.x = this.speed.x * - 1
		}

		if(nextYPosition <= 0 || nextYPosition >= GAME_HEIGHT) {
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