//simply making a key value pair using two different arrays
array = [0,1,2,3]
array2= ["a", "b", "c", "d"]

var obj={}
for(let i=0; i<4 ;i++){
    obj={...obj, [array[i]] : array2[i]};
}

console.log(obj)

