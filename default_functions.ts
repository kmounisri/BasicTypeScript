// default parameter values in functions

function myData(name: string, age: number, eligible= " is eligible for 50% discount"): void {  // function with default parameter value
   if (age >= 60) {
    console.log( "eligibility criteria : " + name + " " + eligible);
    } 
    else
     {
    console.log( "eligibility criteria :"+name+ " has to pay full ticket fare");
    }
}
myData("Alice", 65); // calling function with default parameter value
myData("Bob", 55); // calling function with default parameter value



