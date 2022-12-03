import { ctx } from "../main.js"
import { Brick } from "./brick.js"
import { GAME_WIDTH } from "./globals.js"
import { LEVEL_ONE } from "./levels.js"
import { gameLoop } from "./services/gameLoop.js"
const brickElement = document.getElementById("brick-img")

export class Game {
	constructor () {
		this.brickObjects = []
		this.drawBricks()
	}

	drawBricks (level = LEVEL_ONE) {
		const brickRows = level.length;
		const brickColumns = level[0].length;

		const brickWidth = GAME_WIDTH / brickColumns;
		const brickHeight = (brickWidth * brickElement.height) / brickElement.width

		level.forEach((row, rowIndex) => {
			row.forEach((brick, columnIndex) => {

				if (brick) {
					const brickCoords = {
						x: columnIndex * brickWidth, y: rowIndex * brickHeight,
						w: brickWidth, h: brickHeight,
						id: rowIndex * columnIndex
					}
					const brick = new Brick(brickElement, brickCoords)
					this.brickObjects.push(brick)
				}

			})
		})
	}

	start() {
		requestAnimationFrame((time) => gameLoop(time, this.brickObjects))
	}
}