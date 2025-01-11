//Map/Filter/Reduce practice questions

let students = [
{name: "Piyush", rollNumber: 31, marks: 80 },
{name: "Jenny", rollNumber: 15, marks: 69 }, 
{name: "Kaushal", rollNumber: 16, marks: 35},
{name: "Dilpreet", rollNumber: 7, marks: 55 },
];


// Question 1 - Return only name of students in Capital
result = students.map((e)=>{
    return e.name.toUpperCase();
})

// Question 2 - Return only details of those who scored more than 60 marks
result = students.filter((e)=>{
    return e.marks>60;
})

// Question 3 - More than 60 marks and rollNumber grater than 15
result = students.filter((e)=>{
    return e.marks>60 && e.rollNumber>15;
})

// Question 4 - Sum of marks of all students
result = students.reduce((acc, curr)=>{
    return acc+curr.marks
},0)

//Question 5 - Return only names of students who scored more than 60
result = students.filter((e)=>e.marks>60).map((e)=>e.name)

// Question 6 - Return total marks for students with marks grater than 60
// after 20 marks have been added to those who scored less than 60
result = students.map((e)=>{
    if(e.marks<60){e.marks+=20}
    return e;
})
.filter((e)=>e.marks>60)
.reduce((acc, curr)=>{
    return acc+curr.marks
},0)

console.log(result)
