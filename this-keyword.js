//this keyword is used to refer an object 
//(IMPLICIT Binding)

//example 1
let user={
    name : "sunny",
    age:24,
    innerObj:{
        
        getDetails(){
            console.log(this.name)
        }
    }
}

user.innerObj.getDetails()    //undefined, because this keyword will refer to its parents object i.e. innerObj{} which does not have name key



// example2
let user={
    name : "sunny",
    age:24,
    innerObj:{
        name: "roadside coder",
        getDetails(){
            console.log(this.name)
        },
        arrowFun: () =>{
            console.log(this.name)
        }
    }
}

user.innerObj.getDetails()    //roadside coder, here this keyword refer to its parent object innerObj which has name key
user.innerObj.arrowFun()      //undefined, this will point to window object which does not have name variable
