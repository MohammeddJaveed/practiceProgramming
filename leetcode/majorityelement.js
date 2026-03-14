// Find the majority element in an array. 

// Time complexity - O(n)
//space Complexity - O(n)

const nums = [ 1,2,2,1,1,1]

function majorityElement(){ 
    const map = new Map()
    const majority = Math.floor(nums.length / 2)
    // console.log(majority)
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i],(map.get(nums[i]) || 0) + 1)

        // console.log(map.get(nums[i]))
        if(map.get(nums[i]) > majority){
            return nums[i]
        }
    }
    
    return null
}
console.log(majorityElement())