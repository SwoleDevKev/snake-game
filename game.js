
import { snakeSpeed, update as updateSnake , draw as DrawSnake } from "./snake.js"; 

let lastRender = 0
const gameBoard = document.getElementById("gameBoard")

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRender) / 1000
    if (secondsSinceLastRender < 1/ snakeSpeed) return

    lastRender = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
}

function draw(){
    gameBoard.innerHTML = ''
    DrawSnake(gameBoard)
}