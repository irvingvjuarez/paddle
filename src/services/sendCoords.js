export const sendCoords = (coords) => {
	const fetchConfig = {
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(coords)
	}

	fetch("http://localhost:3000/paddle/coords", fetchConfig)
}