// function with return type and without parameter




function add(): number {
    let a: number = 10;
    let b: number = 20;
    console.log("the sum of a and b is :" + (a + b));
    return a;
    return b; // unreachable code, this return statement will not be executed because the function will return after the first return statement
    
}
let result: number = add(); // calling function and storing the returned value
console.log("value is :" +result);  // printing the returned value of the function  



function concat(): string {
    let a: number = 10;
    let b: number = 20;
    let c: string = "Parrot";
    console.log("the sum of a and b is :" + (a + b));
    console.log("the concatenated string is :" + (c + a + b)); // returning the sum of c,a and b; 

    return c + (a + b); // returning the sum of a and b and concat with c

}

console.log("value is :" +(concat()));  // printing the returned value of the function  

