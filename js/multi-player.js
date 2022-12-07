const newGameInput = document.getElementById("new-game")
const codeGameInput = document.getElementById("code-game")
const nextbutton = document.querySelector(".multi-player-form-submit")

const multiPlayerInputs = [newGameInput, codeGameInput]
let isNextButtonAvailable = false

function checkButtonAvailability() {
	isNextButtonAvailable = multiPlayerInputs.some(input => input.checked)

	if (isNextButtonAvailable) {
		nextbutton.removeAttribute("disabled")
	}
}

multiPlayerInputs.forEach(input => {
	input.addEventListener("change", checkButtonAvailability)
})