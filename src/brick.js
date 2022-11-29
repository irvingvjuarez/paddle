export class Brick {
	constructor(imgElement) {
		this.img = imgElement
		this.position = { x: 0, y: 0 }
	}

	draw(ctx) {
		ctx.drawImage(
			this.img,
			this.position.x,
			this.position.y
		)
	}
}