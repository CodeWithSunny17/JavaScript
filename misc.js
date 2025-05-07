//simply making a key value pair using two different arrays
array = [0,1,2,3]
array2= ["a", "b", "c", "d"]

var obj={}
for(let i=0; i<4 ;i++){
    obj={...obj, [array[i]] : array2[i]};
}

console.log(obj)


//occurance question
const arr =[1,2,1,4,2,3,1,4,0];
let obj ={};

for(let i=0;i<arr.length;i++){
    const o = {[arr[i]] : arr[i] in obj? obj[arr[i]]+1 :1}        //we are checking if the key arr[i] is present in the arr
    // const o = {[arr[i]] : obj[arr[i]]? obj[arr[i]]+1 :1}       //we are checking if the value is present in the arr, this can also be done
    obj = {...obj, ...o}
}

console.log(obj);



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
