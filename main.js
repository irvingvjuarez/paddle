import { movementListener } from "./src/listeners/movementListener.js"
import { Paddle } from "./src/paddle.js"

const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
paddle.draw(ctx)

movementListener()

export { ctx, paddle }