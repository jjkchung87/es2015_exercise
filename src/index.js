import {choice, remove} from './helpers'
import fruits from './food'

const randomFruit = choice(fruits)

console.log(`I'd like one ${randomFruit}, please`)
console.log(`Here you go: ${randomFruit}`)
console.log("Delicious! May I have another?")

remove(fruits, randomFruit)

console.log(`I'm sorry, we have ${fruits.length} fruits left`)