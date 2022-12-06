import { Ball } from "./src/ball.js"
import { Game } from "./src/game.js";
import { movementListener } from "./src/listeners/movementListener.js";
import { Paddle } from "./src/paddle.js";
// import { joinGame } from "./src/services/joinGame.js";

// Registering path aliases
require("module-alias/register")

const ballElement = document.getElementById("ball-img")

const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

const paddle = new Paddle()
const ball = new Ball(ballElement)

const game = new Game()
game.start()

// joinGame()

movementListener()

export { ctx, paddle, ball, game }