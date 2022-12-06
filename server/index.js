import express from "express"
import { Player } from "./player.js";
const PORT_NUMBER = 3000;

const app = express()
const players = []

// GET
app.get("/join", (_req, res) => {
	const id = Math.random().toString();
	const newPlayer = new Player(id)
	players.push(newPlayer)

	res.setHeader("Access-Control-Allow-Origin", "*")

	res.send(id)
})

app.listen(PORT_NUMBER, () => {
	console.log(`Server listening on http://localhost:${PORT_NUMBER}`)
})