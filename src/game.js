import { gameLoop } from "./services/gameLoop.js"

export class Game {
	constructor () {}

	start() {
		requestAnimationFrame(gameLoop)
	}
}