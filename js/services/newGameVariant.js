export const newGameVariant = (mainContainer) => {
	const newGameCode = Math.ceil(Math.random() * 60000);

	mainContainer.innerHTML = `
		<section class="new-game-container">
			<h2>Share the following code to start playing</h2>

			<span class="game-code">${newGameCode}</span>

			<section class="game-room">
				<h3>Current room members</h3>

				<article>
					<span>You</span>
				</article>
			</section>
		</section>
	`
}