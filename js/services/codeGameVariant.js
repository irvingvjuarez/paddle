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

				<button type="button">Join game</button>
			</form>
		</section>
	`
}