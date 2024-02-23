
import { snakeSpeed, update as updateSnake , draw as DrawSnake, getSnakeHead, snakeIntersection } from "./snake.js"; 
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRender = 0
let gameover = false
const gameBoard = document.getElementById("gameBoard")

function main(currentTime){

    if (gameover){
     return alert('you lost')

    }

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
    updateFood()
    checkSnakeDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    DrawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkSnakeDeath() {
    gameover = outsideGrid(getSnakeHead() )|| snakeIntersection() 
}