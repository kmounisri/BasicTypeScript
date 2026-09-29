let mydata = "mouni"
console.log(mydata)

mydata = 32 //reassigning the value to the variable
console.log(mydata)


// let mydata = "BHEL" //redeclaring the variable SyntaxError: Identifier 'mydata' has already been declared
{
    console.log(mydata)
    let mycolor = "red" //declaring the variable inside the block
    console.log(mycolor) //accessing the variable declared inside the block
}
//console.log(mycolor)    //ReferenceError: mycolor is not defined