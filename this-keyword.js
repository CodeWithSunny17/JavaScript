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






// example 4
const calc={
    total:0,
    add(a){
        this.total=this.total+a;
        return this;
    },
    subtract(b){
        this.total=this.total-b;
        return this;
    },
    multiply(c){
        this.total=this.total*c
        return this;
    }
}

const result = calc.add(5).subtract(2).multiply(6)
console.log(result.total)        //OP: 18
