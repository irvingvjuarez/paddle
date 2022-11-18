import { MOVEMENT_DIRECTIONS } from "../globals.js";
import { paddleMove } from "../services/paddleMove.js";

export function movementListener() {
	document.addEventListener("keydown", (evt) => {
		const { key } = evt;
		const isMovement = MOVEMENT_DIRECTIONS.includes(key)

		if (isMovement) {
			paddleMove(key)
		}
	})
}