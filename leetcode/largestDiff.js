// Find the largest difference between any two elements in an array:

// Time Complexity - O(n)
// Space Complexity - O(1)

const arr = [9,8,6,7,4,5,3,2,1]


function largestDiff(){
    arr.sort((a,b) => a-b)
    
//   let difference = Math.max(...arr) - Math.min(...arr)
//   return difference


let max = arr[0]
let min = arr[0]

for(let i =0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
    if (arr[i] < min){
        min = arr[i]
    }
} 
let largestDiff = max - min
return{largestDiff}
}
console.log(largestDiff())