// Find the subarray with the maximum sum (Kadane's Algorithm). 


const arr = [-2,1,-3,4,-1,2,1,-5,4]

// function displaySubarrays(){
//     // let result = []
//     let currentsum=0
//     for(let i = 0; i < arr.length; i++){
//         let temp = []
//         for( let j = i; j < arr.length; j++){
//             temp.push(arr[j])
//             result.push([...temp])
//         }
//     }
//     return result
// }
// console.log(displaySubarrays())

function maxSubArray(){
let maxSum = -Infinity
let currentsum = 0
for(let i =0; i < arr.length; i++){
    currentsum += arr[i]
    maxSum = Math.max(currentsum,maxSum)
    if(currentsum < 0){
        currentsum = 0
    }
}
return maxSum
}
console.log(maxSubArray())