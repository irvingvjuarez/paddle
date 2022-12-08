import { codeGameVariant } from "./services/codeGameVariant.js"
import { newGameVariant } from "./services/newGameVariant.js"

console.log("Hello World")

const newGameInput = document.getElementById("new-game")
const codeGameInput = document.getElementById("code-game")
const nextbutton = document.querySelector(".multi-player-form-submit")
const form = document.querySelector(".multi-player-form")
const mainContainer = document.querySelector("main")

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

form.addEventListener("submit", (evt) => {
	evt.preventDefault()

	const chosenValue = multiPlayerInputs.find(input => input.checked).id

	if (chosenValue === "new-game") {
		newGameVariant(mainContainer)
	} else if (chosenValue === "code-game") {
		codeGameVariant(mainContainer)
	}
})