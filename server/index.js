import express from "express"
import cors from "cors"

import { Player } from "./player.js";
const PORT_NUMBER = 3000;
const games = []

const app = express()
app.use(cors())
app.use(express.json())

// GET
app.get("/game/members", (req, res) => {
	res.send({ games })
})
// app.get("/join", (_req, res) => {
// 	const id = Math.random().toString();
// 	const newPlayer = new Player(id)
// 	players.push(newPlayer)

// 	res.send(id)
// })

// POST
app.post("/paddle/coords", (req, res) => {
	const paddleCoords = req.body || {}
	console.log({ players, paddleCoords })

	res.end()
})

app.post("/game/join", (req, res) => {
	const { player, gameCode } = req.body
	const chosenGame = games.find(game => game.gameCode === gameCode)

	if (chosenGame) {
		chosenGame.players.push(player)
		console.log({ chosenGame })
		res.status(200).send("Player added successfully")
	} else {
		res.status(404).send("Game code not found")
	}
})

app.post("/game/new", (req, res) => {
	const { gameCode, player } = req.body
	const newGame = { gameCode, players: [player] }
	games.push(newGame)

	console.log({ newGame })

	res.end()
})

app.listen(PORT_NUMBER, () => {
	console.log(`Server listening on http://localhost:${PORT_NUMBER}`)
})