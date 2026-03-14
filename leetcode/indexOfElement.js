// Find the index of an element in an array. 

//Time Complexity - O(n)
// Space Complexity - O(1)

const arr =[1,2,3,4,5,6,7,8,9]
let target =6
function findIndex(){
    for(let i =0; i<arr.length; i++){
      if(arr[i]===target){
        return i + 1
      }
    }
}
console.log(findIndex())