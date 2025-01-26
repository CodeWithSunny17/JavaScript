//call, bind, apply
//EXPLICIT BINDING

//what is call? - With the call() method, you can write a method that can be used on different objects.

var obj = { name: "sunny" }

function sayHello(){
  console.log("Hello " + this.name)
}

sayHello.call(obj)      //OP: "Hello sunny", call(obj) giving access to object obj to the sayHello function  



//this is how we can give params after using call()
var obj = { name: "sunny" }

function sayHello(a){
  console.log("Hello " + this.name + ". Your age is " + a)
}

sayHello.call(obj, 24)     //OP: "Hello sunny. Your age is 24"
