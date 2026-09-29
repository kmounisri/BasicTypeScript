// optional parameters in functions

function myData(name: string, aadhar?: number): void {  // function with optional parameter\
    console.log(`Name: ${name}, Aadhar: ${aadhar}`);
}

myData("Alice"); // undefined: Calling function without providing optional parameter
myData("Bob", 1234567890); // Calling function with all parameters 


//or 


// optional parameters in functions

function myData1(name: string, aadhar?: number): void {  // function with optional parameter\
    
    if (aadhar) {
        console.log(`Name: ${name}, Aadhar: ${aadhar}`);
    } else {
        console.log(`Name: ${name}, Aadhar: Not provided`);
    }
}

myData1("Mouni"); // Calling function without providing optional parameter
myData1("soma", 1234567890); // Calling function with all parameters  