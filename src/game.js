import { ctx } from "../main.js"
import { Brick } from "./brick.js"
import { GAME_WIDTH } from "./globals.js"
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
		const brickWidth = GAME_WIDTH / this.brickColumns;
		const brickHeight = (brickWidth * brickElement.height) / brickElement.width

		for(let i = 0; i < this.brickColumns; i++) {
			const brickCoords = {x: i * brickWidth, y: brickHeight, w: brickWidth, h: brickHeight}
			const brick = new Brick(brickElement, brickCoords)
			this.brickObjects.push(brick)
		}
	}

	start() {
		requestAnimationFrame((time) => gameLoop(time, this.brickObjects))
	}
}