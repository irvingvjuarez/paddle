import { ball } from "../main.js"

export class Brick {
	constructor(imgElement, coords =  { x: 0, y: 0, w: 100, h: 50 }) {
		this.img = imgElement
		this.coords = coords
	}

	draw(ctx) {
		const { x: ballX, y: ballY } = ball.position
		const ballSize = ball.size
		const intersectionX = ballX >= this.coords.x && ballX + ballSize <= this.coords.x + this.coords.w
		const intersectionY = ballY <= this.coords.y + this.coords.h
		const brickIntersection = intersectionX && intersectionY

		if (brickIntersection) {
			ball.changeDirectionInY()
		}

		ctx.drawImage(
			this.img,
			this.coords.x,
			this.coords.y,
			this.coords.w,
			this.coords.h
		)
	}
}