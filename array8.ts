

// arrow based function to map and filter the elements of the array


// to map any element of the array 

let n : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // creating an array of numbers

// to map the elements of the array to their squares
let add2 : number[] = n.map((value) => value + 2) // mapping the elements of the array to their squares
console.log("the numbers increased by 2 are :" + add2)  // printing the numbers increased by 2


let square : number[] = n.map((value) => value * value) // mapping the elements of the array to their squares
console.log("the squares of the numbers are :" + square)  // printing the squares of the numbers

// to filter any element of the array

let num :number[]= n.filter((value) => value > 5) // filtering the elements of the array greater than 5
console.log("the numbers greater than 5 are :" + num)  // printing the numbers greater than 5

let num1 :number[]= n.filter((value) => value % 5 !== 0) // filtering the elements of the array less than 5
console.log("the numbers not divisible by 5 are :" + num1)  // printing the numbers not divisible by 5

let even : number[] = n.filter((value) => value % 2 == 0) // filtering the even numbers from the array
console.log("the even numbers are :" + even)  // printing the even numbers