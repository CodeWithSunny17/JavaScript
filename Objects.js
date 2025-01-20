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


