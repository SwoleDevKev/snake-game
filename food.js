import { randomGridPosition } from "./grid.js"
import { expandSnake, onSnake } from "./snake.js"


const expansionRate = 9

export let food = randomGridPosition()
export let lastFoodPosition = {x:0,y:0}
    

export function update(){

    food = getFoodPosition()

   if (onSnake(food)) {
    expandSnake(expansionRate)
    food = getRandomFoodPosition()
   } 
    
}

export function draw(gameboard){
   
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameboard.appendChild(foodElement)
}

export const getFoodPosition = () =>{
    lastFoodPosition = food
    return lastFoodPosition
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}