import { getCollisions } from "./services/getCollisions.js"

export class Ball {
	constructor(imgElement) {
		this.img = imgElement
		this.size = 25
		this.speed = { x: 3, y: 5 }
		this.position = { x: 0, y: 50 }
	}

	changeDirectionInX () {
		this.speed.x = this.speed.x * - 1
	}

	changeDirectionInY () {
		this.speed.y = this.speed.y * - 1
	}

	draw(ctx) {
		let { x: xAxis, y: yAxis } = this.position
		let { x: xSpeed, y: ySpeed } = this.speed

		const collisionsConfig = { xAxis, yAxis, xSpeed, ySpeed }
		const collisionsInfo = getCollisions(collisionsConfig)
		const { constraintInX, constraintInY } = collisionsInfo

		if(constraintInX) {
			this.changeDirectionInX()
		}

		if(constraintInY) {
			this.changeDirectionInY()
		}

		this.position.x += this.speed.x
		this.position.y += this.speed.y

		ctx.drawImage(
			this.img,
			this.position.x,
			this.position.y,
			this.size,
			this.size
		)
	}
}