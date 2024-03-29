import { getInputDirection } from "./input.js"
import { lastFoodPosition } from "./food.js"


export const snakeSpeed = 2.5


const snakeBody = [{x:10,y:11}]
let newSegments = 0

export function update(){

    addSegments()
    const inputDirection = getInputDirection()

    for (let i = snakeBody.length-2; i >=0; i--){
        snakeBody[i +1 ] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameboard){
    snakeBody.forEach((segment, index) =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        if (index === 0){
            snakeElement.classList.add('head')
        }
        if (onSnake(lastFoodPosition)){
            snakeElement.classList.add('eats')
        }
        
        gameboard.appendChild(snakeElement)
    })
}

export const expandSnake  = (amount) => {
    newSegments += amount
}

export const onSnake  = (position, {ignoreHead = false} = {}) => {
   return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    
    return equalPositions(segment, position)
    })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection (){
    return onSnake(snakeBody[0], {ignoreHead: true})
}
const equalPositions = (position1,position2) => {
    return (position1.x === position2.x && position1.y === position2.y)
}

function addSegments (){
    for ( let i=0; i <newSegments; i ++){
        snakeBody.push({...snakeBody[snakeBody.length -1]}) 
    }
    newSegments = 0
}