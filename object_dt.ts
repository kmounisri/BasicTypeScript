interface empdata {
    office: string   //create a rough data
    empid: number,
    empname: string,
    empdept: string,
    isSalary: boolean,
    empexperience?: number,
    
    empdomain: string
    empAddress: {
        emppincode: number
        empstreet: string,
        empcity?: string,
        empstate: string,
        empcountry: string
    }
    // optional property

}

let empinfo : empdata =  // creating empinfo from rough data empdata
{
    empid: 1001,
    empname: "Mouni",
    empdept: "IT",
    isSalary: true,
    empexperience: 5,
    empdomain: "Software Engineering",
    empAddress: {
        emppincode: 110001,
        empstreet: "123 Main St",
        empcity: "New York",
        empstate: "NY",
        empcountry: "USA"
    },
    office: ""
}

console.log(empinfo)
console.log("the emp domain is :" + empinfo.empdomain)
console.log("the emp street is :" + empinfo.empAddress.empstreet)

 // adding new property to empinfo object
empinfo.office = "DLF"; 
console.log("the emp office is :" + empinfo.office)  // accessing new property of empinfo object
console.log(empinfo)  // printing empinfo object after adding new property

// adding new subobject property to empinfo object
empinfo.empAddress.emppincode = 110001;
console.log("the emp pincode is :" + empinfo.empAddress.emppincode)  // accessing new subobject property of empinfo object
console.log(empinfo)  // printing empinfo object after adding new subobject property

 // updating/override  the value of existing property of empinfo object
empinfo.office = "DLF Cyber City"; 
console.log(empinfo)  // printing empinfo object after updating the value of existing property

// deleting the existing property of empinfo object
delete empinfo.empexperience;  
console.log(empinfo)  // printing empinfo object after deleting the property

//delete the subobject property of empinfo object
delete empinfo.empAddress.empcity;  
console.log(empinfo)  // printing empinfo object after deleting the subobject property

console.log("keys: " + Object.keys(empinfo))  // printing the keys of empinfo object
console.log("values: " + Object.values(empinfo))  // printing the values of empinfo object
console.log("entries: " + Object.entries(empinfo))  // printing the entries of empinfo object
console.log("type of empinfo: " + typeof empinfo)  // printing the type of empinfo object
console.log("empdata is a TypeScript interface and has no runtime type")