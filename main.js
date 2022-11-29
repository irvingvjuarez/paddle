import { Ball } from "./src/ball.js"
import { Game } from "./src/game.js";
import { movementListener } from "./src/listeners/movementListener.js"
import { Paddle } from "./src/paddle.js"
import { clearCanvas } from "./src/services/clearCanvas.js";

let initialTime = 0;

const ballElement = document.getElementById("ball-img")

const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
const ball = new Ball(ballElement)

movementListener()

const game = new Game()
game.start()

export { ctx, paddle, ball }