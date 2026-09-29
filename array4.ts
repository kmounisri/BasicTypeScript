

let animals: string[] = ["dog", "cat", "elephant", "tiger", "bear", "wolf","snake","parrot"] // creating an array of animals

// to insert element at end of the array

animals.push("lion") // inserting element at end of the array
console.log("the animals are :" + animals)  // printing the animals


// to insert element at start of the array

animals.unshift("monkey") // inserting element at start of the array
console.log("the animals are :" + animals)  // printing the animals

//deleting the last element of the array

animals.pop() // deleting the last element of the array
console.log("the animals are :" + animals)  // printing the animals

//deleting the first element of the array

animals.shift() // deleting the first element of the array
console.log("the animals are :" + animals)  // printing the animals


//deleting the element at specific index of the array

animals.splice(3,2) // deleting the element from index 3 of the array and how many elements to delete is 2
// print excluding tiger and bear
console.log("the animals are :" + animals)  // printing the animals

//deleting elemtns from index 4 to end of the array

animals.splice(4) // deleting the element from index 4 of the array to the end
console.log("the animals are :" + animals)  // printing the animals

//inserting the element at specific index of the array
animals.splice(2,1,"giraffe", "zebra", "lion") // delete 1 element at index 2 and insert the 3 new elements
console.log("the animals are :" + animals)  // printing the animals


