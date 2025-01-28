//callback example
function interval(callBackf){
    setTimeout(()=>{
        callBackf("ye to print ho gya!!");
    },1000)
}
interval(function callBackf(pass){
    console.log(pass);
})




//promise example
const subPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result=true;
        if(result) resolve("promise is fulfilled!")
        else reject(new Error("not fulfilled"))
    },1000)
}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

console.log("end")




//promise chaining
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
function likeTheVideo(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("Like the video");
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
    return likeTheVideo()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})




//promise combinators: Helps us to execute more than one promise one time. Types: promise.all(), promise.except(), 
//promise.all() - It will return an array of promises fulfilled, in any one of the promises get failed promise.all() will fail (and it will directly go to catch() block)
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
function likeTheVideo(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("Like the video");
        },1000)
    })
}


Promise.all([interval(), subscribe("sunny"), likeTheVideo()])
.then((res)=>{
    console.log(res)        //OP: ['ye to print ho gya!!', 'sunny subscribed my channel!!', 'Like the video'], it returns an array of fulfilled promises
})
.catch((err)=>{
    console.log(err)
})



//promise.race() - it will return the first promise to get fulfilled or rejected
function interval(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("ye to print ho gya!!");
        },3000)
    })
}
function subscribe(newMember){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (newMember+" subscribed my channel!!");
        },2000)
    })
}
function likeTheVideo(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("Like the video");
        },1000)
    })
}


Promise.race([interval(), subscribe("sunny"), likeTheVideo()])
.then((res)=>{
    console.log(res)        //OP: "Like the video", as it will execute and fulfill first
})
.catch((err)=>{
    console.log(err)
})



//promise.allSettled() - it will return all the promises with fulfilled and rejected status
function interval(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("ye to print ho gya!!");
        },3000)
    })
}
function subscribe(newMember){
    return promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject (newMember+" subscribed my channel!!");
        },2000)
    })
}
function likeTheVideo(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("Like the video");
        },1000)
    })
}


Promise.allSettled([interval(), subscribe("sunny"), likeTheVideo()])
.then((res)=>{
    console.log(res)        //OP: [{ status: 'fulfilled', value: 'ye to print ho gya!!' }, { status: 'rejected', reason: 'sunny subscribed my channel!!' }, { status: 'fulfilled', value: 'Like the video' }]
                            //it will return all the promises with fulfilled and rejected status
})
.catch((err)=>{
    console.log(err)
})



//promise.any() - it will return the first promise to get fulfilled, skipping the rejcted one
function interval(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("ye to print ho gya!!");
        },3000)
    })
}
function subscribe(newMember){
    return promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject (newMember+" subscribed my channel!!");
        },100)
    })
}
function likeTheVideo(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("Like the video");
        },1000)
    })
}


Promise.any([interval(), subscribe("sunny"), likeTheVideo()])
.then((res)=>{
    console.log(res)        //OP: "Like the video", Skipped the subscribe() as it is rejected promise
})
.catch((err)=>{
    console.log(err)
})





//Async-Await
function interval(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("ye to print ho gya!!");
        },3000)
    })
}
function subscribe(newMember){
    return promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject (newMember+" subscribed my channel!!");
        },100)
    })
}
function likeTheVideo(){
    return promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("Like the video");
        },1000)
    })
}


const result = async ()=>{
    try{
        const m1 = await interval()
        console.log(m1)
    }catch(error){
        console.log(error)
    }
}


