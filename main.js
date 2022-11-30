import { Ball } from "./src/ball.js"
import { Game } from "./src/game.js";
import { movementListener } from "./src/listeners/movementListener.js";
import { Paddle } from "./src/paddle.js";

const ballElement = document.getElementById("ball-img")

const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
const ball = new Ball(ballElement)

const brickConfig = { rows: 2, columns: 10 }
const game = new Game(brickConfig)
game.start()

movementListener()

export { ctx, paddle, ball }