// ## VIEW 1 ##
const viewOne = document.querySelector(".sec-one")
const vsCompBtn = document.querySelector(".vsComp")
const vsHumBtn = document.querySelector(".vsHum")
let userVs = null

// ## VIEW 2 ##
const viewTwo = document.querySelector(".sec-two")
const userChoiceX = document.querySelector(".x")
const userChoiceO = document.querySelector(".o")
let userChoice = null

// ## VIEW 3 ##
const viewThree = document.querySelector(".sec-three")
const box = document.querySelectorAll(".box")
const board = document.querySelector(".board")



if (userVs == null) {
            
    vsCompBtn.addEventListener("click", () => {
        userVs = vsCompBtn
        alert(`you have chosen to${userVs.textContent.toLowerCase()}`)
        viewTwo.style.display = "flex"
        viewOne.style.display = "none"
    })

    vsHumBtn.addEventListener("click", () => {
        userVs = vsHumBtn
        alert(`you have chosen to${userVs.textContent.toLowerCase()}`)
        viewTwo.style.display = "flex"
        viewOne.style.display = "none"
    })

    userChoiceX.addEventListener("click", () => {
        userChoice = "❌"
        alert(`you are${userChoice}`)
        viewTwo.style.display = "none"
        viewOne.style.display = "none"
        viewThree.style.display = "flex"
    })
    
    userChoiceO.addEventListener("click", () => {
        userChoice = "⭕"
        alert(`you are${userChoice}`)
        viewTwo.style.display = "none"
        viewOne.style.display = "none"
        viewThree.style.display = "flex"
    })
} 