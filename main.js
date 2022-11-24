import { Ball } from "./src/ball.js"
import { movementListener } from "./src/listeners/movementListener.js"
import { Paddle } from "./src/paddle.js"

const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
const ball = new Ball()

paddle.draw(ctx)
ball.draw(ctx)

movementListener()

export { ctx, paddle }