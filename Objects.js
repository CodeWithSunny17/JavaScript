let obj = {
name: "Sourav",
age: 23,
job: "Developer"
};

obj.name ="Sunny"              //we can change the value of any key of an object like this 
console.log(obj.name);          //will print “Sunny”

delete obj.age;                         //age will be deleted from the obj



let obj = {
name: "Sourav",
age: 23,
job: "Developer",
"Like this Video" : true      //"Keys can be in STRING format like "Like this Video""
};

console.log(obj["Like this Video"])   //this shows how we can access such keys like "Like this Video"


//adding dynamic keys and value in an object
const property = "fname";
const name = "Sunny Kumar"

cosnt user = {
  [property] : name
}


//adding dynmic keys and values
const property = ["fname","gname",]
const name = ["Sunny Kumar", "Mihir pandya"];

const user = property.reduce((obj, key, index) => {
  obj[key] = name[index];
  return obj;
}, {});

console.log(user);



//how to ittrate elements of an object
let obj = {
name: "Sourav",
age: 23,
job: "Developer",
"Like this Video" : true
};

for(keys in obj){
    console.log(keys)           //prints all the keys
    console.log(obj[keys])      //prints all the vaues
}



//what is JSON.stringify and JSON.parse
const user = {
  name: "sunny",
  age: 12
}
const storeObj = JSON.stringify(user)   //object is converted to string

console.log(JSON.stringify(user))
console.log(JSON.parse(storeObj))       //string is parsed back to object



//JS also treats a string like an array
const a= "sunny"
console.log([...a])

//OP: ['s', 'u', 'n', 'n', 'y']



//object destructuring in JS
const user ={
  name: "sunny",
  age:24,
  fullName:{
      first: "sunny",
      last: "kumar"
  }
}

const {name, age, fullName:{ first, last }} = user;  //fullNmae:{} is done in this for further destructuring
console.log(first)



//object referencing questions
//DEEP COPY and SHALLOW COPY, expained here!
const c = { name: "sunny" }
const d = c;                      //SHALLOW COPY, when an object simply hold the reference of another object, we are not copying the objects here
const e = {...c}                  //DEEP COPY, this is how we can truly clone(copy) an object
const f = Object.assign({},c)     //DEEP COPY, another example of deep copy

d.name= "aditya"

console.log(d)  //OP: "sunny"



//both will give false because both element in each comparison has difference reference
console.log([1] === [1])     //false
console.log([1] == [1])      //false



