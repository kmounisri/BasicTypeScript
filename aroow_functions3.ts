//date

let D = new Date(); // creating a new date object

console.log(D) // printing the date object

let currentDate = () : number =>new Date().getDate(); // getting the current date

console.log("the current date is :" + currentDate()) // printing the current date   


let currentMinutes = () : number => new Date().getMinutes(); // getting the current minutes

console.log("the current minutes is :" + currentMinutes()) // printing the current minutes  

let currentHours = () : number => new Date().getHours(); // getting the current hours

console.log("the current hours is :" + currentHours()) // printing the current hours
