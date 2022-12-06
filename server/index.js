import express from "express"
import cors from "cors"

import { Player } from "./player.js";
const PORT_NUMBER = 3000;
const players = []

const app = express()
app.use(cors())
app.use(express.json())

// GET
app.get("/join", (_req, res) => {
	const id = Math.random().toString();
	const newPlayer = new Player(id)
	players.push(newPlayer)

	res.send(id)
})

// POST
app.post("/paddle/coords", (req, res) => {
	const paddleCoords = req.body.coords || {}
	console.log({ players, paddleCoords })

	res.end()
})

app.listen(PORT_NUMBER, () => {
	console.log(`Server listening on http://localhost:${PORT_NUMBER}`)
})