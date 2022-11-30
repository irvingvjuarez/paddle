import { ctx } from "../main.js"
import { Brick } from "./brick.js"
import { gameLoop } from "./services/gameLoop.js"
const brickElement = document.getElementById("brick-img")

export class Game {
	constructor (brickConfig) {
		this.brickRows = brickConfig.rows || 1
		this.brickColumns = brickConfig.columns || 10
		this.brickObjects = []
		this.drawBricks()
	}

	drawBricks() {
		for(let i = 0; i < this.brickColumns; i++) {
			const brick = new Brick(brickElement)
			this.brickObjects.push(brick)
		}
	}

	start() {
		requestAnimationFrame((time) => gameLoop(time, this.brickObjects))
	}
}