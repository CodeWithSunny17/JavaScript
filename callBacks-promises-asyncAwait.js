//callback example
function interval(callBackf){
    setTimeout(()=>{
        callBackf("ye to print ho gya!!");
    },1000)
}
interval(function callBackf(pass){
    console.log(pass);
})




//promise ex1
const subPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result=true;
        if(result) resolve("promise is fulfilled!")
        else reject(new Error("not fulfilled"))
    },1000)
}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

console.log("end")




//promise ex2
function interval(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("ye to print ho gya!!");
        },1000)
    })
}
function subscribe(newMember){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (newMember+" subscribed my channel!!");
        },1000)
    })
}


interval()
.then((res)=>{
    console.log(res)
    return subscribe("Sunny");
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
