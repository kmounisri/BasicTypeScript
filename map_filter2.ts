let num = [5, 7, 3, 4, 1, 9, 2, 8, 6, 10] // creating an array of numbers

//add 6 to each element of the array using map function

console.log("the numbers increased by 6 are :" + num.map((value) => value + 6))  // printing the numbers increased by 6


//filter the elements of the array greater than 5 using filter function
console.log("the numbers greater than 5 are :" + num.filter((value) => value % 3 === 0))  // printing the numbers greater than 5
console.log("the numbers greater than 5 are :" + num.filter((value) => value > 5))  // printing the numbers greater than 5


//sort the elements of the array in ascending order using sort function

console.log("the numbers in ascending order are :" + num.sort((a,b) => a-b))  // printing the numbers in ascending order

