import { ball } from "../../main.js"

export const intersectingBall = (coords) => {
	const { x: ballX, y: ballY } = ball.position
	const { x: objectX, y: objectY, w: objectW, h: objectH } = coords
	const ballSize = ball.size

	const intersectionXRight = ballX + ballSize > objectX && ballX + ballSize < objectX + objectW
	const intersectionXLeft = ballX < objectX + objectW && ballX + ballSize > objectX
	const intersectionXTop = intersectionXRight && intersectionXLeft

	const intersectionY = ballY <= objectY + objectH
	const intersectionBallTop = intersectionXTop && intersectionY

	return {
		intersectionBallTop
	}
}