import { API_ROOT } from "../../globals.js";
import { Paddle } from "../../objects/paddle.js";

export const newGameVariant = (mainContainer) => {
	const newGameCode = Math.ceil(Math.random() * 60000);
	const player = new Paddle()

	const fetchConfig = {
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
			gameCode: newGameCode,
			player
		})
	}

	fetch(API_ROOT + "game/new", fetchConfig)

	mainContainer.innerHTML = `
		<section class="new-game-container">
			<h2>Share the following code to start playing</h2>

			<span class="game-code">${newGameCode}</span>

			<section class="game-room">
				<h3>Current room members</h3>

				<article>
					<span class="room-member">You</span>
				</article>
			</section>
		</section>
	`
}