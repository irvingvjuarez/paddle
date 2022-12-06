const newGameInput = document.getElementById("new-game")
const codeGameInput = document.getElementById("code-game")

const multiPlayerInputs = [newGameInput, codeGameInput]

multiPlayerInputs.forEach(input => {
	input.addEventListener("change", (evt) => {
		if (evt.target.checked) {
			console.log("is checked")
		}
	})
})