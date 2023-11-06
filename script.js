const box = document.querySelectorAll(".box")
const userChoiceX = document.querySelector(".x")
const userChoiceO = document.querySelector(".o")
const board = document.querySelector(".board")
let userChoice = null

userChoiceX.addEventListener("click", () => {
    userChoice = "❌"
})

userChoiceO.addEventListener("click", () => {
    userChoice = "⭕"
})


box.addEventListener("click", (e) => {
    e.target.textContent = userChoice
})