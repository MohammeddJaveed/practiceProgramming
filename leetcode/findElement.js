// Check if an array contains a specific element. 

// Time Complexity - O(n)
//Space Complexity - O(1)
const arr = [10,20,30,40]
let targetElement = 9
function findElement(){
    // if(arr.includes(targetElement)){
    //     return true
    // }else{
    //     return false
    // }
  const Check =  (arr.includes(targetElement)?  true : false)
  return Check
}

console.log(findElement())