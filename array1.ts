let std1marks: number =78;
let std2marks: number = 89;
let std3marks: number = 90;
let std4marks: number = 67;
let std5marks: number = 56; 
let std6marks: number = 45;
let std7marks: number = 34;

console.log("the marks of student 1 is :" + std1marks)
console.log("the marks of student 2 is :" + std2marks)

// creating an array of student marks
//syntax 1

let studentMarks: number[] = [78, 89, 90, 67, 56, 45, 34]; // creating an array of student marks
console.log("the marks of student 1 is :" + studentMarks[0]) //printing the marks of student 1 from the array
console.log("the marks of student 2 is :" + studentMarks[1])

console.log("marks of all students are :" + studentMarks)  // printing the marks of all students


//to print no of elements or students stored in the array
console.log("total no of students are :" + studentMarks.length)  // printing the no of students

//syntax 2

let examMarks: number[] = new Array(8); // creating an array of student marks using new keyword
examMarks[0] = 78; //roll no 1
examMarks[1] = 89; //roll no 2      
examMarks[2] = 90; //roll no 3
examMarks[3] = 67; //roll no 4
examMarks[4] = 56; //roll no 5

console.log("marks of all students are :" + examMarks)  // printing the marks of all students  
console.log("the marks of student 1 is :" + examMarks[0]) //printing the marks of student 1 from the array
console.log("the marks of student 2 is :" + examMarks[1]) //printing the marks of student 2 from the array

console.log("total no of students are :" + examMarks.length)  // printing the no of students

// adding new elements to the array
examMarks[7] = 45; //roll no 8 
examMarks[9] = 34; //roll no 10
//array gets dynamically resized when new elements are added to the array
console.log("total no of students are :" + examMarks.length)  // printing the no of students

console.log("marks of all students are :" + examMarks)  // printing the marks of all students
console.log("the marks of student 9 is :" + examMarks[8]) //printing the marks of student 9 from the array
console.log("the marks of student 11 is :" + examMarks[10]) //printing the marks of student 11 from the array
