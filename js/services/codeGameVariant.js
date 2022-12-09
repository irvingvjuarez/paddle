export const codeGameVariant = (mainContainer) => {
	mainContainer.innerHTML = `
		<section class="code-game-container">
			<form class="code-game-form">
				<div class="code-game-input">
					<label for="code">Enter code</label>
					<input id="code" type="text" placeholder="Ej. 93827" />
				</div>

				<div class="code-game-input">
					<label for="nickname">Enter nickname</label>
					<input id="nickname" type="text" placeholder="Ej. Bellakat" />
				</div>

				<button disabled>Join game</button>
			</form>
		</section>
	`

	const codeInput = document.querySelector("#code")
	const nicknameInput = document.querySelector("#nickname")
	const codeGameForm = document.querySelector(".code-game-form")

	console.log({
		codeInput, nicknameInput, codeGameForm
	})
}