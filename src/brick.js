import { ball } from "../main.js"
import { intersectingBall } from "./services/intersectingBall.js"

export class Brick {
	constructor(imgElement, coords =  { x: 0, y: 0, w: 100, h: 50 }) {
		this.img = imgElement
		this.coords = coords
	}

	draw(ctx) {
		const { intersectionBallTop } = intersectingBall(this.coords)

		if (intersectionBallTop) {
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