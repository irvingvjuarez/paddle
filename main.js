const canvas = document.getElementById("game-screen")
const ctx = canvas.getContext("2d")

ctx.clearRect(0, 0, 800, 600)

ctx.fillStyle = "#f00"
ctx.fillRect(5, 5, 50, 50);

ctx.fillStyle = "#00f"
ctx.fillRect(70, 70, 15, 15)