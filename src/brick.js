export class Brick {
	constructor(imgElement, coords =  { x: 0, y: 0, w: 100, h: 50 }) {
		this.img = imgElement
		this.coords = coords
	}

	draw(ctx) {
		ctx.drawImage(
			this.img,
			this.coords.x,
			this.coords.y,
			this.coords.w,
			this.coords.h
		)
	}
}