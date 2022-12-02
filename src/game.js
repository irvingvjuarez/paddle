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

	drawBricks () {
		const brickWidth = GAME_WIDTH / this.brickColumns;
		const brickHeight = (brickWidth * brickElement.height) / brickElement.width

		for(let i = 0; i < this.brickColumns; i++) {
			const brickCoords = {
				x: i * brickWidth, y: 0,
				w: brickWidth, h: brickHeight,
				id: i * this.brickColumns * this.brickRows
			}
			const brick = new Brick(brickElement, brickCoords)
			this.brickObjects.push(brick)
		}
	}

	removeBrick (brickID) {
		const brickIndex = this.brickObjects.findIndex(brick => brick.id === brickID)
		this.brickObjects.splice(brickIndex, 1)
	}

	start() {
		requestAnimationFrame((time) => gameLoop(time, this.brickObjects))
	}
}