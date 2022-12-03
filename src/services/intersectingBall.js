import { ball } from "../../main.js"
import { BALL_SPEED_Y } from "../globals.js"

export const intersectingBall = (coords) => {
	const { x: ballX, y: ballY } = ball.position
	const { x: objectX, y: objectY, w: objectW, h: objectH } = coords
	const ballSize = ball.size

	const ballXEnd = ballX + ballSize
	const ballYEnd = ballY + ballSize

	const objectXEnd = objectX + objectW
	const objectYEnd = objectY + objectH

	const intersectionXRight = ballXEnd > objectX && ballXEnd < objectXEnd
	const intersectionXLeft = ballX < objectXEnd && ballXEnd > objectX
	const intersectionX = intersectionXRight && intersectionXLeft

	const surpassIntersectionYTop = ballY < objectYEnd - BALL_SPEED_Y
	const intersectionYTop = ballY <= objectYEnd
	const intersectionYBottom = ballYEnd >= objectYEnd

	const intersectionBallLeft = surpassIntersectionYTop && intersectionXLeft
	const intersectionBallRight = surpassIntersectionYTop && intersectionXRight
	const intersectionBallTop = intersectionX && intersectionYTop
	const intersectionBallBottom = intersectionX && intersectionYBottom

	return {
		intersectionBallLeft,
		intersectionBallRight,
		intersectionBallTop,
		intersectionBallBottom
	}
}