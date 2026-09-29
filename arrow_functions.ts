// arrow functions


function multiply(m: number, n: number): number {  // function with parameters and return type
    return m * n; // returning the product of m and n

}
console.log(multiply(10, 20));
let k = multiply(2, 20);
console.log(k);



// or 
 

// p is a arrow function with parameters and return type

let p  = (a: number, b: number): number => a*b;
console.log(p(10, 20))