import { Ball } from "./src/ball.js"
import { Game } from "./src/game.js";
import { movementListener } from "./src/listeners/movementListener.js";
import { Paddle } from "./src/paddle.js";
import { Brick } from "./src/brick.js";

const ballElement = document.getElementById("ball-img")
const brickElement = document.getElementById("brick-img")

const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
const ball = new Ball(ballElement)
const brick = new Brick(brickElement)

const game = new Game()
game.start()

movementListener()

export { ctx, paddle, ball, brick }