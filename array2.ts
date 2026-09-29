// not recommended 
// let stddata: any[]=[45,"Raghu", 21, "EEE", "3rd year", true, "Hyderabad", "India"] // creating an array of student data


//when dealing with data in terms of arrays

//arrays

let stddata: (number | string | boolean)[]=[45,"Raghu", 21, "EEE", "3rd year", true, "Hyderabad", "India"] // creating an array of student data

console.log("the student data is :" + stddata)  // printing the student data

//when dealing data in terms of tuples

//tuples

let stdtuple: [number, string, number, string, string, boolean, string, string] = [45,"Raghu", 21, "EEE", "3rd year", true, "Hyderabad", "India"] // creating a tuple of student data

console.log("the student tuple data is :" + stdtuple)  // printing the student tuple data

// if we write the below code, it will give an error as we are trying to add a new element to the tuple which is not allowed in tuples
// stdtuple[8] = "India" // adding a new element to the tuple which is not allowed in tuples



