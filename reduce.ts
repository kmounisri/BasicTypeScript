

let sttdmarks : number[] = [45, 67, 89, 90, 78, 56, 34, 23, 12, 10] // creating an array of student marks

// to get the sum of all the elements of the array
let sum : number = sttdmarks.reduce((acc, cur) => acc + cur, 0)
console.log("the sum of all the elements of the array is :" + sum)
