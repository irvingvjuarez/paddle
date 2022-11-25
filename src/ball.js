import { clearCanvas } from "./services/clearCanvas.js"

export class Ball {
	constructor(imgElement) {
		this.img = imgElement
		this.size = 25
		this.speed = { x: 3, y: 5 }
		this.position = { x: 0, y: 0 }
	}

	start(ctx) {
		setInterval(() => {
			clearCanvas(
				this.position.x - this.speed.x,
				this.position.y - this.speed.y,
				this.size,
				this.size
			)

			this.draw(ctx)
			this.update()
		}, 100)
	}

	draw(ctx) {
		ctx.drawImage(
			this.img,
			this.position.x,
			this.position.y,
			this.size,
			this.size
		)
	}

	update() {
		this.position.x += this.speed.x
		this.position.y += this.speed.y
	}
}