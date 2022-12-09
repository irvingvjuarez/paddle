import { Ball } from "./src/ball.js"
import { Game } from "./src/game.js";
import { movementListener } from "./src/listeners/movementListener.js";
import { Paddle } from "./objects/paddle.js";
// import { joinGame } from "./src/services/joinGame.js";

const pathname = document.location.pathname
let ctx, paddle, ball, game

if (pathname === "/pages/solo-player.html") {
	const ballElement = document.getElementById("ball-img")

	const canvas = document.getElementById("game-screen")
	ctx = canvas.getContext("2d")

	paddle = new Paddle()
	ball = new Ball(ballElement)

	game = new Game()
	game.start()

	// joinGame()

	movementListener()
}

export { ctx, paddle, ball, game }