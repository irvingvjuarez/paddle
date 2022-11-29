import { paddle } from "../../main.js"
import { BORDER_PADDING, GAME_HEIGHT, GAME_WIDTH } from "../globals.js"

export const getCollisions = (config) => {
	let { xAxis, yAxis, xSpeed, ySpeed } = config

	const nextXPosition = xAxis += xSpeed
	const nextYPosition = yAxis += ySpeed

	const constraintLeftInX = nextXPosition <= 0
	const constraintRightInX = nextXPosition >= GAME_WIDTH - BORDER_PADDING
	const constraintInX = constraintLeftInX || constraintRightInX

	const constraintTopInY = nextYPosition <= 0
	const constraintBottomInY = nextYPosition >= GAME_HEIGHT // GAME_OVER
	const constraintInY = constraintTopInY || constraintBottomInY

	const paddleCoordinates = paddle.getCoordinates()
	const { xRight, xLeft, yTop } = paddleCoordinates
	const collistionPaddleTape = nextYPosition >= yTop
	const intersectionPaddleRight = nextXPosition <= xRight
	const instersectionPaddleLeft = nextXPosition >= xLeft
	const paddleCollision = collistionPaddleTape && intersectionPaddleRight && instersectionPaddleLeft

	return { constraintInX, constraintInY, paddleCollision }
}