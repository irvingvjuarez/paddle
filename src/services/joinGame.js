export const joinGame = async () => {
	const req = await fetch("http://localhost:3000/join")
	const id = await req.json()
	console.log({ id })
}