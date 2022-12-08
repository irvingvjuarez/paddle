export const codeGameVariant = (mainContainer) => {
	mainContainer.innerHTML = `
		<section class="code-game-container">
			<form class="code-game-form">
				<input type="text" placeholder="Enter code..." />

				<button>Join game</button>
			</form>
		</section>
	`
}