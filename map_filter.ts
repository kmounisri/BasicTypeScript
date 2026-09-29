    
    
    
    let std =[{name:"Raghu", branch:"EEE", year:"3rd year", city:"Hyderabad", country:"India", active:true} ,{
name:"Ramesh", branch:"CSE", year:"3rd year", city:"Bangalore", country:"India", active:false} ,{
name:"Suresh", branch:"EEE", year:"4th year", city:"Chennai", country:"India", active:true} ,{
name:"Mahesh", branch:"CIVIL", year:"1st year", city:"Pune", country:"India", active:false} ]


//map the students with their names

let names : string[] = std.map((std) => std.name) // mapping the students with their names
console.log("the names of the students are :" + names)  // printing the names of the students

let branches : string[] = std.map((std) => std.branch) // mapping the students with their branches
console.log("the branches of the students are :" + branches)  // printing the branches of the students

//filter the students with their branch as EEE
let eeeStudents = std.filter((std) => std.branch == "EEE")
console.log("the students in EEE branch are :" + eeeStudents)  // printing the students in EEE branch

let activeStudents = std.filter((std) => std.active == true)
console.log("the active students are :" + activeStudents)  // printing the active students


let studentsInIndia = std.filter((std) => std.country == "India")
console.log("the students in India are :" + studentsInIndia)  // printing the students in India
