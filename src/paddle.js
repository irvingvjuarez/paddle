export class Paddle {
	constructor() {
		this.width = 150;
		this.height = 30;
	}

	draw(ctx, x, y) {
		ctx.fillRect(x, y, this.width, this.height)
	}
}