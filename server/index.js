import express from "express"
const PORT_NUMBER = 3000;

const app = express()

// GET
app.get("/", (req, res) => {
	res.send("Hello from express.js")
})

app.listen(PORT_NUMBER, () => {
	console.log(`Server listening on http://localhost:${PORT_NUMBER}`)
})