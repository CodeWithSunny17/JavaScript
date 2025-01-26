//call, bind, apply
//EXPLICIT BINDING

//what is call? - With the call() method, you can write a method that can be used on different objects.

var obj = { name: "sunny" }

function sayHello(){
  console.log("Hello " + this.name)
}

sayHello.call(obj)      //OP: "Hello sunny", call(obj) giving access to object obj to the sayHello function  



//this is how we can give params after using call()
var obj = { name: "Sunny" }

function sayHello(a,b){
  console.log("Hi, " + this.name + " is " + a + " and he's a "+ b)
}

sayHello.call(obj, 24, "Software Engineer")     //OP: "Hello sunny. Your age is 24"



//what is apply? - apply() works just same as call(), the only difference is that bind takes arguments in the form of an array
var obj = { name: "Sunny" }

function sayHello(a,b){
  console.log("Hi, " + this.name + " is " + a + " and he's a "+ b)
}

sayHello.apply(obj, [24, "Software Engineer"])   //"Hi, Sunny is 24 and he's a Software Engineer"



//what is bind? - bind provides us another function which we can call later as many times
var obj = { name: "Sunny" }

function sayHello(a,b){
  console.log("Hi, " + this.name + " is " + a + " and he's a "+ b)
}

const bindFun = sayHello.bind(obj)

bindFun(24, "software Engineer")    //"Hi, Sunny is 24 and he's a software Engineer"
bindFun(34, "Youtuber")    //"Hi, Sunny is 34 and he's a Youtuber"





//use case of apply ex 1
//we can merge two arrays by 3 different methods
array = [0,1,2,3]
array2= ["a", "b"]

array.push.apply(array, array2)    //[ 0, 1, 2, 3, 'a', 'b' ]   using apply()
array.push(...array2)              //[ 0, 1, 2, 3, 'a', 'b' ]
array = [...array, ...array2]      //[ 0, 1, 2, 3, 'a', 'b' ]
console.log(array)                 //[ 0, 1, 2, 3, 'a', 'b' ]


