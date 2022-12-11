import { API_ROOT } from "../../globals.js";
import { Paddle } from "../../objects/paddle.js";
import { gameNewConfig } from "./gameNewConfig.js";

export const newGameVariant = (mainContainer) => {
	const newGameCode = Math.ceil(Math.random() * 60000);
	const currentPlayer = new Paddle("You")
	const members = [currentPlayer]
	const fetchGameMembers = () => {
		fetch(API_ROOT + "game/members")
			.then(req => req.json())
			.then(data => {
				const games = data.games || []
				const chosenGame = games.find(game => game.gameCode === newGameCode)
				if (chosenGame) {
					if (chosenGame.players.length > 1) {
						members.push(chosenGame.players[1])
						console.log(members)
					}
				} else {
					console.log("No chosen game. Throw Error")
				}
			})
	}

	fetch(API_ROOT + "game/new", gameNewConfig(newGameCode, currentPlayer))
		.then(req => console.log({ req }))

	mainContainer.innerHTML = `
		<section class="new-game-container">
			<h2>Share the following code to start playing</h2>

			<span class="game-code">${newGameCode}</span>

			<section class="game-room">
				<h3>Current room members</h3>

				<article class="member-container">
					${members.map(roomMember => `
						<span class="room-member">${roomMember.nickname}</span>
					`)}
				</article>
			</section>
		</section>
	`

	const membersContainer = document.querySelector(".member-container")

	setInterval(() => {
		if (members.length < 2) {
			fetchGameMembers()
		} else {
			membersContainer.innerHTML = `
				${members.map(roomMember => `
					<span class="room-member">${roomMember.nickname}</span>
				`)}
			`
		}
	}, 2000)
}