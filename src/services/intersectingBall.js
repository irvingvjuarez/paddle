import { ball } from "../../main.js"

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

	const intersectionYTop = ballY <= objectYEnd
	const intersectionYBottom = ballYEnd >= objectYEnd

	const intersectionBallTop = intersectionX && intersectionYTop
	const intersectionBallBottom = intersectionX && intersectionYBottom

	return {
		intersectionBallTop,
		intersectionBallBottom
	}
}