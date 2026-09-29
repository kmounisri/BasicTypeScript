//let Weather: number = "cool"    // no error throws and program executes successfully but it is not a good practice to assign string value to number type variable.
//console.log(Weather)


let Weather1: string = "cool"
console.log(Weather1)

let MyAccountNumber: number = 1000423353
console.log(MyAccountNumber)

let RainHappening: boolean = true
console.log(RainHappening)

//let SchoolOOpen: boolean = null    // no error throws and program executes successfully but it is not a good practice to assign null value to boolean type variable.
//console.log(SchoolOOpen)

let SleepingTime: undefined
console.log(SleepingTime)

let MyCar: symbol = Symbol("carname")
let MyData = {
    name: "Mouni",
    age: 22,
    [MyCar]: "creta"
}

console.log(MyData)