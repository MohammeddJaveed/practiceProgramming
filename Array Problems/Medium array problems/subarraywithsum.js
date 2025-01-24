// Find the subarray with a given sum. 


const arr = [13, 2, 3, 7, 5]
const target_sum = 12

function findSubarray(){
    let currentSum = 0
    let left = 0
   for(let i =0; i < arr.length; i++){
    currentSum += arr[i];
    
    while(currentSum > target_sum && left <= i){
        currentSum -= arr[left]
        left++
    }
    if(currentSum === target_sum){
        return arr.slice(left , i + 1)
    }
   }
   return null
}
console.log(findSubarray())