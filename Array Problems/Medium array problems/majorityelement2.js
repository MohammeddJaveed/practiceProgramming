// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

//Tim Complexity - O(n)
//Space Complexity - O(n)

const nums = [3,2,3,2,2]

function majorityElement2(){
    let result =[]
    const map = new Map()
    const majority = Math.floor(nums.length /2)

    for( let i = 0; i< nums.length; i++){
        map.set(nums[i] , (map.get(nums[i])|| 0) +1)
    }
    for(let [key, value] of map){
        if(value > majority){
         result.push(key)
        } 
    }
    return result

}
console.log(majorityElement2())