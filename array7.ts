let marks : number[] = [78, 89, 90, 67, 56, 45, 34]; // creating an array of student marks

//sort the elements of the array in ascending order

console.log("the marks in ascending order are :" + marks.sort())  // printing the marks in ascending order

// but this is wrong when we give -ve numbers
let marks1 : number[] = [78, 89, 90, 67, 56, 45, 34, -3, -92];

//  console.log("the marks in ascending order are :" + marks.sort())  --- wrong method gives wrong output
// output is -3, -92, 34, 45, 56, 67, 78, 89, 90

// to sort the elements of the array in ascending order we need to compare the elements of the array using a compare function


// printing the marks in ascending order

console.log("the marks in ascending order are :" + marks1.sort((a,b) => a-b))  

 // printing the marks in descending order
console.log("the marks in descending order are :" + marks1.sort((a,b) => b-a)) 