const box = document.querySelector("div:not(.board)")

const userChoiceX = document.querySelector(".x")
const userChoiceO = document.querySelector(".o")
const board = document.querySelector(".board")
let userChoice = ""

userChoiceX.addEventListener("click", () => {
    userChoice = "❌"
    console.log(userChoice)
})

userChoiceO.addEventListener("click", () => {
    userChoice = "⭕"
    console.log(userChoice)
})

board.addEventListener("click", (e) => {
    e.target.textContent = userChoice
})

