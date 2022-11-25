import { clearCanvas } from "./services/clearCanvas.js"

export class Ball {
	constructor(imgElement) {
		this.img = imgElement
		this.speed = { x: 5, y: 5 }
		this.position = { x: 0, y: 0 }
	}

	start(ctx) {
		setInterval(() => {
			clearCanvas()
			this.draw(ctx)
			this.update()
		}, this.speed.x * 100)
	}

	draw(ctx) {
		ctx.drawImage(
			this.img,
			this.position.x,
			this.position.y,
			20,
			20
		)
	}

	update() {
		this.position.x += 2
		this.position.y += 2
	}
}