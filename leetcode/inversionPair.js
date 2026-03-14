// Count inversion pairs in an array. 

// Time Complexity - O(nlogn)
// Space Complexity - O(n )

const nums = [2,4,3,5,1]
function inversionPair(){

let left = 0
let right = nums.length - 1
let mid = Math.floor((left + right) / 2)
let i = left
let j = mid + 1
let k = left
let temp =[];
let Count = 0

while(i <= mid && j <=right){
    if(nums[i] <= nums[j]){
     temp[k] = nums[i]
     i++
     k++
    }else{
        temp[k] = nums[j]
        j++
        k++
        Count += mid-i + 1
    }
    
}
while(i <= mid){
    temp[k] = nums[i]
    i++                                         // remaining in left add to array
    k++
}
while(j <= right){
    temp[k] = nums[j]
    j++
    k++                                           // remaining in right add to array
}
return Count
}
console.log(inversionPair())