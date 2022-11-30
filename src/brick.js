export class Brick {
	constructor(imgElement, position =  { x: 0, y: 0 }) {
		this.img = imgElement
		this.position = position
	}

	draw(ctx) {
		ctx.drawImage(
			this.img,
			this.position.x,
			this.position.y
		)
	}
}