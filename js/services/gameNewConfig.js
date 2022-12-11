export const gameNewConfig = (gameCode, player) => {
	return {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({
			gameCode,
			player
		})
	}
}