//simply making a key value pair using two different arrays
array = [0,1,2,3]
array2= ["a", "b", "c", "d"]

var obj={}
for(let i=0; i<4 ;i++){
    obj={...obj, [array[i]] : array2[i]};
}

console.log(obj)


//occurance question
const sample = [1,1,1,2,2,3,4,4,5,5,5,5,5,5,7,7,6,6,6,6,6,6]

var obj = {}

for(let i=0; i<sample.length; i++){

    //brute force method
    // let count=0
    // for(let j=0; j<sample.length; j++){
        
    //     if(sample[i]==sample[j]){
    //         count++;
    //     }
    // }
    // obj[sample[i]]=count;
    // // console.log(count)
    // count=0;


    //optimized method
    obj[sample[i]]? obj[sample[i]]+=1: obj[sample[i]]=1
}

console.log(obj)
