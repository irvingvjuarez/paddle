import { ball } from "../main.js"
import { intersectingBall } from "./services/intersectingBall.js"

export class Brick {
	constructor(imgElement, coords =  { x: 0, y: 0, w: 100, h: 50 }) {
		this.img = imgElement
		this.coords = coords
		this.id = coords.id
		this.available = true
	}

	toggleAvailability () {
		this.available = !this.available
	}

	draw(ctx) {
		if (this.available) {
			const { intersectionBallTop, intersectionBallLeft, intersectionBallRight } = intersectingBall(this.coords)

			if (intersectionBallLeft || intersectionBallRight) {
				console.log("Intersecting brick on left or right")
			}

			if (intersectionBallTop) {
				ball.changeDirectionInY()
				this.toggleAvailability()
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
}