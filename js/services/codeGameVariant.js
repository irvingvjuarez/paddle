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