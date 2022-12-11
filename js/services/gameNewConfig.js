export const gameNewConfig = (gameCode, currentPlayer) => {
	return {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({
			gameCode,
			currentPlayer
		})
	}
}