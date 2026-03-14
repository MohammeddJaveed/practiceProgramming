//  Eliminate duplicate values in an array

const arr=[20,20,13,15,13,10,9,8]
let result=[]
function duplicateValues(){
   return [...new Set(arr)]
}
console.log(duplicateValues())