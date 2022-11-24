export class Ball {
	constructor() {
		const ballElement = document.createElement("img")
		ballElement.src = "./src/assets/ball-img.png"

		this.imgElment = ballElement
	}

	draw(ctx) {
		ctx.drawImage(this.imgElment, 10, 10)
	}
}