

// functions without return type and  with parameters


function rect(length: number, breadth: number): void {  // function with parameters and without return type
   let area: number = length * breadth;
    console.log("the area of the rectangle is :" + area);
}

rect(10, 20);
rect (15, 25);


function student(rollno: number, name: string, branch: string, isStudying: boolean): void {     
    // function with parameters and without return type
    console.log(`Student Details:
    Roll No: ${rollno}
    Name: ${name}
    Branch: ${branch}
    Is Studying: ${isStudying}`);
}

student(1, "Alice", "Computer Science", true);
student(2, "Bob", "Mathematics", false);

