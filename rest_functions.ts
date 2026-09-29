// rest parameter functions in TypeScript


// compulsory need to consider all the parameters before the rest parameter in the function

function marks(studname: string, ...marks: number[]): void 
{ 
let h: number = 0;
console.log("the marks of " + studname + " are :" );
for( let sumIs of marks)
{
    h=sumIs + h;
    console.log( sumIs);
}
console.log("the total marks of " + studname + " are :" + h);
}
let  marks1: number[] = [45, 67, 89, 90, 78, 56, 34, 23, 12, 10] // creating an array of student marks
marks("Raghu", ...marks1)  // calling function with rest parameter and passing the array of student marks using spread operator 