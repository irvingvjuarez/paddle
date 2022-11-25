import { clearCanvas } from "./services/clearCanvas.js"

export class Ball {
	constructor(imgElement) {
		this.img = imgElement
		this.size = 25
		this.speed = { x: 3, y: 5 }
		this.position = { x: 0, y: 0 }
	}

	draw(ctx) {
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