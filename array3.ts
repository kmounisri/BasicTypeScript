

let animals1: string[] = ["dog", "cat", "elephant", "tiger", "bear", "wolf"] // creating an array of animals
let animals2: Array<string> = ["dog", "lion", "monkey", "giraffe", "zebra","snake", "crocodile", "leopard"] // creating an array of animals
console.log("the animals are :" + animals1)  // printing the animals
console.log("the animals are :" + animals2)  // printing the animals


console.log("the fourth animal is :" + animals1[3]) //printing the fourth animal from the array
console.log("the fifth animal is :" + animals2[4]) //printing the fifth animal from the array

// merging two arrays of animals

let animals: string[] = animals1.concat(animals2) 


console.log("the merged animals are :" + animals)  // printing the merged animals

// getting index value of an animal from the array
console.log("the index of tiger is :" + animals.indexOf("tiger")) //printing the index of tiger from the array
console.log("the index of snake is :" + animals.indexOf("snake")) //printing the index of snake from the array
