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



//write a function that takes an array of functions and excute it one by one\

let arrFun =[
        function add(a,b) {
            return a+b
        },  
        function subtract(a,b) {
            return a-b
        }, 
        function multiply(a,b) {
            return a*b
        }
    ]
    
    
    let arrFun1 =[
        {
            fun: function add(a,b) {
                return a+b
            }
        },  
        {
            fun: function subtract(a,b) {
            return a-b
            }
        }, 
        {
            fun: function multiply(a,b) {
            return a*b
            }
        }
    ]
    
    const main=()=>{
        return arrFun.map((fun)=> fun.fun(6,4))
    }
    console.log(main())



//return "this is my name" in reverse order i.e "name my is this"
 const value="this is my name";
 
  let word = "";
  let outputWords = [];
  let final=""

  for (let i = 0; i < value.length; i++) {
    let char = value[i];
    if ((value[i] === " ")) {
      outputWords.push(word);
      word = "";
    } else {
      word += char;
      char="";
    }
    if(i===value.length-1){
        outputWords.push(word);
    }
  }
  
  
  for(let i=outputWords.length-1;i>=0;i--){
      final=final+" "+outputWords[i];
  }
  
console.log(final);
