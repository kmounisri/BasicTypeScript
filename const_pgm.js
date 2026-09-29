const mydata = "mouni"
console.log(mydata) 

//mydata = 32 //reassigning the value to the variable SyntaxError: Assignment to constant variable.
console.log(mydata)

//const mydata = "BHEL" //redeclaring the variable SyntaxError: Identifier 'mydata' has already been declared 
console.log(mydata)

{
const   mycolor = "red" //declaring the variable inside the block
console.log(mycolor) //accessing the variable declared inside the block
}

//console.log(mycolor)    //ReferenceError: mycolor is not defined