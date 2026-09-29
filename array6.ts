let animals: string[] = ["dog", "cat", "elephant", "tiger", "bear", "wolf","snake","parrot","monkey", "lion", "giraffe", "zebra", "crocodile", "leopard"] // creating an array of animals

console.log("the animals are :" + animals)  // printing the animals


//to print each element of the array using for loop

for (let x in animals) {
    console.log("the animal"+ x +" is :" + animals[x])  // printing the animal
}


// to reverse the elements of the array

let animals2 :  string[] = ["dog", "cat", "elephant", "tiger", "bear", "wolf","snake","parrot","monkey", "lion", "giraffe", "zebra", "crocodile", "leopard"] // creating an array of animals

let animalsreverse: string[] = animals2.reverse() // reversing the elements of the array

 console.log("reverse order")
for (let x in animalsreverse) {
   
    console.log("the animal"+ x +" is :" + animalsreverse[x])  // printing the animal
}
