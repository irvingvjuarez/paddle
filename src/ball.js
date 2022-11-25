export class Ball {
	constructor(imgElement) {
		this.img = imgElement
	}

	draw(ctx) {
		ctx.drawImage(this.img, 10, 10)
	}
}