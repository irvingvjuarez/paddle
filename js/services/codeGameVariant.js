import { API_ROOT } from "../../globals.js"
import { Paddle } from "../../objects/paddle.js"

export const codeGameVariant = (mainContainer) => {
	mainContainer.innerHTML = `
		<section class="code-game-container">
			<form class="code-game-form">
				<div class="code-game-input">
					<label for="code">Enter code</label>
					<input id="code" type="number" placeholder="Ej. 93827" />
				</div>

				<div class="code-game-input">
					<label for="nickname">Enter nickname</label>
					<input id="nickname" type="text" placeholder="Ej. Bellakat" />
				</div>

				<button class="join-game-btn" disabled>Join game</button>
			</form>
		</section>
	`

	const codeInput = document.querySelector("#code")
	const nicknameInput = document.querySelector("#nickname")
	const inputs = [codeInput, nicknameInput]

	const codeGameForm = document.querySelector(".code-game-form")
	const callToActionBtn = document.querySelector(".join-game-btn")

	codeGameForm.addEventListener("submit", (evt) => {
		evt.preventDefault()
		const gameCode = codeInput.value
		const nickName = nicknameInput.value
		const player = new Paddle()

		const reqConfig = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({ player, gameCode })
		}

		fetch(API_ROOT + "game-join", reqConfig)
			.then(req => console.log({ req }))
	})

	function availableButton() {
		const isButtonAvailable = inputs.every(input => Boolean(input.value))
		if (isButtonAvailable) {
			callToActionBtn.removeAttribute("disabled")
		} else {
			const isDisabled = callToActionBtn.hasAttribute("disabled")
			if (!isDisabled) {
				callToActionBtn.toggleAttribute("disabled")
			}
		}
	}

	inputs.forEach(input => {
		input.addEventListener("input", availableButton)
	})
}